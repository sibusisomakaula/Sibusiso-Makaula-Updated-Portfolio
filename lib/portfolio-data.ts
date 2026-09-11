export const profile = {
  name: "Sibusiso Makaula",
  title: "ICT Applications Development Graduate",
  tagline: "Full-Stack Developer · AI-Powered Applications",
  location: "Cape Town, South Africa",
  email: "makaulasibusiso06@gmail.com",
  phone: "074 339 8459",
  github: "https://github.com/sibusisomakaula",
  linkedin: "https://linkedin.com/in/sibusiso-makaula",
  summary:
    "ICT Applications Development graduate from Cape Peninsula University of Technology with full-stack development experience using Java, Spring Boot, React, Vue.js, and MySQL. Strong foundation in object-oriented programming, RESTful API development, and database design. Experienced in building scalable, data-driven applications through academic and team projects in Agile environments. Eager to contribute to a software development team and grow as a junior developer.",
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "JavaScript", "TypeScript"] },
  { label: "Frameworks & Libraries", items: ["Spring Boot", "Vue.js", "React"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "REST APIs"] },
  {
    label: "Concepts",
    items: ["OOP", "RESTful API", "Agile", "Test-Driven Development", "Database Design", "API Integration"],
  },
  {
    label: "Soft Skills",
    items: ["Team Collaboration", "Problem-Solving", "Adaptability", "Time Management", "Communication"],
  },
]

export type Project = {
  name: string
  role: string
  blurb: string
  contributions: string
  tech: string[]
  repo: string
  demo: string
}

export const projects: Project[] = [
  {
    name: "INNO-Tech SentimentIQ",
    role: "Full-Stack Developer & Contributor",
    blurb:
      "A browser-first customer feedback analytics workspace. It imports review data and documents (CSV, PDF, DOCX), classifies sentiment, analyzes transcripts, and presents the evidence through a shared Dashboard, Reviews explorer, and Reports view.",
    contributions:
      "Contributed to the analytics workspace and design system — helping build responsive dashboard views, the filter-aware reporting surface, and the data-driven sentiment visualizations, while refining unified design tokens across light and dark modes.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Recharts", "PDF.js", "Express"],
    repo: "https://github.com/sibusisomakaula/INNO-Tech-SentimentIQ",
    demo: "https://sentimentiq-yjipty6u.manus.space",
  },
  {
    name: "CreateFlow AI",
    role: "Full-Stack Developer (Solo)",
    blurb:
      "A lightweight AI content-creation workspace for turning a short brief into a useful first draft — generating emails, blog posts, social copy, product descriptions, code, and images through a clean multi-page interface with a prompt library and generation history.",
    contributions:
      "Designed and built CreateFlow AI end-to-end as an individual project — the full generation workflows, dynamic input forms with validation and loading states, the prompt library and prefill flow, and browser-local generation history, all backed by secure server-side AI calls so provider credentials stay off the client.",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "tRPC 11", "Tailwind CSS 4"],
    repo: "https://github.com/sibusisomakaula/createflow-ai",
    demo: "https://createflow-gdbcdt94.manus.space",
  },
  {
    name: "CAPA-Buddy",
    role: "Developer & Digital Tech Mentor",
    blurb:
      "An AI-powered FAQ assistant built for a weekly AI training programme. CAPA-Buddy instantly answers the questions candidates ask most — Unit Standards, submissions, course access, and project instructions — and gets smarter over time by flagging repeated questions for staff approval.",
    contributions:
      "Collaborated on the assistant's answer logic and knowledge flow — the smart FAQ-then-reference lookup, role-based routing to the correct staff member, and the self-learning approval loop, while contributing subject-matter guidance as the programme's Digital Tech Mentor.",
    tech: ["React", "Supabase Edge Functions", "PostgreSQL", "Claude API", "SendGrid"],
    repo: "https://github.com/NatashaNjili/CAPA-Buddy",
    demo: "https://capa-buddy-ask.lovable.app",
  },
  {
    name: "TaxGuard SA",
    role: "Developer & Collaborator",
    blurb:
      "A South African personal and small-business tax companion that explains whether a user needs to file with SARS, tracks monthly salary/PAYE for under-deduction, and acts as an AI bookkeeper — building an audit-ready record from photographed receipts and reconciled bank deposits.",
    contributions:
      "Collaborated on the tax companion's core modules — the salary/PAYE tracking and shortfall alerts, receipt capture with AI extraction and categorisation, and the income-vs-deposit reconciliation that keeps a continuous, evidence-backed record for SARS queries.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "AI OCR / Vision"],
    repo: "https://github.com/kamvaMaq/taxguard-boost",
    demo: "https://tax-guardian-sa.lovable.app",
  },
]

