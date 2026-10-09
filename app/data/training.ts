export type Category = "Weapons" | "Unarmed" | "Special Programs";

export type TrainingProgram = {
  slug: string;
  name: string;
  nameTa: string;
  category: Category;
  description: string;
  descriptionTa: string;
  subtitle?: string;
  range?: string;
  difficulty?: number;
  focus?: string[];
  duration?: string;
  level?: string;
  badge?: string;
  color?: string;
  skills?: string[];
};

export const categoryTa: Record<Category, string> = {
  Weapons: "ஆயுதங்கள்",
  Unarmed: "நிராயுதப் பயிற்சி",
  "Special Programs": "சிறப்புத் திட்டங்கள்",
};

/* ── FLAGSHIP PROGRAMS (Referencing yudhakalam.in core courses) ── */
export type FlagshipProgram = {
  id: string;
  name: string;
  nameTa: string;
  subtitle: string;
  duration: string;
  level: string;
  color: string;
  glowColor: string;
  badge?: string;
  description: string;
  skills: string[];
  highlights: string[];
  suitableFor: string;
  ctaText: string;
  ctaHref: string;
};

export const flagshipPrograms: FlagshipProgram[] = [
  {
    id: "silambam-staff",
    name: "Silambam – Staff Fighting",
    nameTa: "சிலம்பம் – கம்புச் சண்டை",
    subtitle: "The Art of the Bamboo Staff",
    duration: "3 Months (Basic)",
    level: "Beginner to Advanced",
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.25)",
    badge: "Core Foundation",
    description:
      "The ancient Tamil art of Silambam involves mastery of the long bamboo staff through circular, flowing movements, footwork patterns, and combat sequences. Builds lightning-fast reflexes, full-body coordination, and warrior instincts.",
    skills: [
      "Staff grip & posture (Nilai & Pidi)",
      "Basic circular movements (Suzharchi)",
      "Footwork patterns (Kaaladi varisai)",
      "Attack & defense patterns (Adi & Thaduppu)",
      "Sparring techniques & timing",
      "Competition & tournament forms",
    ],
    highlights: [
      "Traditional bamboo staff provided during training",
      "Authentic Kaaladi footwork rooted in Tamil combat",
      "Pathway to advanced Double Stick & Spear after month 3",
    ],
    suitableFor: "Anyone looking for discipline, reflexes, and authentic martial arts heritage.",
    ctaText: "Enroll in Silambam",
    ctaHref: "/contact?program=silambam",
  },
  {
    id: "womens-self-defense",
    name: "Women's Self-Defense",
    nameTa: "பெண்கள் தற்காப்புப் பயிற்சி",
    subtitle: "Empowerment Through Martial Arts",
    duration: "3 Months (Basic) — FREE",
    level: "All Levels Welcome",
    color: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.25)",
    badge: "100% Free + Free Kit",
    description:
      "A specially designed program for women combining Silambam techniques with practical self-defense applications. Builds physical confidence, situational awareness, and the mental strength to protect oneself in any situation.",
    skills: [
      "Situational awareness & avoidance",
      "Close-range release & escape techniques",
      "Silambam stick & everyday object defense",
      "Deflective strikes & joint control",
      "Confidence building & vocal assertiveness",
    ],
    highlights: [
      "Free Silambam training kit for all enrolled women",
      "Dedicated women-only batches in a safe environment",
      "Practical street awareness workshops included",
    ],
    suitableFor: "Women and teenage girls of all fitness levels seeking confidence and practical protection.",
    ctaText: "Register Free — Claim Kit",
    ctaHref: "/contact?program=womens-self-defense",
  },
  {
    id: "youth-program",
    name: "Youth Program",
    nameTa: "இளையோர் திட்டம்",
    subtitle: "Warriors of Tomorrow",
    duration: "3 Months (Basic)",
    level: "Ages 6–18",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.25)",
    badge: "Ages 6–18",
    description:
      "A fun, structured program for children and teenagers that introduces Tamil martial arts while building discipline, respect, fitness, and cultural pride. Our most energetic and fastest-growing program!",
    skills: [
      "Basic stance & movement fundamentals",
      "Staff spinning fundamentals & rhythm",
      "Discipline, respect & focus habits",
      "Agility drills & team exercises",
      "Cultural knowledge & warrior heritage",
      "Mini-competitions & belt progressions",
    ],
    highlights: [
      "Safe, disciplined instruction designed for growing bodies",
      "Builds posture, focus, and reduced screen dependency",
      "District & state championship coaching opportunities",
    ],
    suitableFor: "Kids and teens (ages 6 to 18) looking to build character, fitness, and focus.",
    ctaText: "Enroll Youth Warrior",
    ctaHref: "/contact?program=youth",
  },
];

