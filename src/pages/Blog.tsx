import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { blogCategories } from "@/lib/config";
import { siteConfig } from "@/lib/config";

// Sample blog posts (in real implementation, this would come from MDX files)
const blogPosts = [
  {
    id: "finding-my-voice",
    title: "Finding My Voice",
    excerpt: "The journey from silence to speaking up—how I learned to embrace my authentic voice...",
    category: "daily",
    isPremium: false,
    previewPercent: 100,
    date: "January 5, 2025",
    readTime: "5 min read",
  },
  {
    id: "dawn",
    title: "Dawn",
    excerpt: "A poem about new beginnings, the courage to start again, and the light that comes after darkness...",
    category: "poetry",
    isPremium: true,
    previewPercent: 20,
    priceEGP: 20,
    date: "January 3, 2025",
    readTime: "2 min read",
  },
  {
    id: "the-art-of-storytelling",
    title: "The Art of Storytelling in Media",
    excerpt: "What I've learned about crafting narratives that resonate, from screenwriting to voiceover...",
    category: "daily",
    isPremium: false,
    previewPercent: 100,
    date: "December 28, 2024",
    readTime: "8 min read",
  },
  {
    id: "lessons-from-yyas",
    title: "Lessons from YYAS",
    excerpt: "Reflections on my time at Yale Young African Scholars and the leaders I met along the way...",
    category: "daily",
    isPremium: false,
    previewPercent: 100,
    date: "December 20, 2024",
    readTime: "6 min read",
  },
  {
    id: "resilience-poem",
    title: "Resilience",
    excerpt: "We rise like the morning sun, unbroken by the weight of yesterday's storms...",
    category: "poetry",
    isPremium: true,
    previewPercent: 15,
    priceEGP: 20,
    date: "December 15, 2024",
    readTime: "3 min read",
  },
  {
    id: "book-notes-atomic-habits",
    title: "Book Notes: Atomic Habits",
    excerpt: "Key takeaways from James Clear's masterpiece on building good habits and breaking bad ones...",
    category: "book-notes",
    isPremium: false,
    previewPercent: 100,
    date: "December 10, 2024",
    readTime: "10 min read",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const paywallEnabled = siteConfig.features.paywallEnabled;

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Blog"
          subtitle="Thoughts, stories, poetry, and reflections on media, life, and creativity."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          {blogCategories.map((cat) => (
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
        </div>

        {/* Blog Posts */}
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="card-bordered p-6 hover:bg-secondary/50 transition-all group"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="category-chip capitalize">
                    {post.category.replace("-", " ")}
                  </span>
                  {post.isPremium && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs">
                      <Lock className="h-3 w-3" />
                      Premium
                    </span>
                  )}
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

                {post.isPremium && paywallEnabled ? (
                  <Button
                    size="sm"
                    className="bg-gold text-burgundy-900 hover:bg-gold/90"
                  >
                    <Lock className="mr-1 h-3 w-3" />
                    Unlock for {post.priceEGP} EGP
                  </Button>
                ) : post.isPremium && !paywallEnabled ? (
                  <span className="text-sm text-muted-foreground">
                    Coming soon
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
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts in this category yet.
            </p>
          </div>
        )}

        {/* Membership CTA (disabled) */}
        {!siteConfig.features.membershipEnabled && (
          <section className="max-w-2xl mx-auto text-center py-12 border-t border-border">
            <h3 className="font-display text-2xl text-primary mb-4">
              Premium Content Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              Membership options for exclusive poetry, essays, and mentoring sessions will be available soon.
            </p>
            <span className="inline-block px-6 py-3 rounded-full bg-secondary text-muted-foreground">
              Membership options launching soon
            </span>
          </section>
        )}
      </div>
    </Layout>
  );
}
