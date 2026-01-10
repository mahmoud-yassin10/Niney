import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/config";
import heroImage from "@/assets/niney-2.jpeg";

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center floating-icons-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold/5 animate-float" />
        <div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-gold/5 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 pt-20 pb-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left stagger-children">
            <h1 className="font-display text-primary mb-4">
              {siteConfig.name}
            </h1>
            <p className="text-gold font-body text-lg md:text-xl mb-6">
              {siteConfig.title}
            </p>
            <p className="text-primary/80 text-body-lg max-w-lg mx-auto lg:mx-0 mb-8">
              {siteConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900 font-body text-base px-8"
              >
                <Link to="/contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 font-body text-base px-8"
              >
                <Link to="/portfolio">See Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 font-body text-base px-8"
              >
                <a href={siteConfig.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <SocialIcons />
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl transform scale-90" />
              
              {/* Image frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden hero-image-frame">
                <img
                  src={heroImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
