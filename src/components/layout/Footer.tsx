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

export function Footer() {
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

  return (
    <footer className="bg-burgundy-900 border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl text-primary">
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground text-body-sm max-w-xs">
              {siteConfig.title}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-primary">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.slice(0, 6).map((item) => (
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

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-primary">Connect</h4>
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
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary hover:bg-gold hover:text-burgundy-900 transition-all hover-glow"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