/* ── 3-MONTH PROGRESSION JOURNEY (Directly referencing yudhakalam.in) ── */
export type JourneyPhase = {
  phase: string;
  phaseTa: string;
  title: string;
  titleTa: string;
  focus: string;
  points: string[];
  milestone: string;
  hours: string;
  accent: string;
};

export const learningJourney: JourneyPhase[] = [
  {
    phase: "Month 1",
    phaseTa: "மாதம் 1",
    title: "Foundation",
    titleTa: "அடித்தளம்",
    focus: "Stances, Grips & Kaaladi Footwork",
    points: [
      "Basic stances & postures (Tharkaapu Nilai & Asanam)",
      "Fundamental grip techniques & wrist rotations",
      "Core physical conditioning & flexibility routines",
      "Footwork patterns (Kaaladi Varisai 1 to 4)",
    ],
    milestone: "Master the 8-count staff rhythm and foundational defensive stance.",
    hours: "24+ Hours Training",
    accent: "#fbbf24",
  },
  {
    phase: "Month 2",
    phaseTa: "மாதம் 2",
    title: "Development",
    titleTa: "வளர்ச்சி",
    focus: "Speed, Kinetic Strikes & Sparring Drills",
    points: [
      "Attack & defense sequences (Adi & Thaduppu)",
      "Combination circular movements & tempo shifts",
      "Partner drills & controlled sparring basics (Sandai muraigal)",
      "Weapon-specific techniques & deflection angles",
    ],
    milestone: "Execute fluid 2-minute partner sparring drills with precision deflections.",
    hours: "28+ Hours Training",
    accent: "#fb8a5c",
  },
  {
    phase: "Month 3",
    phaseTa: "மாதம் 3",
    title: "Mastery & Beyond",
    titleTa: "தேர்ச்சி & தொடர்ச்சி",
    focus: "Tournament Forms, Demonstration & Grading",
    points: [
      "Competition-ready tournament forms and routines",
      "Full sparring sessions with protective equipment",
      "Performance demonstration & grading examination",
      "Advanced course pathways (Surul Val, Maan Kombu, Vel Kambu)",
    ],
    milestone: "Earn official Yudhakalam Certification and qualify for advanced weapon arts.",
    hours: "32+ Hours Training",
    accent: "#ef4444",
  },
];

/* ── ANCIENT WARRIOR THIRUKKURAL CODE (Directly referencing yudhakalam.in) ── */
export type WarriorKural = {
  kural: string;
  meaning: string;
  context: string;
  kuralNo: number;
};

export const thirukkurals: WarriorKural[] = [
  {
    kural: "வீரம் உடையவர் எங்கும் வாழ்வர்",
    meaning: "The brave thrive everywhere.",
    context: "Cultivating unshakeable courage makes a warrior resilient in any arena of life.",
    kuralNo: 771,
  },
  {
    kural: "அச்சமே கீழ்மைக்கு ஆதி",
    meaning: "Fear is the root of all weakness.",
    context: "True martial training is not about striking first, but conquering inner fear first.",
    kuralNo: 508,
  },
  {
    kural: "கற்றாரைக் கற்றாரே காமுறுவர்",
    meaning: "Only the learned appreciate the learned.",
    context: "Only those who sweat through rigorous practice recognize and respect true mastery.",
    kuralNo: 395,
  },
];

/* ── DOJO BATCH TIMINGS & SCHEDULE ── */
export type TrainingBatch = {
  name: string;
  timing: string;
  days: string;
  audience: string;
  features: string[];
  badge?: string;
};

