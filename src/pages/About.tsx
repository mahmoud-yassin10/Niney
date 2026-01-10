import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { InfoCard } from "@/components/shared/InfoCard";
import nineyImage from "@/assets/niney-3.jpeg";

const pillars = [
  {
    title: "Fem Plus Magazine",
    role: "Founder",
    year: "2025–Present",
    description: "Empowering women through storytelling, media, and social advocacy. Building a platform for authentic female voices.",
    category: "Leadership",
  },
  {
    title: "Resilience Foundation",
    role: "Founder",
    year: "2025–Present",
    description: "Global awareness and mentorship for Palestinian youth. Created 'The Resilience' short film, submitted to Cairo International Film Festival.",
    category: "Leadership",
  },
  {
    title: "Yalla Success - Arab Women Hackathon",
    role: "Media Director",
    year: "2025–Present",
    description: "Led media strategy for the hackathon with 500+ participants. Mentored 35 girls on content creation and script writing.",
    category: "Media Strategy",
  },
  {
    title: "Event MC & Public Speaker",
    role: "Host",
    year: "2025",
    description: "Hosted Squash National Championship 2025 in Port Said, NIS events, and participated in speech competitions.",
    category: "Hosting/MC",
  },
  {
    title: "Voiceover Artist & Screenwriter",
    role: "Creative",
    year: "Ongoing",
    description: "Developed and performed written content for film and online platforms. Professional voice work for various media.",
    category: "Voiceover",
  },
  {
    title: "Actress & Performer",
    role: "Talent",
    year: "Ongoing",
    description: "Finalist in casting for 'Kamel El 3adad.' Attended The Star Acting workshop in Port Said.",
    category: "Acting",
  },
];

const education = [
  {
    title: "Yale Young African Scholars (YYAS)",
    subtitle: "2025 Cohort",
    category: "Program",
    description: "College prep, global leadership, and academic development program.",
  },
  {
    title: "Lumiere Research Program",
    subtitle: "Full Scholarship • 2025",
    category: "Research",
    description: "Individual research project examining media framing and legal/political narratives in international conflict coverage.",
  },
  {
    title: "AUC Media Innovation Hub",
    subtitle: "2024",
    category: "Bootcamp",
    description: "Storytelling and digital content creation at the American University in Cairo.",
  },
  {
    title: "BUE Politics & Business Simulation",
    subtitle: "2024",
    category: "Bootcamp",
    description: "Politics, Economics, and Business Simulation of British Parliament & SDG strategy.",
  },
];

const certifications = [
  {
    title: "Certified TV Host",
    subtitle: "Trained by Ramy Radwan",
    year: "Jan–Feb 2024",
    category: "Certification",
  },
  {
    title: "Certified Digital Marketer",
    subtitle: "Innovation Area",
    year: "Feb–May 2024",
    category: "Certification",
  },
  {
    title: "Level 1 Arabic Language in Media",
    subtitle: "Mass Media School, Cairo",
    year: "2024",
    category: "Certification",
  },
];

const languages = [
  { name: "English", level: "Fluent", detail: "IELTS 7.5 (C1)" },
  { name: "Arabic", level: "Native", detail: "" },
  { name: "German", level: "A1", detail: "Goethe-Institut Certificate" },
];

export default function About() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="About Me"
          subtitle="Founder, media strategist, and storyteller passionate about amplifying voices that matter."
        />

        {/* Bio Section */}
        <section className="pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-bordered">
                <img
                  src={nineyImage}
                  alt="Niney Yassin"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gold/10 -z-10" />
            </div>

            <div className="space-y-6">
              <p className="text-body-lg text-primary leading-relaxed">
                I'm <span className="text-gold font-display">Niney Yassin</span>, a TV host, voice artist, and media strategist from Cairo, Egypt. Currently a high school senior at Nermeen Ismail School with a 3.9 GPA, I've dedicated my journey to empowering voices—especially women and youth.
              </p>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                As the founder of <strong>Fem Plus Magazine</strong> and <strong>Resilience Foundation</strong>, I create platforms for storytelling that matters. My work spans media directing, event hosting, voiceover artistry, screenwriting, and acting.
              </p>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                Beyond media, I'm a black belt in Karate (5th place in National Championship), an award-winning marimba performer, and a writer crafting my memoir "On My Way" alongside a poetry collection.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Pillars */}
        <section className="pb-20">
          <SectionTitle
            title="Experience & Leadership"
            subtitle="Key roles that define my journey"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <InfoCard
                key={pillar.title}
                title={pillar.title}
                subtitle={pillar.role}
                year={pillar.year}
                category={pillar.category}
                description={pillar.description}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="pb-20">
          <SectionTitle title="Education & Programs" />
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                category={item.category}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="pb-20">
          <SectionTitle title="Certifications" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <InfoCard
                key={cert.title}
                title={cert.title}
                subtitle={cert.subtitle}
                year={cert.year}
                category={cert.category}
              />
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="pb-20">
          <SectionTitle title="Languages" />
          <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="card-bordered p-6 text-center hover-glow transition-all"
              >
                <h3 className="font-display text-xl text-primary mb-2">
                  {lang.name}
                </h3>
                <p className="text-gold font-body">{lang.level}</p>
                {lang.detail && (
                  <p className="text-muted-foreground text-sm mt-1">
                    {lang.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Media */}
        <section className="pb-20">
          <SectionTitle
            title="Beyond Media"
            subtitle="Athletics and arts that shape who I am"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Karate",
                detail: "Black Belt • 14 years training",
                achievement: "5th place - National Championship (Giza Zone)",
              },
              {
                title: "Sports",
                detail: "Former Volleyball & Padel Player",
                achievement: "Team sports leadership experience",
              },
              {
                title: "Music",
                detail: "Marimba & Percussionist",
                achievement: "Award-winning duet performer before Minister of Music",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-bordered p-6 text-center hover-glow transition-all"
              >
                <h3 className="font-display text-xl text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-body-sm mb-2">
                  {item.detail}
                </p>
                <p className="text-gold text-sm">{item.achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="pb-20">
          <SectionTitle title="Skills" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Public Relations & Networking",
              "Strategic Communication",
              "Content Creation",
              "Social Media Strategy",
              "Mentorship & Coaching",
              "Acting & Hosting",
              "Voice Artistry",
              "Storytelling",
              "Scriptwriting",
              "Memoir & Poetry",
              "Language Fluency",
              "Cultural Sensitivity",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-primary text-body-sm hover:bg-gold hover:text-burgundy-900 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