export type Certificate = {
  name: string
  issuer: string
  image: string
  // External verification link (Coursera verify URL) when available, otherwise the image itself.
  credentialUrl: string
}

// Featured specialization certificate.
export const featuredCertificate: Certificate = {
  name: "Google AI Essentials",
  issuer: "Google · Specialization (5 courses)",
  image: "/certificates/google-ai-essentials.png",
  credentialUrl: "/certificates/google-ai-essentials.png",
}

export type CertificateProgram = {
  name: string
  issuer: string
  description: string
  courses: Certificate[]
}

// Artificial Intelligence Bootcamp — the individual course certificates earned through the programme.
export const bootcamp: CertificateProgram = {
  name: "Artificial Intelligence Bootcamp",
  issuer: "AI Bootcamp · Coursera",
  description:
    "A multi-course AI programme completed through Coursera — spanning foundational AI, Python for data science, supervised and unsupervised machine learning, and generative AI with large language models.",
  courses: [
    {
      name: "AI For Everyone",
      issuer: "DeepLearning.AI",
      image: "/certificates/ai-for-everyone.png",
      credentialUrl: "https://coursera.org/verify/VZ3QG2DG35R1",
    },
    {
      name: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      image: "/certificates/intro-to-ai.png",
      credentialUrl: "https://coursera.org/verify/9VC4GNAECWYN",
    },
    {
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      image: "/certificates/python-data-science.png",
      credentialUrl: "https://coursera.org/verify/IV33MTBHX1WB",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      image: "/certificates/intro-generative-ai.png",
      credentialUrl: "https://coursera.org/verify/VZ98EQASMSAM",
    },
    {
      name: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM",
      image: "/certificates/prompt-engineering.png",
      credentialUrl: "https://coursera.org/verify/PUG918VSD8BI",
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI · Stanford Online",
      image: "/certificates/supervised-ml.png",
      credentialUrl: "https://coursera.org/verify/GOW5MD60U3VH",
    },
    {
      name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI · Stanford Online",
      image: "/certificates/unsupervised-ml.png",
      credentialUrl: "https://coursera.org/verify/DNW3TRP5CCJX",
    },
    {
      name: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI · AWS",
      image: "/certificates/genai-llms.png",
      credentialUrl: "https://coursera.org/verify/UX4D97F2IAKC",
    },
  ],
}

export type EducationItem = {
  qualification: string
  institution: string
  location: string
  period: string
}

export const education: EducationItem[] = [
  {
    qualification: "Diploma in ICT Applications Development",
    institution: "Cape Peninsula University of Technology",
    location: "Cape Town",
    period: "2025",
  },
]

export const academicProjects = [
  {
    name: "Subject Tracker System",
    period: "Jun 2025 – Nov 2025",
    org: "Cape Peninsula University of Technology · Cape Town",
    points: [
      "Led development of a full-stack academic tracking application (Java + React) with a 5-member team, delivering full CRUD functionality for subject and marks management.",
      "Designed RESTful APIs with Spring Boot for automated performance calculations, reducing manual tracking effort and improving grade-insight accuracy for students.",
      "Optimized a MySQL relational database and used Git/GitHub for version control, ensuring smooth collaboration across the team.",
    ],
  },
  {
    name: "Full-Stack Web Application (Capstone Project)",
    period: "Feb 2025 – Dec 2025",
    org: "Cape Peninsula University of Technology · Cape Town",
    points: [
      "Built a full-stack web application (Spring Boot + Vue.js) with RESTful APIs over a 10-month development cycle, enabling smooth frontend–backend integration end-to-end.",
      "Designed a normalized MySQL database schema and implemented JUnit-based TDD, improving data integrity and reducing bugs before deployment.",
      "Collaborated with a 5-member Agile team using Git/GitHub, contributing to consistent sprint delivery across the development lifecycle.",
    ],
  },
]

export const languages = ["English", "Xhosa"]
