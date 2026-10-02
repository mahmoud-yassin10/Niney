// Site configuration - edit these values to update across the entire site

export const siteConfig = {
  name: "Niney Yassin",
  mark: "NY",
  // Provisional brand language. Replace when the final headline and bios arrive.
  title:
    "Political Science Journalist | Public Speaker & Event MC | Media Strategist | Youth Leader",
  tagline:
    "For the stories worth telling, the questions worth asking, and the rooms still waiting to be built.",
  email: "Niney_yassin@aucegypt.edu",
  phone: "01126441123",
  location: "Cairo, Egypt",
  
  // Social links
  social: {
    linkedin: "https://www.linkedin.com/in/niney-yassin-251387308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    tiktok: "https://www.tiktok.com/@niney_yassin?_r=1&_t=ZS-92wVakJNTcq",
    instagram: "https://www.instagram.com/niney_yassin?igsh=ZHRrbHJ6OXIybzRw&utm_source=qr",
    youtube: "#", // Add when available
  },
  
  // Calendly integration
  calendlyUrl: "https://calendly.com/nineyyassin", // Update with actual Calendly link
  
  // CV download
  cvUrl: "/Niney_Yassin_CV.pdf", // Place CV in public folder
  
  // Feature flags
  features: {
    paywallEnabled: false,
    blogEnabled: true,
    membershipEnabled: false,
    calendarEnabled: true,
  },
  
  // Footer
  madeBy: {
    name: "Mahmoud Yassin",
    url: "https://mahmoud-yassin.com",
  },
};

// Navigation items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "NYMP", href: "/nymp" },
  { label: "Blog", href: "/blog" },
  { label: "Research", href: "/research" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  ...navItems,
  { label: "Press Kit", href: "/press" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

// Work filters. Change labels here. Pages should import this list.
export const portfolioCategories = [
  "All",
  "Journalism, Media & Creative",
  "Research",
  "Public Speaking & Hosting",
  "Leadership & Impact",
] as const;

export const writingCategories = [
  { id: "essays", label: "Essays", isPremium: false },
  { id: "politics", label: "Politics & International Affairs", isPremium: false },
  { id: "books", label: "Books & Reading", isPremium: false },
  { id: "reflections", label: "Reflections", isPremium: false },
  { id: "poetry", label: "Poetry", isPremium: true },
  { id: "creative", label: "Creative Writing", isPremium: false },
  { id: "members", label: "Members", isPremium: true },
] as const;

export const inquiryTypes = [
  "General",
  "Media/Press",
  "Speaking/Hosting",
  "Professional Services",
  "NYMP",
  "Research",
  "Partnerships",
  "Team/Applications",
] as const;

// Service categories
export const serviceCategories = [
  {
    id: "mentorship",
    title: "Mentorship & Coaching",
    description: "Personal guidance for aspiring media professionals and content creators.",
  },
  {
    id: "branding",
    title: "Personal Branding Strategy",
    description: "Build a memorable personal brand that resonates with your audience.",
  },
  {
    id: "content",
    title: "Content Plan & Scriptwriting",
    description: "Strategic content planning and professional scriptwriting services.",
  },
  {
    id: "oncamera",
    title: "On-Camera Content Creation",
    description: "Professional on-camera talent for your video projects.",
  },
  {
    id: "voiceover",
    title: "Voiceover Services",
    description: "Professional voice acting for commercials, narration, and more.",
  },
  {
    id: "hosting",
    title: "Event MC & TV Hosting",
    description: "Engaging host for your events, shows, and live broadcasts.",
  },
  {
    id: "acting",
    title: "Acting",
    description: "Professional acting for film, TV, and commercial productions.",
  },
  {
    id: "business",
    title: "Business Plan & Company Profile",
    description: "Professional business documentation and company profiles.",
  },
] as const;

// Blog categories
export const blogCategories = [
  { id: "daily", label: "Daily Writings", isPremium: false },
  { id: "poetry", label: "Poetry", isPremium: true },
  { id: "book-notes", label: "Book Notes", isPremium: false },
  { id: "film-notes", label: "Film/Series Notes", isPremium: false },
  { id: "podcast", label: "Podcast", isPremium: false },
] as const;
