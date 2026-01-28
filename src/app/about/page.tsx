import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { aboutContent } from "@/data/about";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Full Stack Developer",
  description:
    "Learn more about my background, experience, and approach to software development.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="Get to know me"
        description="My journey as a developer and my passion for creating excellent digital experiences"
        showSocial={true}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">My Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {aboutContent.summary}
              </p>
              <p className="text-lg text-muted-foreground">
                {aboutContent.vision}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">My Approach</h2>
              <p className="text-lg text-muted-foreground">
                {aboutContent.approach}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Key Highlights</h3>
            {aboutContent.highlights.map((highlight, index) => (
              <Card key={index} className="p-4">
                <p className="text-sm text-foreground">{highlight}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-4">
            {aboutContent.education.map((edu, index) => (
              <Card key={index}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.field}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>
                  <Badge variant="primary">{edu.graduationYear}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutContent.certifications.map((cert, index) => (
              <Card key={index}>
                <h3 className="font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