export const trainingBatches: TrainingBatch[] = [
  {
    name: "Morning Warriors Batch",
    timing: "6:00 AM – 7:30 AM",
    days: "Tuesday, Thursday, Saturday",
    audience: "Adults, Fitness Enthusiasts & Working Professionals",
    features: [
      "Kaaladi footwork & cardio conditioning",
      "Traditional bamboo staff drilling",
      "Mental focus & ancient breathwork",
    ],
    badge: "Popular",
  },
  {
    name: "Youth & Students Batch",
    timing: "4:30 PM – 6:00 PM",
    days: "Monday, Wednesday, Friday",
    audience: "School & College Students (Ages 6–18)",
    features: [
      "Discipline & posture corrections",
      "Rapid spinning & tournament routines",
      "District & state competition coaching",
    ],
    badge: "Youth",
  },
  {
    name: "Women's Empowerment Batch",
    timing: "5:30 PM – 7:00 PM",
    days: "Tuesday, Thursday, Saturday",
    audience: "Women & Girls (All Age Groups)",
    features: [
      "100% Free training + Free Silambam kit",
      "Close-range evasions & everyday object defense",
      "Encouraging, supportive sisterhood",
    ],
    badge: "100% Free",
  },
  {
    name: "Weekend Masters Intensive",
    timing: "7:00 AM – 10:00 AM",
    days: "Saturday & Sunday",
    audience: "Intermediate to Advanced Warriors",
    features: [
      "Double Stick, Surul Val & Maan Kombu",
      "Full contact sparring with safety gear",
      "Instructor certification pathways",
    ],
    badge: "Advanced",
  },
];

/* ── FREQUENTLY ASKED QUESTIONS ── */
export const trainingFaqs = [
  {
    q: "Do I need prior martial arts experience to join?",
    a: "None at all. Over 80% of our new students start with zero background. Our 3-month foundational course is specifically structured to guide beginners safely through posture, grip, footwork, and basic combat.",
  },
  {
    q: "Do I need to buy a bamboo staff or weapons before starting?",
    a: "No. All practice staffs and training weapons are provided at the dojo floor. Furthermore, women enrolled in our self-defense program receive a complimentary Silambam kit.",
  },
  {
    q: "Is Silambam safe for children?",
    a: "Yes! Youth training begins with light, rounded rattan staffs, strict safety supervision, and zero contact until proper stances, balance, and control are firmly established.",
  },
  {
    q: "What happens after completing the 3-month basic course?",
    a: "Graduates earn their official Yudhakalam Level 1 Certificate and are eligible to advance into specialized weapon arts including Double Stick, Vel Kambu (Spear), Surul Val (Flexible Sword), and tournament competition teams.",
  },
  {
    q: "Why is the Women's Self-Defense course free?",
    a: "As part of our founding mission rooted in Tamil warrior heritage, we believe every woman has the right to physical protection, mental fearlessness, and cultural empowerment without economic barriers.",
  },
];

