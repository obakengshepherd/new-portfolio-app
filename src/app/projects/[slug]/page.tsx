import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { projects, skills } from "@/data";
import Link from "next/link";
import { ExternalLink, Github, Figma, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title} - Project Case Study`,
    description: project?.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const techSkills = skills.filter((s) =>
    project.technologies.some((t) => t.toLowerCase() === s.name.toLowerCase()),
  );

  return (
    <>
      <PageHero
        title={project.title}
        subtitle="Project Case Study"
        description={project.shortDescription}
      />

      <Section>
        {/* Project Hero Image */}
        {project.images[0] && (
          <div className="mb-16 rounded-xl overflow-hidden">
            <img
              src={project.images[0].url}
              alt={project.images[0].alt}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-base text-muted-foreground">
                  {project.longDescription}
                </p>
              )}
            </div>

            {/* Role & Timeline */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-1">Role</p>
                <p className="font-semibold text-foreground">{project.role}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <Badge variant="primary" className="capitalize">
                  {project.status}
                </Badge>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">
                  {new Date(project.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {project.endDate
                    ? new Date(project.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <Badge variant="secondary" className="capitalize">
                  {project.category}
                </Badge>
              </Card>
            </div>

            {/* Challenges */}
            {project.challenges.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index}>
                      <h3 className="font-bold text-foreground mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {challenge.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Learnings */}
            {project.learnings.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <Card key={index}>
                      <h3 className="font-bold text-foreground mb-2">
                        {learning.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {learning.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Contributions */}
            {project.contributions.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">My Contributions</h2>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-foreground">{contribution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Links */}
            <Card>
              <h3 className="font-bold mb-4">Project Links</h3>
              <div className="space-y-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Site</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Repository</span>
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Figma size={16} />
                    <span className="text-sm">Figma Design</span>
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <BookOpen size={16} />
                    <span className="text-sm">Case Study</span>
                  </a>
                )}
              </div>
            </Card>

            {/* Technologies */}
            <Card>
              <h3 className="font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Metrics */}
            {project.metrics && (
              <Card>
                <h3 className="font-bold mb-4">Metrics</h3>
                <div className="space-y-3 text-sm">
                  {project.metrics.users && (
                    <div>
                      <p className="text-muted-foreground">Users</p>
                      <p className="font-semibold text-foreground">
                        {project.metrics.users.toLocaleString()}+
                      </p>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div>
                      <p className="text-muted-foreground">Performance Grade</p>
                      <Badge variant="success">
                        {project.metrics.performance}
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* CTA */}
            <Link href="/contact">
              <Button className="w-full" variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Projects Navigation */}
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousProject && (
              <Link href={`/projects/${previousProject.slug}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <p className="text-xs text-muted-foreground mb-2">
                    ← Previous Project
                  </p>
                  <h3 className="font-bold text-foreground">
                    {previousProject.title}
                  </h3>
                </Card>
              </Link>
            )}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <p className="text-xs text-muted-foreground mb-2">
                    Next Project →
                  </p>
                  <h3 className="font-bold text-foreground">
                    {nextProject.title}
                  </h3>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
