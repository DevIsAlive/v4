import { type NextRequest, NextResponse } from "next/server"

interface GitHubFile {
  name: string
  path: string
  type: string
  size: number
  download_url: string | null
}

interface GitHubRepo {
  name: string
  description: string
  language: string
  stargazers_count: number
  forks_count: number
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    // Extract owner and repo from GitHub URL
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/)
    if (!match) {
      return NextResponse.json({ error: "Invalid GitHub URL" }, { status: 400 })
    }

    const [, owner, repo] = match
    const cleanRepo = repo.replace(/\.git$/, "")

    // Fetch repository information
    const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${cleanRepo}`)
    if (!repoResponse.ok) {
      throw new Error("Repository not found or not accessible")
    }

    const repoInfo: GitHubRepo = await repoResponse.json()

    // Fetch repository contents recursively
    const files = await fetchRepositoryContents(owner, cleanRepo)

    // Generate project structure
    const structure = generateProjectStructure(files)

    return NextResponse.json({
      name: repoInfo.name,
      description: repoInfo.description,
      language: repoInfo.language,
      stars: repoInfo.stargazers_count,
      forks: repoInfo.forks_count,
      files,
      structure,
    })
  } catch (error) {
    console.error("Scraping error:", error)
    return NextResponse.json({ error: "Failed to scrape repository" }, { status: 500 })
  }
}

async function fetchRepositoryContents(owner: string, repo: string, path = ""): Promise<any[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch contents: ${response.statusText}`)
  }

  const contents: GitHubFile[] = await response.json()
  const files = []

  for (const item of contents) {
    if (item.type === "file") {
      // Skip binary files and very large files
      if (item.size > 100000) continue

      const fileExtension = item.name.split(".").pop()?.toLowerCase()
      const textExtensions = [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "md",
        "txt",
        "css",
        "scss",
        "html",
        "yml",
        "yaml",
        "xml",
        "py",
        "java",
        "cpp",
        "c",
        "h",
        "php",
        "rb",
        "go",
        "rs",
        "swift",
        "kt",
        "dart",
        "vue",
        "svelte",
      ]

      if (!fileExtension || !textExtensions.includes(fileExtension)) {
        continue
      }

      try {
        let content = ""
        if (item.download_url) {
          const fileResponse = await fetch(item.download_url)
          if (fileResponse.ok) {
            content = await fileResponse.text()
          }
        }

        files.push({
          path: item.path,
          content,
          type: item.type,
          size: item.size,
        })
      } catch (error) {
        console.error(`Failed to fetch file ${item.path}:`, error)
      }
    } else if (item.type === "dir") {
      // Recursively fetch directory contents
      try {
        const subFiles = await fetchRepositoryContents(owner, repo, item.path)
        files.push(...subFiles)
      } catch (error) {
        console.error(`Failed to fetch directory ${item.path}:`, error)
      }
    }
  }

  return files
}

function generateProjectStructure(files: any[]): string {
  const structure: { [key: string]: any } = {}

  files.forEach((file) => {
    const parts = file.path.split("/")
    let current = structure

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // It's a file
        current[part] = null
      } else {
        // It's a directory
        if (!current[part]) {
          current[part] = {}
        }
        current = current[part]
      }
    })
  })

  return formatStructure(structure, 0)
}

function formatStructure(obj: any, depth: number): string {
  let result = ""
  const indent = "  ".repeat(depth)

  Object.keys(obj)
    .sort()
    .forEach((key) => {
      if (obj[key] === null) {
        // It's a file
        result += `${indent}${key}\n`
      } else {
        // It's a directory
        result += `${indent}${key}/\n`
        result += formatStructure(obj[key], depth + 1)
      }
    })

  return result
}
