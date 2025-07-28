"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import ProgressBar from "./progress-bar"
import { useLocalization } from "./localization-provider"

interface HumanVerificationPageProps {
  onNext: () => void
  username: string
}

const verificationMessages = [
  "INITIALIZING SECURITY PROTOCOLS...",
  "AUTHENTICATION IN PROGRESS...",
  "VALIDATING USER CREDENTIALS...",
  "CROSS-REFERENCING DATABASES...",
  "VERIFICATION COMPLETE",
]

// Encrypted text animation component
const EncryptedText = ({ finalText, duration = 2000 }: { finalText: string; duration?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(true)

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentIndex = 0

    const decrypt = () => {
      if (currentIndex < finalText.length) {
        let scrambled = ""
        for (let i = 0; i < finalText.length; i++) {
          if (i <= currentIndex) {
            scrambled += finalText[i]
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)]
          }
        }
        setDisplayText(scrambled)
        currentIndex++
      } else {
        setIsDecrypting(false)
        clearInterval(interval)
      }
    }

    interval = setInterval(decrypt, duration / finalText.length)

    return () => clearInterval(interval)
  }, [finalText, duration])

  return <span className={`font-mono ${isDecrypting ? "text-red-400" : "text-green-400"}`}>{displayText}</span>
}

export default function HumanVerificationPage({ onNext, username }: HumanVerificationPageProps) {
  const { t } = useLocalization()
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [showTerminal, setShowTerminal] = useState(false)

  // Start verification process after warning
  useEffect(() => {
    const warningTimer = setTimeout(() => {
      setShowWarning(false)
    }, 3000)

    return () => clearTimeout(warningTimer)
  }, [])

  // Handle verification steps with slower timing
  useEffect(() => {
    if (!showWarning && !showTerminal && currentStep < verificationMessages.length) {
      const timer = setTimeout(() => {
        if (currentStep === verificationMessages.length - 1) {
          // Show terminal after all messages
          setTimeout(() => {
            setShowTerminal(true)
          }, 2000)

          // Complete verification after terminal
          setTimeout(() => {
            setIsComplete(true)
          }, 6000)
        } else {
          setCurrentStep((prev) => prev + 1)
        }
      }, 3000) // Slower timing - 3 seconds per step

      return () => clearTimeout(timer)
    }
  }, [currentStep, showWarning, showTerminal])

  // Auto-continue after success
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        onNext()
      }, 4000) // Longer success display

      return () => clearTimeout(timer)
    }
  }, [isComplete, onNext])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex flex-col items-center justify-center p-4 pb-24 relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/10 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {Math.random().toString(36).substring(2, 6)}
          </motion.div>
        ))}

        {/* Scanning line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-1"
          animate={{
            y: [0, typeof window !== "undefined" ? window.innerHeight : 800, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Only show progress bar during warning */}
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <ProgressBar currentStep={5} totalSteps={6} />
        </motion.div>
      )}

      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl z-10">
        <AnimatePresence mode="wait">
          {showWarning ? (
            <motion.div
              key="warning"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center w-full"
            >
              {/* Giant Warning */}
              <motion.div
                className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 border-8 border-yellow-600 rounded-3xl p-12 mb-8 relative overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(234,179,8,0.6)",
                    "0 0 80px rgba(234,179,8,0.9)",
                    "0 0 40px rgba(234,179,8,0.6)",
                  ],
                }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <AlertTriangle className="w-32 h-32 text-black mx-auto mb-6" />
                </motion.div>

                <motion.h1
                  className="text-6xl font-black text-black mb-4 tracking-wider"
                  style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                  animate={{
                    textShadow: ["0 0 20px rgba(0,0,0,0.3)", "0 0 40px rgba(0,0,0,0.6)", "0 0 20px rgba(0,0,0,0.3)"],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  SECURITY ALERT
                </motion.h1>

                <p
                  className="text-black font-bold text-2xl tracking-wide"
                  style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                >
                  HUMAN VERIFICATION REQUIRED
                </p>
              </motion.div>
            </motion.div>
          ) : !isComplete ? (
            <motion.div
              key="verification"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="text-center w-full"
            >
              {/* Main verification display */}
              <motion.div
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-4 border-red-500 rounded-3xl p-16 mb-8 relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center"
                animate={{
                  borderColor: ["#ef4444", "#dc2626", "#b91c1c", "#ef4444"],
                  boxShadow: [
                    "0 0 30px rgba(239,68,68,0.4)",
                    "0 0 60px rgba(239,68,68,0.7)",
                    "0 0 30px rgba(239,68,68,0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                {/* Scanning overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                {!showTerminal ? (
                  // Show verification messages one by one
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="text-center"
                    >
                      <motion.h2
                        className="text-5xl font-black text-red-400 tracking-wider"
                        style={{ fontFamily: "Orbitron, monospace" }}
                        animate={{
                          textShadow: [
                            "0 0 20px rgba(239,68,68,0.5)",
                            "0 0 40px rgba(239,68,68,0.8)",
                            "0 0 20px rgba(239,68,68,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {verificationMessages[currentStep]}
                      </motion.h2>

                      {currentStep === verificationMessages.length - 1 && (
                        <motion.div
                          className="text-green-400 text-2xl font-bold mt-8"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 }}
                        >
                          SUCCESS
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  // Show terminal data
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                  >
                    <div className="bg-black border-2 border-gray-700 rounded-xl p-6 text-left font-mono text-sm max-w-lg mx-auto">
                      <div className="flex items-center mb-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="ml-4 text-gray-400">SECURITY_TERMINAL</span>
                      </div>

                      <div className="space-y-3 text-green-400">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                          <span className="text-red-400">$</span> Target:{" "}
                          <span className="text-white font-bold">{username}</span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                          <span className="text-red-400">$</span> IP:{" "}
                          <EncryptedText finalText="192.168.1.105" duration={1500} />
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                          <span className="text-red-400">$</span> Status:{" "}
                          <EncryptedText finalText="VERIFIED" duration={1200} />
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                          <span className="text-red-400">$</span> Access:{" "}
                          <EncryptedText finalText="GRANTED" duration={1000} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center w-full"
            >
              {/* Success particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: ["#22c55e", "#16a34a", "#15803d"][i % 3],
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Success message */}
              <motion.div
                className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 border-4 border-green-400 rounded-3xl p-12 mb-8 relative overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(34,197,94,0.6)",
                    "0 0 80px rgba(34,197,94,0.9)",
                    "0 0 40px rgba(34,197,94,0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <motion.div
                  className="text-8xl mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    textShadow: [
                      "0 0 20px rgba(34,197,94,0.5)",
                      "0 0 40px rgba(34,197,94,0.8)",
                      "0 0 20px rgba(34,197,94,0.5)",
                    ],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2,
                    textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  ✓
                </motion.div>

                <motion.h2
                  className="text-6xl font-black text-green-400 mb-6 tracking-wider leading-tight"
                  style={{ fontFamily: "Orbitron, monospace" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    textShadow: [
                      "0 0 20px rgba(34,197,94,0.5)",
                      "0 0 40px rgba(34,197,94,0.8)",
                      "0 0 20px rgba(34,197,94,0.5)",
                    ],
                  }}
                  transition={{
                    delay: 0.4,
                    textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  AUTHENTIC
                  <br />
                  HUMAN
                  <br />
                  DETECTED
                </motion.h2>

                <motion.p
                  className="text-green-300 font-bold text-xl tracking-wide"
                  style={{ fontFamily: "Orbitron, monospace" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  PROCEEDING TO SECURE AREA...
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
