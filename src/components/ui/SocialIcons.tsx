import { Linkedin, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/config";

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

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({ className = "", iconClassName = "" }: SocialIconsProps) {
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
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary hover:bg-gold hover:text-burgundy-900 transition-all hover-glow ${iconClassName}`}
          title={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
