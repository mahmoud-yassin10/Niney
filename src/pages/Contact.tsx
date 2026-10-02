import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { inquiryTypes, siteConfig } from "@/lib/config";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [inquiry, setInquiry] = useState<string>(inquiryTypes[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!inquiry) {
      toast({
        title: "Choose an inquiry type",
        description: "Select what this message is about before sending.",
      });
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry: ${inquiry}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`[${inquiry}] ${subject}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Contact"
          subtitle="Press, speaking, research, NYMP, and everything else starts here."
        />

        <div className="max-w-5xl mx-auto pb-20">
          <Reveal variant="stagger" className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-primary mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-body-md">
                  Write with what you need. The form opens an email to {siteConfig.email}.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-primary">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-primary">{siteConfig.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-primary">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl card-bordered">
                <h4 className="font-display text-lg text-primary mb-2">
                  Discovery calls
                </h4>
                <p className="text-muted-foreground text-sm">
                  Paid booking is not open yet. A discovery call, when offered, is separate from a paid session and will use a new calendar link.
                </p>
              </div>

              <div>
                <h4 className="font-display text-lg text-primary mb-4">
                  Follow Me
                </h4>
                <SocialIcons />
              </div>
            </div>

            <div className="card-bordered p-6 md:p-8">
              <h3 className="font-display text-xl text-primary mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry type</Label>
                  <Select value={inquiry} onValueChange={setInquiry}>
                    <SelectTrigger
                      id="inquiry"
                      className="bg-secondary/50 border-border"
                    >
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/50 border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Email {siteConfig.email}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
