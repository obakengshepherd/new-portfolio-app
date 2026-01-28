import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { skills, projects } from "@/data";
import { getLucideIcon } from "@/lib/icon-utils";
import { Skill } from "@/types/skill";
import { Project } from "@/types/project";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return skills.map((skill: Skill) => ({
    slug: skill.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const skill = skills.find((s: Skill) => s.slug === slug);
  return {
    title: `${skill?.name} - Skill Detail`,
    description: skill?.detailedDescription,
  };
}

export default async function SkillDetailPage({ params }: Props) {
  const { slug } = await params;
  const skill = skills.find((s: Skill) => s.slug === slug);

  if (!skill) {
    notFound();
  }

  const Icon = getLucideIcon(skill.icon);
  const relatedProjects = projects.filter((p: Project) =>
    skill.relatedProjects.includes(p.id),
  );
  const relatedSkills = skills.filter((s: Skill) =>
    skill.relatedSkills.includes(s.id),
  );

  return (
    <>
      <PageHero
        title={skill.name}
        subtitle="Skill Detail"
        description={skill.description}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground">
                {skill.detailedDescription || skill.description}
              </p>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedProjects.map((project: Project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                        <h3 className="font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.featuredTechnologies
                            ?.slice(0, 2)
                            .map((tech: string) => (
                              <Badge
                                key={tech}
                                variant="muted"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skill Info */}
            <Card>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {skill.category}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Proficiency Level</p>
                  <Badge variant="primary" className="capitalize">
                    {skill.proficiencyLabel}
                  </Badge>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-accent"
                      style={{ width: `${(skill.proficiency / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {skill.proficiency}/10
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Experience</p>
                  <p className="text-base text-foreground">
                    {skill.yearsOfExperience}+ years
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Subcategory</p>
                  <Badge variant="secondary">{skill.subcategory}</Badge>
                </div>
              </div>
            </Card>

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card>
                <h4 className="font-bold mb-3">Related Skills</h4>
                <div className="space-y-2">
                  {relatedSkills.map((relatedSkill: Skill) => (
                    <Link
                      key={relatedSkill.id}
                      href={`/skills/${relatedSkill.slug}`}
                      className="block p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {relatedSkill.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {relatedSkill.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* CTA */}
            <Link href="/contact">
              <Button className="w-full" variant="primary" size="lg">
                Let's Collaborate
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
