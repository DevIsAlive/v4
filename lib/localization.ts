"use client"

export interface Translations {
  // Spin to Win Page
  spinToWin: string
  spinButton: string
  spinning: string
  youWon: string
  claimPrize: string

  // Username Page
  enterUsername: string
  verifyAccount: string
  verifyAccountDesc?: string
  yourRobloxUsername: string
  verifying: string
  tryingAlternative: string
  welcome: string
  accountVerified: string
  continueToQuiz: string
  connectingToRoblox: string
  usingBackupServers: string
  pleaseEnterUsername: string
  userNotFound: string
  networkError: string

  // Quiz Page
  favoriteGames: string
  howOftenPlay: string
  topItem: string
  quizDone: string

  // Quiz Options
  bloxfruits: string
  adoptMe: string
  growGarden: string
  rivals: string
  everyDay: string
  sometimes: string
  notMuch: string
  aLot: string
  robux: string
  gamepass: string
  giftcard: string
  clothing: string

  // Loot Box Page
  pickYourPrize: string
  chooseBox: string

  // Gift Card Claim Page
  youWonGiftcard: string
  claimIn: string
  odds: string
  timesUp: string
  missedChance: string

  // Live Winners Ticker
  won: string

  // Disclaimer
  disclaimer: string
  importantLegalDisclaimer: string
  entertainmentPurpose: string
  noAffiliation: string
  voluntaryParticipation: string
  simulatedExperience: string
  noRealPrizes: string
  ageRestriction: string
  dataCollection: string
  thirdPartyLinks: string
  liabilityLimitation: string
  intellectualProperty: string
  terminationRights: string
  governingLaw: string
  contactInformation: string

  // Common
  loading: string
  tryAgain: string
  close: string

  favourite: string
}

