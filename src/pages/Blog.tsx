import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { siteConfig, writingCategories } from "@/lib/config";

// Existing pieces only. Public and members-only are labels, not a paywall.
const writings = [
  {
    id: "finding-my-voice",
    title: "Finding My Voice",
    excerpt:
      "The journey from silence to speaking up, and how I learned to embrace my authentic voice...",
    category: "reflections",
    isMembersOnly: false,
    date: "January 5, 2025",
    readTime: "5 min read",
  },
  {
    id: "dawn",
    title: "Dawn",
    excerpt:
      "A poem about new beginnings, the courage to start again, and the light that comes after darkness...",
    category: "poetry",
    isMembersOnly: true,
    date: "January 3, 2025",
    readTime: "2 min read",
  },
  {
    id: "the-art-of-storytelling",
    title: "The Art of Storytelling in Media",
    excerpt:
      "What I've learned about crafting narratives that resonate, from screenwriting to voiceover...",
    category: "essays",
    isMembersOnly: false,
    date: "December 28, 2024",
    readTime: "8 min read",
  },
  {
    id: "lessons-from-yyas",
    title: "Lessons from YYAS",
    excerpt:
      "Reflections on my time at Yale Young African Scholars and the leaders I met along the way...",
    category: "reflections",
    isMembersOnly: false,
    date: "December 20, 2024",
    readTime: "6 min read",
  },
  {
    id: "resilience-poem",
    title: "Resilience",
    excerpt:
      "We rise like the morning sun, unbroken by the weight of yesterday's storms...",
    category: "poetry",
    isMembersOnly: true,
    date: "December 15, 2024",
    readTime: "3 min read",
  },
  {
    id: "book-notes-atomic-habits",
    title: "Book Notes: Atomic Habits",
    excerpt:
      "Key takeaways from James Clear's masterpiece on building good habits and breaking bad ones...",
    category: "books",
    isMembersOnly: false,
    date: "December 10, 2024",
    readTime: "10 min read",
  },
];

function categoryLabel(id: string) {
  return writingCategories.find((cat) => cat.id === id)?.label ?? id;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const membershipEnabled = siteConfig.features.membershipEnabled;

  const filteredPosts = writings.filter((post) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "members") {
      return post.isMembersOnly || post.category === "members";
    }
    return post.category === activeCategory;
  });

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Writing"
          subtitle="A publication in progress: essays, politics, books, reflections, and poetry. Later, excerpts from longer work will live here too."
        />

        <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-body-sm font-body transition-all ${
              activeCategory === "all"
                ? "bg-gold text-burgundy-900"
                : "bg-secondary text-primary hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {writingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-body-sm font-body transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-gold text-burgundy-900"
                  : "bg-secondary text-primary hover:bg-secondary/80"
              }`}
            >
              {cat.label}
              {cat.isPremium && <Lock className="h-3 w-3" />}
            </button>
          ))}
        </Reveal>

        <Reveal variant="stagger" className="max-w-3xl mx-auto space-y-6 pb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="card-bordered p-6 hover:bg-secondary/50 transition-all group"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="category-chip">
                    {categoryLabel(post.category)}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs">
                    {post.isMembersOnly && <Lock className="h-3 w-3" />}
                    {post.isMembersOnly ? "Members only" : "Public"}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {post.date}
                </span>
              </div>

              <h2 className="font-display text-xl text-primary group-hover:text-gold transition-colors mb-2">
                {post.title}
              </h2>

              <p className="text-muted-foreground text-body-sm mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  {post.readTime}
                </span>

                {post.isMembersOnly && !membershipEnabled ? (
                  <span className="text-sm text-muted-foreground">
                    Member writing opens with membership.
                  </span>
                ) : post.isMembersOnly ? (
                  <span className="text-sm text-muted-foreground">
                    Members only
                  </span>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gold hover:text-gold/80"
                  >
                    Read more →
                  </Button>
                )}
              </div>
            </article>
          ))}
        </Reveal>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {activeCategory === "members" && !membershipEnabled
                ? "Member writing opens with membership."
                : "No writing in this category yet."}
            </p>
          </div>
        )}

        {!membershipEnabled && (
          <Reveal
            as="section"
            className="max-w-2xl mx-auto text-center py-12 border-t border-border"
          >
            <h3 className="font-display text-2xl text-primary mb-4">
              Members
            </h3>
            <p className="text-muted-foreground">
              Member writing opens with membership.
            </p>
          </Reveal>
        )}
      </div>
    </Layout>
  );
}