/* ── ALL 10 DISCIPLINES (Maintained for full backwards compatibility + enriched) ── */
export const trainingPrograms: TrainingProgram[] = [
  {
    slug: "single-stick",
    name: "Single Stick",
    nameTa: "ஒற்றைக் கம்பு",
    category: "Weapons",
    subtitle: "Primary Foundation of Silambam",
    range: "Medium to Long",
    difficulty: 2,
    focus: ["Footwork (Kaaladi)", "Wrist Swings", "Strike Sequences", "Deflections"],
    duration: "3 Months (Basic)",
    level: "Beginner to Advanced",
    color: "#fbbf24",
    skills: ["Staff grip & posture", "Circular movements", "Kaaladi footwork", "Defense & attack"],
    description:
      "The foundation of Silambam — traditional one-stick fighting built on footwork, timing, and precise strikes.",
    descriptionTa:
      "சிலம்பத்தின் அடித்தளம் — கால் அசைவு, நேரக்கணிப்பு, துல்லியமான அடிகள் ஆகியவற்றை அடிப்படையாகக் கொண்ட பாரம்பரிய ஒற்றைக் கம்புச் சண்டை.",
  },
  {
    slug: "double-stick",
    name: "Double Stick",
    nameTa: "இரட்டைக் கம்பு",
    category: "Weapons",
    subtitle: "Dual Coordination & Simultaneous Combat",
    range: "Medium",
    difficulty: 3,
    focus: ["Bilateral Reflexes", "Continuous Rotations", "Dual Parrying", "High-Speed Sparring"],
    duration: "Ongoing Mastery",
    level: "Intermediate",
    color: "#f59e0b",
    skills: ["Dual weapon coordination", "Twin strikes", "Simultaneous block & counter", "Rapid flow"],
    description:
      "Dual-stick combat drills that sharpen coordination, reflexes, and simultaneous offense and defense.",
    descriptionTa:
      "ஒருங்கிணைப்பு, விரைவான எதிர்வினை, ஒரே நேரத்தில் தாக்கவும் தடுக்கவும் கூர்மைப்படுத்தும் இரட்டைக் கம்புப் பயிற்சிகள்.",
  },
  {
    slug: "surulvall",
    name: "Surulvall",
    nameTa: "சுருள்வாள்",
    category: "Weapons",
    subtitle: "Flexible Whispering Steel Ribbon",
    range: "Variable (6 to 9 ft Whip Arc)",
    difficulty: 5,
    focus: ["Kinetic Momentum", "Body Wave Agility", "Multi-Directional Guard", "High Courage"],
    duration: "Advanced Track",
    level: "Advanced / Master",
    color: "#ef4444",
    skills: ["Blade oscillation", "Full body rhythm", "Centrifugal shielding", "Precision retrieval"],
    description:
      "Mastery of the flexible sword (Surul Val) — a rare traditional weapon demanding exceptional control and courage.",
    descriptionTa:
      "வளையும் வாளான சுருள்வாளில் தேர்ச்சி — சிறந்த கட்டுப்பாடும் துணிவும் தேவைப்படும் அரிய பாரம்பரிய ஆயுதம்.",
  },
  {
    slug: "vel-kambu",
    name: "Vel Kambu",
    nameTa: "வேல் கம்பு",
    category: "Weapons",
    subtitle: "Sacred Spear & Battlefield Reach",
    range: "Long (8 to 10 ft)",
    difficulty: 4,
    focus: ["Linear Piercing", "Vault Footwork", "Heavy Staff Balance", "Battlefield Discipline"],
    duration: "Advanced Track",
    level: "Intermediate to Advanced",
    color: "#e2571c",
    skills: ["Spear thrusts", "Vault leverage", "Distance control", "Peripheral strikes"],
    description:
      "Spear and long-staff combat forms, training reach, power, and battlefield discipline.",
    descriptionTa:
      "வேல் மற்றும் நீளக் கம்புப் போர் முறைகள் — எட்டும் தூரம், வலிமை, போர்க்கள ஒழுக்கத்தைப் பயிற்றுவிக்கிறது.",
  },
  {
    slug: "maan-kombu",
    name: "Maan Kombu",
    nameTa: "மான் கொம்பு",
    category: "Weapons",
    subtitle: "Twin Deer-Horn Blades",
    range: "Close Quarters",
    difficulty: 4,
    focus: ["Joint Locks", "Takedowns", "Deflective Trapping", "In-Fighting Combat"],
    duration: "Advanced Track",
    level: "Advanced",
    color: "#fbbf24",
    skills: ["Trapping checks", "Close range parry", "Disarming locks", "Counter offensive"],
    description:
      "Twin deer-horn blade fighting — an advanced traditional weapon art for close-quarters combat.",
    descriptionTa:
      "இரட்டை மான்கொம்பு ஆயுதச் சண்டை — நெருங்கிய போருக்கான மேம்பட்ட பாரம்பரிய ஆயுதக் கலை.",
  },
  {
    slug: "kuthuvarisai",
    name: "Kuthuvarisai",
    nameTa: "குத்துவரிசை",
    category: "Unarmed",
    subtitle: "Traditional Tamil Empty-Hand Warfare",
    range: "Close to Medium",
    difficulty: 3,
    focus: ["Varma Pressure Points", "Striking Angles", "Sweeps & Throws", "Evasive Footwork"],
    duration: "Core Practice",
    level: "All Levels",
    color: "#fb8a5c",
    skills: ["Open-palm strikes", "Body sweeps", "Pressure point targeting", "Unarmed disarms"],
    description:
      "Traditional Tamil unarmed combat — strikes, locks, and takedowns rooted in centuries of martial heritage.",
    descriptionTa:
      "பாரம்பரிய தமிழ் நிராயுதப் போர்க்கலை — பல நூற்றாண்டு தற்காப்பு மரபில் வேரூன்றிய அடிகள், பிடிகள், வீழ்த்தும் உத்திகள்.",
  },
  {
    slug: "advance-equipments-techniques",
    name: "Advance Equipments & Techniques",
    nameTa: "மேம்பட்ட கருவிகளும் நுட்பங்களும்",
    category: "Weapons",
    subtitle: "Rare Implements & Fire Staff Demonstrations",
    range: "Multi-Range",
    difficulty: 5,
    focus: ["Fire Staff (Theeppandham)", "Heavy Iron Staves", "Combination Weapons", "Choreography"],
    duration: "Elite Guild",
    level: "Mastery Level",
    color: "#f97316",
    skills: ["Fire staff manipulation", "Multi-opponent choreography", "Historic tournament katas"],
    description:
      "Advanced traditional weaponry and combination techniques for experienced practitioners ready to go further.",
    descriptionTa:
      "மேலும் முன்னேறத் தயாரான அனுபவமிக்க பயிற்சியாளர்களுக்கான மேம்பட்ட பாரம்பரிய ஆயுதங்களும் கூட்டு நுட்பங்களும்.",
  },
  {
    slug: "womens-self-defence",
    name: "Women's Self Defence",
    nameTa: "பெண்கள் தற்காப்புப் பயிற்சி",
    category: "Special Programs",
    subtitle: "Empowerment Through Martial Arts",
    range: "Practical Street Defense",
    difficulty: 1,
    focus: ["Threat Avoidance", "Rapid Escapes", "Improvised Weapons", "Boundary Control"],
    duration: "3 Months (Basic) — FREE",
    level: "All Levels Welcome",
    badge: "Free Tuition + Free Kit",
    color: "#fb7185",
    skills: ["Escape maneuvers", "Vocal assertiveness", "Stick deflection", "Spatial awareness"],
    description:
      "Dedicated self-defense training and awareness workshops for women, in a safe and encouraging environment.",
    descriptionTa:
      "பெண்களுக்கான தற்காப்புப் பயிற்சியும் விழிப்புணர்வுப் பட்டறைகளும் — பாதுகாப்பான, ஊக்கமளிக்கும் சூழலில்.",
  },
  {
    slug: "youth-program",
    name: "Youth Program",
    nameTa: "இளையோர் திட்டம்",
    category: "Special Programs",
    subtitle: "Warriors of Tomorrow (Ages 6–18)",
    range: "Foundational & Formative",
    difficulty: 1,
    focus: ["Discipline & Respect", "Staff Spinning", "Reflex Agility", "Tamil Cultural Pride"],
    duration: "3 Months (Basic)",
    level: "Ages 6–18",
    badge: "Ages 6–18",
    color: "#38bdf8",
    skills: ["Posture & grip", "Speed rotations", "Team exercises", "Junior competitions"],
    description:
      "Age-appropriate training for children and teens, building discipline, focus, and physical fitness early.",
    descriptionTa:
      "குழந்தைகள் மற்றும் இளம் வயதினருக்கு ஏற்ற பயிற்சி — சிறு வயதிலேயே ஒழுக்கம், கவனம், உடல் தகுதியை வளர்க்கிறது.",
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    nameTa: "உடற்பயிற்சிச் சாகசம்",
    category: "Special Programs",
    subtitle: "Meipayattu & Warrior Conditioning",
    range: "Bodyweight & Floor Acrobatic",
    difficulty: 3,
    focus: ["Full-Body Flexibility", "Rolls & Falls (Meipayattu)", "Explosive Core", "Balance"],
    duration: "Ongoing Conditioning",
    level: "All Levels",
    color: "#a855f7",
    skills: ["Acrobatic flips & rolls", "Joint opening stretches", "Core endurance", "Injury prevention"],
    description:
      "Flexibility, strength, and body-control conditioning that supports and elevates every martial art we teach.",
    descriptionTa:
      "நெகிழ்வுத்தன்மை, வலிமை, உடல் கட்டுப்பாடு — நாங்கள் கற்பிக்கும் ஒவ்வொரு தற்காப்புக் கலையையும் மேம்படுத்தும் பயிற்சி.",
  },
];