export const translations: Record<string, Translations> = {
  // English (default)
  en: {
    spinToWin: "SPIN TO WIN! 🚀",
    spinButton: "SPIN TO WIN! 🚀",
    spinning: "SPINNING... ✨",
    youWon: "YOU WON",
    claimPrize: "CLAIM PRIZE! 🚀",

    enterUsername: "Enter Username! 👇",
    verifyAccount: "VERIFY ACCOUNT! 👉",
    verifyAccountDesc: "We'll verify your Roblox account",
    yourRobloxUsername: "Your Roblox Username",
    verifying: "VERIFYING... 🔍",
    tryingAlternative: "TRYING ALTERNATIVE... 🔍",
    welcome: "Welcome",
    accountVerified: "Account Verified Successfully!",
    continueToQuiz: "CONTINUE TO QUIZ! ✅",
    connectingToRoblox: "Connecting to Roblox... 🔍",
    usingBackupServers: "Using backup servers...",
    pleaseEnterUsername: "Please enter a username.",
    userNotFound: "User not found. Please check the username spelling.",
    networkError: "Network error. Please check your connection and try again.",

    favoriteGames: "Favorite Games? 🎮",
    howOftenPlay: "How Often Play? ⏰",
    topItem: "Top Item? 💎",
    quizDone: "Quiz Done! 🎉",

    // Quiz Options
    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Grow a Garden",
    rivals: "Rivals",
    everyDay: "Every Day",
    sometimes: "Sometimes",
    notMuch: "Not Much",
    aLot: "A Lot!",
    robux: "Robux",
    gamepass: "Gamepass",
    giftcard: "Giftcard",
    clothing: "Clothing",

    // Loot Box Page
    pickYourPrize: "PICK YOUR PRIZE! 👇",
    chooseBox: "Choose a Box! ✨",

    // Gift Card Claim Page
    youWonGiftcard: "$750 GIFTCARD!",
    claimIn: "Claim in",
    odds: "Odds:",
    timesUp: "Time's up! ⏰ You missed your chance. 😔",
    missedChance: "You missed your chance",

    // Live Winners Ticker
    won: "won",

    // Disclaimer
    disclaimer: "Legal Disclaimer",
    importantLegalDisclaimer: "IMPORTANT LEGAL DISCLAIMER AND TERMS OF USE",
    entertainmentPurpose:
      "ENTERTAINMENT ONLY: This application is provided strictly for entertainment, educational, and amusement purposes only. No actual prizes, rewards, gift cards, or monetary compensation of any kind will be awarded, distributed, or provided to users.",
    noAffiliation:
      "NO AFFILIATION: This application and its creators have no affiliation, association, authorization, endorsement, or sponsorship with Roblox Corporation, any gaming platforms, gift card providers, or any third-party entities mentioned or referenced herein. All trademarks, logos, and brand names are the property of their respective owners.",
    voluntaryParticipation:
      "VOLUNTARY USE: Participation in this application is entirely voluntary and at your own discretion. Users acknowledge that they are using this service for recreational purposes only and understand that no real benefits, prizes, or rewards will be received.",
    simulatedExperience:
      "SIMULATED EXPERIENCE: All game elements, prize wheels, loot boxes, gift cards, usernames, winner announcements, and prize claims are completely simulated, fictional, and for entertainment purposes only. Any resemblance to real persons, prizes, or events is purely coincidental.",
    noRealPrizes:
      "NO REAL PRIZES: Users explicitly acknowledge and agree that no actual prizes, gift cards, Robux, game passes, or any form of real-world value will be provided. All displayed prizes and rewards are fictional representations for entertainment purposes only.",
    ageRestriction:
      "AGE RESTRICTIONS: This application is intended for users aged 13 and above. Users under 18 must have parental consent before using this service. Parents and guardians are responsible for monitoring their children's use of this application.",
    dataCollection:
      "DATA AND PRIVACY: By using this application, you consent to the collection and processing of data as outlined in our Privacy Policy. We may collect usage statistics, device information, and interaction data for analytical purposes. No personal information is stored or shared with third parties.",
    thirdPartyLinks:
      "THIRD-PARTY LINKS: This application may contain links to external websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Users access external links at their own risk and discretion.",
    liabilityLimitation:
      "LIMITATION OF LIABILITY: The creators, developers, and operators of this application shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use this service. Users assume all risks associated with their use of this application.",
    intellectualProperty:
      "INTELLECTUAL PROPERTY: All content, design, code, and materials in this application are protected by copyright and intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit written permission.",
    terminationRights:
      "TERMINATION: We reserve the right to terminate, suspend, or restrict access to this application at any time, without notice, for any reason, including but not limited to violation of these terms or inappropriate use.",
    governingLaw:
      "GOVERNING LAW: These terms shall be governed by and construed in accordance with applicable local laws. Any disputes arising from the use of this application shall be resolved through appropriate legal channels in the jurisdiction where the service is operated.",
    contactInformation:
      "CONTACT: For questions, concerns, or legal inquiries regarding this disclaimer or the application, please contact us through appropriate legal channels. By continuing to use this application, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions stated herein.",

    // Common
    loading: "Loading...",
    tryAgain: "Try Again",
    close: "Close",

    favourite: "Favourite? 💎",
  },

  // Spanish
  es: {
    // Spin to Win Page
    spinToWin: "¡GIRA PARA GANAR! 🚀",
    spinButton: "¡GIRA PARA GANAR! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "¡GANASTE",
    claimPrize: "¡RECLAMAR PREMIO! 🚀",

    // Username Page
    enterUsername: "¡Ingresa tu Usuario! 👇",
    verifyAccount: "¡VERIFICAR CUENTA! 👉",
    verifyAccountDesc: "Verificaremos tu cuenta de Roblox",
    yourRobloxUsername: "Tu Usuario de Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "PROBANDO ALTERNATIVA... 🔍",
    welcome: "Bienvenido",
    accountVerified: "¡Cuenta Verificada Exitosamente!",
    continueToQuiz: "¡CONTINUAR AL QUIZ! ✅",
    connectingToRoblox: "Conectando a Roblox... 🔍",
    usingBackupServers: "Usando servidores de respaldo...",
    pleaseEnterUsername: "Por favor ingresa un usuario.",
    userNotFound: "Usuario no encontrado. Verifica la ortografía del nombre.",
    networkError: "Error de red. Verifica tu conexión e intenta de nuevo.",

    // Quiz Page
    favoriteGames: "¿Juegos Favoritos? 🎮",
    howOftenPlay: "¿Qué Tan Seguido Juegas? ⏰",
    topItem: "¿Artículo Principal? 💎",
    quizDone: "¡Quiz Completado! 🎉",

    // Quiz Options
    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultivar Jardín",
    rivals: "Rivales",
    everyDay: "Todos los Días",
    sometimes: "A Veces",
    notMuch: "No Mucho",
    aLot: "¡Mucho!",
    robux: "Robux",
    gamepass: "Pase de Juego",
    giftcard: "Tarjeta Regalo",
    clothing: "Ropa",

    // Loot Box Page
    pickYourPrize: "¡ELIGE TU PREMIO! 👇",
    chooseBox: "¡Elige una Caja! ✨",

    // Gift Card Claim Page
    youWonGiftcard: "¡TARJETA REGALO DE $750!",
    claimIn: "Reclamar en",
    odds: "Probabilidades:",
    timesUp: "¡Se acabó el tiempo! ⏰ Perdiste tu oportunidad. 😔",
    missedChance: "Perdiste tu oportunidad",

    // Live Winners Ticker
    won: "ganó",

    // Disclaimer
    disclaimer: "Descargo Legal",
    importantLegalDisclaimer: "DESCARGO LEGAL IMPORTANTE Y TÉRMINOS DE USO",
    entertainmentPurpose:
      "SOLO ENTRETENIMIENTO: Esta aplicación se proporciona estrictamente para fines de entretenimiento, educativos y de diversión únicamente. No se otorgarán, distribuirán o proporcionarán premios reales, recompensas, tarjetas de regalo o compensación monetaria de ningún tipo a los usuarios.",
    noAffiliation:
      "SIN AFILIACIÓN: Esta aplicación y sus creadores no tienen afiliación, asociación, autorización, respaldo o patrocinio con Roblox Corporation, plataformas de juegos, proveedores de tarjetas de regalo o entidades de terceros mencionadas o referenciadas aquí. Todas las marcas comerciales, logotipos y nombres de marca son propiedad de sus respectivos dueños.",
    voluntaryParticipation:
      "USO VOLUNTARIO: La participación en esta aplicación es completamente voluntaria y a su propia discreción. Los usuarios reconocen que están usando este servicio solo con fines recreativos y entienden que no recibirán beneficios, premios o recompensas reales.",
    simulatedExperience:
      "EXPERIENCIA SIMULADA: Todos los elementos del juego, ruedas de premios, cajas de botín, tarjetas de regalo, nombres de usuario, anuncios de ganadores y reclamos de premios son completamente simulados, ficticios y solo para fines de entretenimiento. Cualquier parecido con personas, premios o eventos reales es puramente coincidental.",
    noRealPrizes:
      "SIN PREMIOS REALES: Los usuarios reconocen y aceptan explícitamente que no se proporcionarán premios reales, tarjetas de regalo, Robux, pases de juego o cualquier forma de valor del mundo real. Todos los premios y recompensas mostrados son representaciones ficticias solo para fines de entretenimiento.",
    ageRestriction:
      "RESTRICCIONES DE EDAD: Esta aplicación está destinada a usuarios de 13 años en adelante. Los usuarios menores de 18 años deben tener consentimiento parental antes de usar este servicio. Los padres y tutores son responsables de supervisar el uso de esta aplicación por parte de sus hijos.",
    dataCollection:
      "DATOS Y PRIVACIDAD: Al usar esta aplicación, usted consiente la recopilación y procesamiento de datos como se describe en nuestra Política de Privacidad. Podemos recopilar estadísticas de uso, información del dispositivo y datos de interacción con fines analíticos. No se almacena ni comparte información personal con terceros.",
    thirdPartyLinks:
      "ENLACES DE TERCEROS: Esta aplicación puede contener enlaces a sitios web o servicios externos. No somos responsables del contenido, políticas de privacidad o prácticas de sitios de terceros. Los usuarios acceden a enlaces externos bajo su propio riesgo y discreción.",
    liabilityLimitation:
      "LIMITACIÓN DE RESPONSABILIDAD: Los creadores, desarrolladores y operadores de esta aplicación no serán responsables de daños directos, indirectos, incidentales, consecuentes o punitivos que surjan del uso o la incapacidad de usar este servicio. Los usuarios asumen todos los riesgos asociados con su uso de esta aplicación.",
    intellectualProperty:
      "PROPIEDAD INTELECTUAL: Todo el contenido, diseño, código y materiales en esta aplicación están protegidos por derechos de autor y leyes de propiedad intelectual. Los usuarios no pueden reproducir, distribuir o crear obras derivadas sin permiso escrito explícito.",
    terminationRights:
      "TERMINACIÓN: Nos reservamos el derecho de terminar, suspender o restringir el acceso a esta aplicación en cualquier momento, sin aviso, por cualquier razón, incluyendo pero no limitado a la violación de estos términos o uso inapropiado.",
    governingLaw:
      "LEY APLICABLE: Estos términos se regirán e interpretarán de acuerdo con las leyes locales aplicables. Cualquier disputa que surja del uso de esta aplicación se resolverá a través de canales legales apropiados en la jurisdicción donde se opera el servicio.",
    contactInformation:
      "CONTACTO: Para preguntas, inquietudes o consultas legales sobre este descargo o la aplicación, contáctenos a través de canales legales apropiados. Al continuar usando esta aplicación, usted reconoce que ha leído, entendido y acepta estar sujeto a todos los términos y condiciones establecidos aquí.",

    // Common
    loading: "Cargando...",
    tryAgain: "Intentar de Nuevo",
    close: "Cerrar",

    favourite: "¿Favorito? 💎",
  },

  // French
  fr: {
    spinToWin: "TOURNEZ POUR GAGNER! 🚀",
    spinButton: "TOURNEZ POUR GAGNER! 🚀",
    spinning: "ROTATION... ✨",
    youWon: "VOUS AVEZ GAGNÉ",
    claimPrize: "RÉCLAMER LE PRIX! 🚀",

    enterUsername: "Entrez votre Nom d'Utilisateur! 👇",
    verifyAccount: "VERIFIEZ LE COMPTE! 👉",
    verifyAccountDesc: "Nous vérifierons votre compte Roblox",
    yourRobloxUsername: "Votre Nom d'Utilisateur Roblox",
    verifying: "VÉRIFICATION... 🔍",
    tryingAlternative: "ESSAI ALTERNATIF... 🔍",
    welcome: "Bienvenue",
    accountVerified: "Compte Vérifié avec Succès!",
    continueToQuiz: "CONTINUER AU QUIZ! ✅",
    connectingToRoblox: "Connexion à Roblox... 🔍",
    usingBackupServers: "Utilisation des serveurs de sauvegarde...",
    pleaseEnterUsername: "Veuillez entrer un nom d'utilisateur.",
    userNotFound: "Utilisateur non trouvé. Vérifiez l'orthographe du nom.",
    networkError: "Erreur réseau. Vérifiez votre connexion et réessayez.",

    favoriteGames: "Jeux Favoris? 🎮",
    howOftenPlay: "À Quelle Fréquence Jouez-vous? ⏰",
    topItem: "Article Principal? 💎",
    quizDone: "Quiz Terminé! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultiver un Jardin",
    rivals: "Rivaux",
    everyDay: "Tous les Jours",
    sometimes: "Parfois",
    notMuch: "Pas Beaucoup",
    aLot: "Beaucoup!",
    robux: "Robux",
    gamepass: "Pass de Jeu",
    giftcard: "Carte Cadeau",
    clothing: "Vêtements",

    pickYourPrize: "CHOISISSEZ VOTRE PRIX! 👇",
    chooseBox: "Choisissez une Boîte! ✨",

    youWonGiftcard: "CARTE CADEAU DE 750$!",
    claimIn: "Réclamer dans",
    odds: "Chances:",
    timesUp: "Temps écoulé! ⏰ Vous avez raté votre chance. 😔",
    missedChance: "Vous avez raté votre chance",

    won: "a gagné",

    disclaimer: "Avertissement Légal",
    importantLegalDisclaimer: "AVERTISSEMENT LÉGAL IMPORTANT ET CONDITIONS D'UTILISATION",
    entertainmentPurpose:
      "DIVERTISSEMENT UNIQUEMENT: Cette application est fournie strictement à des fins de divertissement, éducatives et d'amusement uniquement. Aucun prix réel, récompense, carte cadeau ou compensation monétaire de quelque nature que ce soit ne sera attribué, distribué ou fourni aux utilisateurs.",
    noAffiliation:
      "AUCUNE AFFILIATION: Cette application et ses créateurs n'ont aucune affiliation, association, autorisation, approbation ou parrainage avec Roblox Corporation, les plateformes de jeu, les fournisseurs de cartes cadeaux ou toute entité tierce mentionnée ou référencée ici. Toutes les marques de commerce, logos et noms de marque sont la propriété de leurs propriétaires respectifs.",
    voluntaryParticipation:
      "UTILISATION VOLONTAIRE: La participation à cette application est entièrement volontaire et à votre propre discrétion. Les utilisateurs reconnaissent qu'ils utilisent ce service à des fins récréatives uniquement et comprennent qu'ils ne recevront aucun avantage, prix ou récompense réels.",
    simulatedExperience:
      "EXPÉRIENCE SIMULÉE: Tous les éléments de jeu, roues de prix, boîtes à butin, cartes cadeaux, noms d'utilisateur, annonces de gagnants et réclamations de prix sont complètement simulés, fictifs et à des fins de divertissement uniquement. Toute ressemblance avec des personnes, prix ou événements réels est purement fortuite.",
    noRealPrizes:
      "AUCUN PRIX RÉEL: Les utilisateurs reconnaissent et acceptent explicitement qu'aucun prix réel, carte cadeau, Robux, pass de jeu ou toute forme de valeur du monde réel ne sera fourni. Tous les prix et récompenses affichés sont des représentations fictives à des fins de divertissement uniquement.",
    ageRestriction:
      "RESTRICTIONS D'ÂGE: Cette application est destinée aux utilisateurs âgés de 13 ans et plus. Les utilisateurs de moins de 18 ans doivent avoir le consentement parental avant d'utiliser ce service. Les parents et tuteurs sont responsables de surveiller l'utilisation de cette application par leurs enfants.",
    dataCollection:
      "DONNÉES ET CONFIDENTIALITÉ: En utilisant cette application, vous consentez à la collecte et au traitement des données comme décrit dans notre Politique de Confidentialité. Nous pouvons collecter des statistiques d'utilisation, des informations sur l'appareil et des données d'interaction à des fins analytiques. Aucune information personnelle n'est stockée ou partagée avec des tiers.",
    thirdPartyLinks:
      "LIENS TIERS: Cette application peut contenir des liens vers des sites web ou services externes. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques des sites tiers. Les utilisateurs accèdent aux liens externes à leurs propres risques et discrétion.",
    liabilityLimitation:
      "LIMITATION DE RESPONSABILITÉ: Les créateurs, développeurs et opérateurs de cette application ne seront pas responsables des dommages directs, indirects, accessoires, consécutifs ou punitifs découlant de l'utilisation ou de l'incapacité d'utiliser ce service. Les utilisateurs assument tous les risques associés à leur utilisation de cette application.",
    intellectualProperty:
      "PROPRIÉTÉ INTELLECTUELLE: Tout le contenu, la conception, le code et les matériaux de cette application sont protégés par les lois sur le droit d'auteur et la propriété intellectuelle. Les utilisateurs ne peuvent pas reproduire, distribuer ou créer des œuvres dérivées sans autorisation écrite explicite.",
    terminationRights:
      "RÉSILIATION: Nous nous réservons le droit de résilier, suspendre ou restreindre l'accès à cette application à tout moment, sans préavis, pour quelque raison que ce soit, y compris mais sans s'y limiter à la violation de ces conditions ou à une utilisation inappropriée.",
    governingLaw:
      "LOI APPLICABLE: Ces conditions seront régies et interprétées conformément aux lois locales applicables. Tout litige découlant de l'utilisation de cette application sera résolu par les canaux juridiques appropriés dans la juridiction où le service est exploité.",
    contactInformation:
      "CONTACT: Pour les questions, préoccupations ou demandes légales concernant cet avertissement ou l'application, veuillez nous contacter par les canaux juridiques appropriés. En continuant à utiliser cette application, vous reconnaissez avoir lu, compris et accepté d'être lié par tous les termes et conditions énoncés ici.",

    loading: "Chargement...",
    tryAgain: "Réessayer",
    close: "Fermer",

    favourite: "Favori? 💎",
  },

  // German
  de: {
    spinToWin: "DREHEN ZUM GEWINNEN! 🚀",
    spinButton: "DREHEN ZUM GEWINNEN! 🚀",
    spinning: "DREHT SICH... ✨",
    youWon: "SIE HABEN GEWONNEN",
    claimPrize: "PREIS BEANSPRUCHEN! 🚀",

    enterUsername: "Benutzername Eingeben! 👇",
    verifyAccount: "KONTO VERIFIZIEREN! 👉",
    verifyAccountDesc: "Wir werden Ihr Roblox-Konto verifizieren",
    yourRobloxUsername: "Ihr Roblox-Benutzername",
    verifying: "VERIFIZIERUNG... 🔍",
    tryingAlternative: "ALTERNATIVE VERSUCHEN... 🔍",
    welcome: "Willkommen",
    accountVerified: "Konto Erfolgreich Verifiziert!",
    continueToQuiz: "WEITER ZUM QUIZ! ✅",
    connectingToRoblox: "Verbindung zu Roblox... 🔍",
    usingBackupServers: "Backup-Server verwenden...",
    pleaseEnterUsername: "Bitte geben Sie einen Benutzernamen ein.",
    userNotFound: "Benutzer nicht gefunden. Überprüfen Sie die Schreibweise.",
    networkError: "Netzwerkfehler. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.",

    favoriteGames: "Lieblingsspiele? 🎮",
    howOftenPlay: "Wie Oft Spielen? ⏰",
    topItem: "Top-Artikel? 💎",
    quizDone: "Quiz Abgeschlossen! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Garten Züchten",
    rivals: "Rivalen",
    everyDay: "Jeden Tag",
    sometimes: "Manchmal",
    notMuch: "Nicht Viel",
    aLot: "Viel!",
    robux: "Robux",
    gamepass: "Spielpass",
    giftcard: "Geschenkkarte",
    clothing: "Kleidung",

    pickYourPrize: "WÄHLEN SIE IHREN PREIS! 👇",
    chooseBox: "Wählen Sie eine Box! ✨",

    youWonGiftcard: "750$ GESCHENKKARTE!",
    claimIn: "Beanspruchen in",
    odds: "Chancen:",
    timesUp: "Zeit ist um! ⏰ Sie haben Ihre Chance verpasst. 😔",
    missedChance: "Sie haben Ihre Chance verpasst",

    won: "gewann",

    disclaimer: "Rechtlicher Haftungsausschluss",
    importantLegalDisclaimer: "WICHTIGER RECHTLICHER HAFTUNGSAUSSCHLUSS UND NUTZUNGSBEDINGUNGEN",
    entertainmentPurpose:
      "NUR UNTERHALTUNG: Diese Anwendung wird ausschließlich zu Unterhaltungs-, Bildungs- und Vergnügungszwecken bereitgestellt. Es werden keine echten Preise, Belohnungen, Geschenkkarten oder monetäre Entschädigungen jeglicher Art an Benutzer vergeben, verteilt oder bereitgestellt.",
    noAffiliation:
      "KEINE ZUGEHÖRIGKEIT: Diese Anwendung und ihre Ersteller haben keine Zugehörigkeit, Verbindung, Autorisierung, Befürwortung oder Sponsoring mit Roblox Corporation, Gaming-Plattformen, Geschenkkarten-Anbietern oder Drittanbietern, die hier erwähnt oder referenziert werden. Alle Markenzeichen, Logos und Markennamen sind Eigentum ihrer jeweiligen Inhaber.",
    voluntaryParticipation:
      "FREIWILLIGE NUTZUNG: Die Teilnahme an dieser Anwendung ist völlig freiwillig und liegt in Ihrem eigenen Ermessen. Benutzer erkennen an, dass sie diesen Service nur zu Erholungszwecken nutzen und verstehen, dass sie keine echten Vorteile, Preise oder Belohnungen erhalten werden.",
    simulatedExperience:
      "SIMULIERTE ERFAHRUNG: Alle Spielelemente, Preisräder, Loot-Boxen, Geschenkkarten, Benutzernamen, Gewinner-Ankündigungen und Preisansprüche sind vollständig simuliert, fiktiv und nur zu Unterhaltungszwecken. Jede Ähnlichkeit mit echten Personen, Preisen oder Ereignissen ist rein zufällig.",
    noRealPrizes:
      "KEINE ECHTEN PREISE: Benutzer erkennen ausdrücklich an und stimmen zu, dass keine echten Preise, Geschenkkarten, Robux, Spielpässe oder jede Form von realem Wert bereitgestellt werden. Alle angezeigten Preise und Belohnungen sind fiktive Darstellungen nur zu Unterhaltungszwecken.",
    ageRestriction:
      "ALTERSBESCHRÄNKUNGEN: Diese Anwendung ist für Benutzer ab 13 Jahren bestimmt. Benutzer unter 18 Jahren müssen vor der Nutzung dieses Services die Zustimmung der Eltern haben. Eltern und Erziehungsberechtigte sind für die Überwachung der Nutzung dieser Anwendung durch ihre Kinder verantwortlich.",
    dataCollection:
      "DATEN UND DATENSCHUTZ: Durch die Nutzung dieser Anwendung stimmen Sie der Sammlung und Verarbeitung von Daten zu, wie in unserer Datenschutzrichtlinie beschrieben. Wir können Nutzungsstatistiken, Geräteinformationen und Interaktionsdaten zu analytischen Zwecken sammeln. Keine persönlichen Informationen werden gespeichert oder mit Dritten geteilt.",
    thirdPartyLinks:
      "DRITTANBIETER-LINKS: Diese Anwendung kann Links zu externen Websites oder Services enthalten. Wir sind nicht verantwortlich für den Inhalt, Datenschutzrichtlinien oder Praktiken von Drittanbieter-Seiten. Benutzer greifen auf externe Links auf eigenes Risiko und Ermessen zu.",
    liabilityLimitation:
      "HAFTUNGSBESCHRÄNKUNG: Die Ersteller, Entwickler und Betreiber dieser Anwendung haften nicht für direkte, indirekte, zufällige, Folge- oder Strafschäden, die aus der Nutzung oder Unfähigkeit zur Nutzung dieses Services entstehen. Benutzer übernehmen alle Risiken im Zusammenhang mit ihrer Nutzung dieser Anwendung.",
    intellectualProperty:
      "GEISTIGES EIGENTUM: Alle Inhalte, Designs, Codes und Materialien in dieser Anwendung sind durch Urheberrechts- und Geistiges-Eigentum-Gesetze geschützt. Benutzer dürfen ohne ausdrückliche schriftliche Genehmigung nicht reproduzieren, verteilen oder abgeleitete Werke erstellen.",
    terminationRights:
      "KÜNDIGUNG: Wir behalten uns das Recht vor, den Zugang zu dieser Anwendung jederzeit ohne Vorankündigung aus beliebigen Gründen zu beenden, zu suspendieren oder zu beschränken, einschließlich aber nicht beschränkt auf Verletzung dieser Bedingungen oder unangemessene Nutzung.",
    governingLaw:
      "GELTENDES RECHT: Diese Bedingungen unterliegen den geltenden örtlichen Gesetzen und werden entsprechend ausgelegt. Alle Streitigkeiten, die aus der Nutzung dieser Anwendung entstehen, werden durch angemessene rechtliche Kanäle in der Gerichtsbarkeit gelöst, in der der Service betrieben wird.",
    contactInformation:
      "KONTAKT: Für Fragen, Bedenken oder rechtliche Anfragen bezüglich dieses Haftungsausschlusses oder der Anwendung kontaktieren Sie uns bitte über angemessene rechtliche Kanäle. Durch die weitere Nutzung dieser Anwendung bestätigen Sie, dass Sie alle hier aufgeführten Bedingungen gelesen, verstanden und zugestimmt haben, daran gebunden zu sein.",

    loading: "Laden...",
    tryAgain: "Erneut Versuchen",
    close: "Schließen",

    favourite: "Favorit? 💎",
  },

  // Portuguese
  pt: {
    spinToWin: "GIRE PARA GANHAR! 🚀",
    spinButton: "GIRE PARA GANHAR! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "VOCÊ GANHOU",
    claimPrize: "REIVINDICAR PRÊMIO! 🚀",

    enterUsername: "Digite seu Nome de Usuário! 👇",
    verifyAccount: "VERIFICAR CONTA! 👉",
    verifyAccountDesc: "Verificaremos sua conta do Roblox",
    yourRobloxUsername: "Seu Nome de Usuário do Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "TENTANDO ALTERNATIVA... 🔍",
    welcome: "Bem-vindo",
    accountVerified: "Conta Verificada com Sucesso!",
    continueToQuiz: "CONTINUAR PARA O QUIZ! ✅",
    connectingToRoblox: "Conectando ao Roblox... 🔍",
    usingBackupServers: "Usando servidores de backup...",
    pleaseEnterUsername: "Por favor, digite um nome de usuário.",
    userNotFound: "Usuário não encontrado. Verifique a ortografia do nome.",
    networkError: "Erro de rede. Verifique sua conexão e tente novamente.",

    favoriteGames: "Jogos Favoritos? 🎮",
    howOftenPlay: "Com Que Frequência Joga? ⏰",
    topItem: "Item Principal? 💎",
    quizDone: "Quiz Concluído! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultivar Jardim",
    rivals: "Rivais",
    everyDay: "Todo Dia",
    sometimes: "Às Vezes",
    notMuch: "Não Muito",
    aLot: "Muito!",
    robux: "Robux",
    gamepass: "Passe de Jogo",
    giftcard: "Cartão Presente",
    clothing: "Roupas",

    pickYourPrize: "ESCOLHA SEU PRÊMIO! 👇",
    chooseBox: "Escolha uma Caixa! ✨",

    youWonGiftcard: "CARTÃO PRESENTE DE $750!",
    claimIn: "Reivindicar em",
    odds: "Chances:",
    timesUp: "Tempo esgotado! ⏰ Você perdeu sua chance. 😔",
    missedChance: "Você perdeu sua chance",

    won: "ganhou",

    disclaimer: "Isenção Legal",
    importantLegalDisclaimer: "ISENÇÃO LEGAL IMPORTANTE E TERMOS DE USO",
    entertainmentPurpose:
      "APENAS ENTRETENIMENTO: Esta aplicação é fornecida estritamente para fins de entretenimento, educacionais e de diversão apenas. Nenhum prêmio real, recompensa, cartão presente ou compensação monetária de qualquer tipo será concedido, distribuído ou fornecido aos usuários.",
    noAffiliation:
      "SEM AFILIAÇÃO: Esta aplicação e seus criadores não têm afiliação, associação, autorização, endosso ou patrocínio com a Roblox Corporation, plataformas de jogos, fornecedores de cartões presente ou quaisquer entidades terceiras mencionadas ou referenciadas aqui. Todas as marcas registradas, logotipos e nomes de marca são propriedade de seus respectivos proprietários.",
    voluntaryParticipation:
      "USO VOLUNTÁRIO: A participação nesta aplicação é inteiramente voluntária e a seu próprio critério. Os usuários reconhecem que estão usando este serviço apenas para fins recreativos e entendem que não receberão benefícios, prêmios ou recompensas reais.",
    simulatedExperience:
      "EXPERIÊNCIA SIMULADA: Todos os elementos do jogo, rodas de prêmios, caixas de saque, cartões presente, nomes de usuário, anúncios de vencedores e reivindicações de prêmios são completamente simulados, fictícios e apenas para fins de entretenimento. Qualquer semelhança com pessoas, prêmios ou eventos reais é puramente coincidental.",
    noRealPrizes:
      "SEM PRÊMIOS REAIS: Os usuários reconhecem e concordam explicitamente que nenhum prêmio real, cartão presente, Robux, passe de jogo ou qualquer forma de valor do mundo real será fornecido. Todos os prêmios e recompensas exibidos são representações fictícias apenas para fins de entretenimento.",
    ageRestriction:
      "RESTRIÇÕES DE IDADE: Esta aplicação é destinada a usuários com 13 anos ou mais. Usuários menores de 18 anos devem ter consentimento dos pais antes de usar este serviço. Pais e responsáveis são responsáveis por monitorar o uso desta aplicação por seus filhos.",
    dataCollection:
      "DADOS E PRIVACIDADE: Ao usar esta aplicação, você consente com a coleta e processamento de dados conforme descrito em nossa Política de Privacidade. Podemos coletar estatísticas de uso, informações do dispositivo e dados de interação para fins analíticos. Nenhuma informação pessoal é armazenada ou compartilhada com terceiros.",
    thirdPartyLinks:
      "LINKS DE TERCEIROS: Esta aplicação pode conter links para sites ou serviços externos. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros. Os usuários acessam links externos por sua própria conta e risco.",
    liabilityLimitation:
      "LIMITAÇÃO DE RESPONSABILIDADE: Os criadores, desenvolvedores e operadores desta aplicação não serão responsáveis por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar este serviço. Os usuários assumem todos os riscos associados ao seu uso desta aplicação.",
    intellectualProperty:
      "PROPRIEDADE INTELECTUAL: Todo o conteúdo, design, código e materiais nesta aplicação são protegidos por leis de direitos autorais e propriedade intelectual. Os usuários não podem reproduzir, distribuir ou criar obras derivadas sem permissão escrita explícita.",
    terminationRights:
      "RESCISÃO: Reservamo-nos o direito de encerrar, suspender ou restringir o acesso a esta aplicação a qualquer momento, sem aviso, por qualquer motivo, incluindo mas não limitado à violação destes termos ou uso inadequado.",
    governingLaw:
      "LEI APLICÁVEL: Estes termos serão regidos e interpretados de acordo com as leis locais aplicáveis. Quaisquer disputas decorrentes do uso desta aplicação serão resolvidas através de canais legais apropriados na jurisdição onde o serviço é operado.",
    contactInformation:
      "CONTATO: Para perguntas, preocupações ou consultas legais sobre esta isenção ou a aplicação, entre em contato conosco através de canais legais apropriados. Ao continuar a usar esta aplicação, você reconhece que leu, entendeu e concorda em estar vinculado a todos os termos e condições aqui estabelecidos.",

    loading: "Carregando...",
    tryAgain: "Tentar Novamente",
    close: "Fechar",

    favourite: "Favorito? 💎",
  },

  // Russian
  ru: {
    spinToWin: "КРУТИ ЧТОБЫ ВЫИГРАТЬ! 🚀",
    spinButton: "КРУТИ ЧТОБЫ ВЫИГРАТЬ! 🚀",
    spinning: "ВРАЩАЕТСЯ... ✨",
    youWon: "ВЫ ВЫИГРАЛИ",
    claimPrize: "ПОЛУЧИТЬ ПРИЗ! 🚀",

    enterUsername: "Введите Имя Пользователя! 👇",
    verifyAccount: "ПРОВЕРИТЬ АККАУНТ! 👉",
    verifyAccountDesc: "Мы проверим ваш аккаунт Roblox",
    yourRobloxUsername: "Ваше Имя Пользователя Roblox",
    verifying: "ПРОВЕРКА... 🔍",
    tryingAlternative: "ПРОБУЕМ АЛЬТЕРНАТИВУ... 🔍",
    welcome: "Добро пожаловать",
    accountVerified: "Аккаунт Успешно Проверен!",
    continueToQuiz: "ПРОДОЛЖИТЬ К ВИКТОРИНЕ! ✅",
    connectingToRoblox: "Подключение к Roblox... 🔍",
    usingBackupServers: "Используем резервные серверы...",
    pleaseEnterUsername: "Пожалуйста, введите имя пользователя.",
    userNotFound: "Пользователь не найден. Проверьте правописание имени.",
    networkError: "Ошибка сети. Проверьте соединение и попробуйте снова.",

    favoriteGames: "Любимые Игры? 🎮",
    howOftenPlay: "Как Часто Играете? ⏰",
    topItem: "Топ Предмет? 💎",
    quizDone: "Викторина Завершена! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Выращивать Сад",
    rivals: "Соперники",
    everyDay: "Каждый День",
    sometimes: "Иногда",
    notMuch: "Не Много",
    aLot: "Много!",
    robux: "Robux",
    gamepass: "Игровой Пропуск",
    giftcard: "Подарочная Карта",
    clothing: "Одежда",

    pickYourPrize: "ВЫБЕРИТЕ ВАШ ПРИЗ! 👇",
    chooseBox: "Выберите Коробку! ✨",

    youWonGiftcard: "ПОДАРОЧНУЮ КАРТУ НА $750!",
    claimIn: "Получить через",
    odds: "Шансы:",
    timesUp: "Время вышло! ⏰ Вы упустили свой шанс. 😔",
    missedChance: "Вы упустили свой шанс",

    won: "выиграл",

    disclaimer: "Правовой Отказ от Ответственности",
    importantLegalDisclaimer: "ВАЖНЫЙ ПРАВОВОЙ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ И УСЛОВИЯ ИСПОЛЬЗОВАНИЯ",
    entertainmentPurpose:
      "ТОЛЬКО РАЗВЛЕЧЕНИЕ: Это приложение предоставляется исключительно в развлекательных, образовательных целях и для развлечения. Никакие реальные призы, награды, подарочные карты или денежная компенсация любого рода не будут присуждены, распределены или предоставлены пользователям.",
    noAffiliation:
      "НЕТ СВЯЗИ: Это приложение и его создатели не имеют связи, ассоциации, авторизации, одобрения или спонсорства с Roblox Corporation, игровыми платформами, поставщиками подарочных карт или любыми третьими сторонами, упомянутыми или упоминаемыми здесь. Все торговые марки, логотипы и названия брендов являются собственностью их соответствующих владельцев.",
    voluntaryParticipation:
      "ДОБРОВОЛЬНОЕ ИСПОЛЬЗОВАНИЕ: Участие в этом приложении полностью добровольное и по вашему собственному усмотрению. Пользователи признают, что они используют этот сервис только в развлекательных целях и понимают, что не получат никаких реальных преимуществ, призов или наград.",
    simulatedExperience:
      "СИМУЛИРОВАННЫЙ ОПЫТ: Все игровые элементы, колеса призов, лут-боксы, подарочные карты, имена пользователей, объявления победителей и заявки на призы полностью симулированы, вымышлены и предназначены только для развлечения. Любое сходство с реальными людьми, призами или событиями является чисто случайным.",
    noRealPrizes:
      "НЕТ РЕАЛЬНЫХ ПРИЗОВ: Пользователи явно признают и соглашаются, что никакие реальные призы, подарочные карты, Robux, игровые пропуска или любая форма реальной ценности не будут предоставлены. Все отображаемые призы и награды являются вымышленными представлениями только для развлекательных целей.",
    ageRestriction:
      "ВОЗРАСТНЫЕ ОГРАНИЧЕНИЯ: Это приложение предназначено для пользователей в возрасте 13 лет и старше. Пользователи младше 18 лет должны получить согласие родителей перед использованием этого сервиса. Родители и опекуны несут ответственность за контроль использования этого приложения их детьми.",
    dataCollection:
      "ДАННЫЕ И КОНФИДЕНЦИАЛЬНОСТЬ: Используя это приложение, вы соглашаетесь на сбор и обработку данных, как описано в нашей Политике Конфиденциальности. Мы можем собирать статистику использования, информацию об устройстве и данные взаимодействия в аналитических целях. Никакая личная информация не хранится и не передается третьим сторонам.",
    thirdPartyLinks:
      "ССЫЛКИ ТРЕТЬИХ СТОРОН: Это приложение может содержать ссылки на внешние веб-сайты или сервисы. Мы не несем ответственности за содержание, политику конфиденциальности или практики сайтов третьих сторон. Пользователи получают доступ к внешним ссылкам на свой собственный риск и усмотрение.",
    liabilityLimitation:
      "ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ: Создатели, разработчики и операторы этого приложения не несут ответственности за любые прямые, косвенные, случайные, последующие или штрафные ущербы, возникающие в результате использования или невозможности использования этого сервиса. Пользователи принимают на себя все риски, связанные с их использованием этого приложения.",
    intellectualProperty:
      "ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ: Все содержимое, дизайн, код и материалы в этом приложении защищены законами об авторском праве и интеллектуальной собственности. Пользователи не могут воспроизводить, распространять или создавать производные работы без явного письменного разрешения.",
    terminationRights:
      "ПРЕКРАЩЕНИЕ: Мы оставляем за собой право прекратить, приостановить или ограничить доступ к этому приложению в любое время, без уведомления, по любой причине, включая, но не ограничиваясь нарушением этих условий или неподобающим использованием.",
    governingLaw:
      "ПРИМЕНИМОЕ ПРАВО: Эти условия регулируются и толкуются в соответствии с применимыми местными законами. Любые споры, возникающие в результате использования этого приложения, будут разрешаться через соответствующие правовые каналы в юрисдикции, где работает сервис.",
    contactInformation:
      "КОНТАКТ: По вопросам, проблемам или правовым запросам относительно этого отказа от ответственности или приложения, пожалуйста, свяжитесь с нами через соответствующие правовые каналы. Продолжая использовать это приложение, вы подтверждаете, что прочитали, поняли и согласились соблюдать все условия, изложенные здесь.",

    loading: "Загрузка...",
    tryAgain: "Попробовать Снова",
    close: "Закрыть",

    favourite: "Любимое? 💎",
  },

  // Italian
  it: {
    spinToWin: "GIRA PER VINCERE! 🚀",
    spinButton: "GIRA PER VINCERE! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "HAI VINTO",
    claimPrize: "RISCATTA PREMIO! 🚀",

    enterUsername: "Inserisci Nome Utente! 👇",
    verifyAccount: "VERIFICA ACCOUNT! 👉",
    verifyAccountDesc: "Verificheremo il tuo account Roblox",
    yourRobloxUsername: "Il Tuo Nome Utente Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "PROVANDO ALTERNATIVA... 🔍",
    welcome: "Benvenuto",
    accountVerified: "Account Verificato con Successo!",
    continueToQuiz: "CONTINUA AL QUIZ! ✅",
    connectingToRoblox: "Connessione a Roblox... 🔍",
    usingBackupServers: "Usando server di backup...",
    pleaseEnterUsername: "Per favore inserisci un nome utente.",
    userNotFound: "Utente non trovato. Controlla l'ortografia del nome.",
    networkError: "Errore di rete. Controlla la connessione e riprova.",

    favoriteGames: "Giochi Preferiti? 🎮",
    howOftenPlay: "Quanto Spesso Giochi? ⏰",
    topItem: "Oggetto Principale? 💎",
    quizDone: "Quiz Completato! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Coltiva Giardino",
    rivals: "Rivali",
    everyDay: "Ogni Giorno",
    sometimes: "A Volte",
    notMuch: "Non Molto",
    aLot: "Molto!",
    robux: "Robux",
    gamepass: "Pass di Gioco",
    giftcard: "Carta Regalo",
    clothing: "Abbigliamento",

    pickYourPrize: "SCEGLI IL TUO PREMIO! 👇",
    chooseBox: "Scegli una Scatola! ✨",

    youWonGiftcard: "CARTA REGALO DA $750!",
    claimIn: "Riscatta in",
    odds: "Probabilità:",
    timesUp: "Tempo scaduto! ⏰ Hai perso la tua occasione. 😔",
    missedChance: "Hai perso la tua occasione",

    won: "ha vinto",

    disclaimer: "Disclaimer Legale",
    importantLegalDisclaimer: "IMPORTANTE DISCLAIMER LEGALE E TERMINI DI UTILIZZO",
    entertainmentPurpose:
      "SOLO INTRATTENIMENTO: Questa applicazione è fornita esclusivamente per scopi di intrattenimento, educativi e di divertimento. Nessun premio reale, ricompensa, carta regalo o compenso monetario di qualsiasi tipo sarà assegnato, distribuito o fornito agli utenti.",
    noAffiliation:
      "NESSUNA AFFILIAZIONE: Questa applicazione e i suoi creatori non hanno affiliazione, associazione, autorizzazione, approvazione o sponsorizzazione con Roblox Corporation, piattaforme di gioco, fornitori di carte regalo o qualsiasi entità terza menzionata o referenziata qui. Tutti i marchi, loghi e nomi di marca sono proprietà dei rispettivi proprietari.",
    voluntaryParticipation:
      "USO VOLONTARIO: La partecipazione a questa applicazione è interamente volontaria e a propria discrezione. Gli utenti riconoscono di utilizzare questo servizio solo per scopi ricreativi e comprendono che non riceveranno benefici, premi o ricompense reali.",
    simulatedExperience:
      "ESPERIENZA SIMULATA: Tutti gli elementi di gioco, ruote dei premi, loot box, carte regalo, nomi utente, annunci di vincitori e rivendicazioni di premi sono completamente simulati, fittizi e solo per scopi di intrattenimento. Qualsiasi somiglianza con persone, premi o eventi reali è puramente casuale.",
    noRealPrizes:
      "NESSUN PREMIO REALE: Gli utenti riconoscono esplicitamente e accettano che nessun premio reale, carta regalo, Robux, pass di gioco o qualsiasi forma di valore del mondo reale sarà fornito. Tutti i premi e le ricompense mostrati sono rappresentazioni fittizie solo per scopi di intrattenimento.",
    ageRestriction:
      "RESTRIZIONI DI ETÀ: Questa applicazione è destinata a utenti di 13 anni e oltre. Gli utenti sotto i 18 anni devono avere il consenso dei genitori prima di utilizzare questo servizio. Genitori e tutori sono responsabili del monitoraggio dell'uso di questa applicazione da parte dei loro figli.",
    dataCollection:
      "DATI E PRIVACY: Utilizzando questa applicazione, acconsenti alla raccolta e al trattamento dei dati come descritto nella nostra Informativa sulla Privacy. Possiamo raccogliere statistiche di utilizzo, informazioni sul dispositivo e dati di interazione per scopi analitici. Nessuna informazione personale viene memorizzata o condivisa con terze parti.",
    thirdPartyLinks:
      "LINK DI TERZE PARTI: Questa applicazione può contenere link a siti web o servizi esterni. Non siamo responsabili per il contenuto, le politiche sulla privacy o le pratiche di siti di terze parti. Gli utenti accedono ai link esterni a proprio rischio e discrezione.",
    liabilityLimitation:
      "LIMITAZIONE DI RESPONSABILITÀ: I creatori, sviluppatori e operatori di questa applicazione non saranno responsabili per danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall'uso o dall'incapacità di utilizzare questo servizio. Gli utenti si assumono tutti i rischi associati al loro uso di questa applicazione.",
    intellectualProperty:
      "PROPRIETÀ INTELLETTUALE: Tutti i contenuti, design, codice e materiali in questa applicazione sono protetti da leggi sul copyright e sulla proprietà intellettuale. Gli utenti non possono riprodurre, distribuire o creare opere derivate senza permesso scritto esplicito.",
    terminationRights:
      "TERMINAZIONE: Ci riserviamo il diritto di terminare, sospendere o limitare l'accesso a questa applicazione in qualsiasi momento, senza preavviso, per qualsiasi motivo, incluso ma non limitato alla violazione di questi termini o uso inappropriato.",
    governingLaw:
      "LEGGE APPLICABILE: Questi termini saranno governati e interpretati in accordo con le leggi locali applicabili. Qualsiasi disputa derivante dall'uso di questa applicazione sarà risolta attraverso canali legali appropriati nella giurisdizione dove il servizio è operato.",
    contactInformation:
      "CONTATTO: Per domande, preoccupazioni o richieste legali riguardo questo disclaimer o l'applicazione, contattaci attraverso canali legali appropriati. Continuando a utilizzare questa applicazione, riconosci di aver letto, compreso e accettato di essere vincolato da tutti i termini e condizioni qui stabiliti.",

    loading: "Caricamento...",
    tryAgain: "Riprova",
    close: "Chiudi",

    favourite: "Preferito? 💎",
  },

  // Dutch
  nl: {
    spinToWin: "DRAAI OM TE WINNEN! 🚀",
    spinButton: "DRAAI OM TE WINNEN! 🚀",
    spinning: "DRAAIT... ✨",
    youWon: "JE HEBT GEWONNEN",
    claimPrize: "CLAIM PRIJS! 🚀",

    enterUsername: "Voer Gebruikersnaam In! 👇",
    verifyAccount: "VERIFIEER ACCOUNT! 👉",
    verifyAccountDesc: "We zullen je Roblox account verifiëren",
    yourRobloxUsername: "Je Roblox Gebruikersnaam",
    verifying: "VERIFIËREN... 🔍",
    tryingAlternative: "ALTERNATIEF PROBEREN... 🔍",
    welcome: "Welkom",
    accountVerified: "Account Succesvol Geverifieerd!",
    continueToQuiz: "DOORGAAN NAAR QUIZ! ✅",
    connectingToRoblox: "Verbinden met Roblox... 🔍",
    usingBackupServers: "Backup servers gebruiken...",
    pleaseEnterUsername: "Voer een gebruikersnaam in.",
    userNotFound: "Gebruiker niet gevonden. Controleer de spelling van de naam.",
    networkError: "Netwerkfout. Controleer je verbinding en probeer opnieuw.",

    favoriteGames: "Favoriete Spellen? 🎮",
    howOftenPlay: "Hoe Vaak Speel Je? ⏰",
    topItem: "Top Item? 💎",
    quizDone: "Quiz Voltooid! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Tuin Kweken",
    rivals: "Rivalen",
    everyDay: "Elke Dag",
    sometimes: "Soms",
    notMuch: "Niet Veel",
    aLot: "Veel!",
    robux: "Robux",
    gamepass: "Spelpass",
    giftcard: "Cadeaukaart",
    clothing: "Kleding",

    pickYourPrize: "KIES JE PRIJS! 👇",
    chooseBox: "Kies een Doos! ✨",

    youWonGiftcard: "$750 CADEAUKAART!",
    claimIn: "Claim in",
    odds: "Kansen:",
    timesUp: "Tijd is om! ⏰ Je hebt je kans gemist. 😔",
    missedChance: "Je hebt je kans gemist",

    won: "won",

    disclaimer: "Juridische Disclaimer",
    importantLegalDisclaimer: "BELANGRIJKE JURIDISCHE DISCLAIMER EN GEBRUIKSVOORWAARDEN",
    entertainmentPurpose:
      "ALLEEN ENTERTAINMENT: Deze applicatie wordt uitsluitend aangeboden voor entertainment-, educatieve en amusementsdoeleinden. Er zullen geen echte prijzen, beloningen, cadeaukaarten of monetaire compensatie van welke aard dan ook worden toegekend, gedistribueerd of verstrekt aan gebruikers.",
    noAffiliation:
      "GEEN AFFILIATIE: Deze applicatie en haar makers hebben geen affiliatie, associatie, autorisatie, goedkeuring of sponsoring met Roblox Corporation, gamingplatforms, cadeaukaartaanbieders of enige derde partijen die hier worden genoemd of waarnaar wordt verwezen. Alle handelsmerken, logo's en merknamen zijn eigendom van hun respectievelijke eigenaren.",
    voluntaryParticipation:
      "VRIJWILLIG GEBRUIK: Deelname aan deze applicatie is geheel vrijwillig en naar eigen goeddunken. Gebruikers erkennen dat zij deze service alleen voor recreatieve doeleinden gebruiken en begrijpen dat zij geen echte voordelen, prijzen of beloningen zullen ontvangen.",
    simulatedExperience:
      "GESIMULEERDE ERVARING: Alle spelelementen, prijzenwielen, loot boxes, cadeaukaarten, gebruikersnamen, winnaarsaankondigingen en prijsclaims zijn volledig gesimuleerd, fictief en alleen voor entertainmentdoeleinden. Elke gelijkenis met echte personen, prijzen of gebeurtenissen is puur toeval.",
    noRealPrizes:
      "GEEN ECHTE PRIJZEN: Gebruikers erkennen en stemmen er expliciet mee in dat er geen echte prijzen, cadeaukaarten, Robux, gamepasses of enige vorm van echte waarde zal worden verstrekt. Alle getoonde prijzen en beloningen zijn fictieve representaties alleen voor entertainmentdoeleinden.",
    ageRestriction:
      "LEEFTIJDSBEPERKINGEN: Deze applicatie is bedoeld voor gebruikers van 13 jaar en ouder. Gebruikers onder de 18 jaar moeten ouderlijke toestemming hebben voordat zij deze service gebruiken. Ouders en voogden zijn verantwoordelijk voor het monitoren van het gebruik van deze applicatie door hun kinderen.",
    dataCollection:
      "GEGEVENS EN PRIVACY: Door deze applicatie te gebruiken, stemt u in met de verzameling en verwerking van gegevens zoals beschreven in ons Privacybeleid. We kunnen gebruiksstatistieken, apparaatinformatie en interactiegegevens verzamelen voor analytische doeleinden. Geen persoonlijke informatie wordt opgeslagen of gedeeld met derde partijen.",
    thirdPartyLinks:
      "LINKS VAN DERDE PARTIJEN: Deze applicatie kan links naar externe websites of services bevatten. We zijn niet verantwoordelijk voor de inhoud, privacybeleid of praktijken van websites van derde partijen. Gebruikers benaderen externe links op eigen risico en naar eigen goeddunken.",
    liabilityLimitation:
      "BEPERKING VAN AANSPRAKELIJKHEID: De makers, ontwikkelaars en operators van deze applicatie zijn niet aansprakelijk voor directe, indirecte, incidentele, gevolg- of punitieve schade voortvloeiend uit het gebruik of onvermogen om deze service te gebruiken. Gebruikers nemen alle risico's op zich die verband houden met hun gebruik van deze applicatie.",
    intellectualProperty:
      "INTELLECTUEEL EIGENDOM: Alle inhoud, ontwerp, code en materialen in deze applicatie zijn beschermd door auteursrecht en intellectuele eigendomswetten. Gebruikers mogen niet reproduceren, distribueren of afgeleide werken maken zonder expliciete schriftelijke toestemming.",
    terminationRights:
      "BEËINDIGING: We behouden ons het recht voor om de toegang tot deze applicatie op elk moment te beëindigen, op te schorten of te beperken, zonder kennisgeving, om welke reden dan ook, inclusief maar niet beperkt tot schending van deze voorwaarden of ongepast gebruik.",
    governingLaw:
      "TOEPASSELIJK RECHT: Deze voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met de toepasselijke lokale wetten. Geschillen voortvloeiend uit het gebruik van deze applicatie worden opgelost via de juiste juridische kanalen in de jurisdictie waar de service wordt geëxploiteerd.",
    contactInformation:
      "CONTACT: Voor vragen, zorgen of juridische vragen betreffende deze disclaimer of de applicatie, neem contact met ons op via de juiste juridische kanalen. Door deze applicatie te blijven gebruiken, erkent u dat u alle hier uiteengezette voorwaarden hebt gelezen, begrepen en ermee instemt gebonden te zijn.",

    loading: "Laden...",
    tryAgain: "Probeer Opnieuw",
    close: "Sluiten",

    favourite: "Favoriet? 💎",
  },
}

// Language detection based on location/browser
export function detectLanguage(): string {
  if (typeof window === "undefined") return "en"

  // Try to get language from browser first
  const browserLang = navigator.language.toLowerCase()

  // Map browser languages to our supported languages
  if (browserLang.startsWith("es")) return "es"
  if (browserLang.startsWith("fr")) return "fr"
  if (browserLang.startsWith("de")) return "de"
  if (browserLang.startsWith("pt")) return "pt"
  if (browserLang.startsWith("ru")) return "ru"
  if (browserLang.startsWith("it")) return "it"
  if (browserLang.startsWith("nl")) return "nl"
  if (browserLang.startsWith("ar")) return "ar"

  return "en" // Default to English
}

// Get translations for current language
export function getTranslations(language?: string): Translations {
  const lang = language || detectLanguage()
  return translations[lang] || translations.en
}

// Hook for using translations in components
export function useTranslations() {
  const language = detectLanguage()
  return {
    t: getTranslations(language),
    language,
    isRTL: language === "ar" || language === "he", // For future RTL language support
  }
}
