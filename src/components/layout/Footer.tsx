import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { siteConfig, navItems } from "@/lib/config";

// TikTok icon component (not in lucide)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const footerNav = [
  ...navItems,
  { label: "Press Kit", href: "/press" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const [newsletterNote, setNewsletterNote] = useState(false);

  const socialLinks = [
    {
      icon: Linkedin,
      href: siteConfig.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: TikTokIcon,
      href: siteConfig.social.tiktok,
      label: "TikTok",
    },
    {
      icon: Instagram,
      href: siteConfig.social.instagram,
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: siteConfig.social.youtube,
      label: "YouTube",
    },
  ];

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterNote(true);
  };

  return (
    <footer className="bg-burgundy-900 border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              aria-label="Niney Yassin"
              className="inline-block font-display text-2xl text-primary hover:text-gold transition-colors"
            >
              {siteConfig.mark}
            </Link>
            <p className="font-body text-sm text-primary">{siteConfig.name}</p>
            <p className="text-muted-foreground text-body-sm max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-primary">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-body-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact, socials, newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-primary">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-body-sm">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.location}</p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <form onSubmit={handleNewsletter} className="space-y-2 pt-2">
              <label
                htmlFor="notes-from-niney"
                className="font-display text-lg text-primary block"
              >
                Notes from Niney
              </label>
              <div className="flex gap-2">
                <input
                  id="notes-from-niney"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  className="h-10 min-w-0 flex-1 rounded-md border border-border bg-background px-3 font-body text-sm text-primary placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="submit"
                  className="h-10 shrink-0 rounded-md bg-gold px-4 font-body text-sm text-burgundy-900 hover:bg-gold/90 transition-colors"
                >
                  Send
                </button>
              </div>
              {newsletterNote && (
                <p className="text-body-sm text-muted-foreground" role="status">
                  This list is not connected yet. Write to{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gold hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  if you want notes from Niney.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Made by{" "}
            <a
              href={siteConfig.madeBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {siteConfig.madeBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
