import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { CVDownload } from "@/components/contact/CVDownload";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Get In Touch",
  description:
    "Reach out to me for project inquiries, collaborations, or just to chat about web development.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Contact"
        description="I'm always interested in hearing about new projects and opportunities"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div>
                <h3 className="font-bold text-foreground mb-3">Availability</h3>
                <p className="text-muted-foreground text-sm">
                  {contactInfo.availability}
                </p>
              </div>
            </Card>

            <CVDownload />

            <Card>
              <h3 className="font-bold text-foreground mb-4">
                Connect With Me
              </h3>
              <SocialLinks className="flex-col" />
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
