import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Capgemini Engineering India",
      position: "Software Engineer",
      location: "India",
      duration: "Oct 2021 – Sep 2024",
      logo: "C",
      projects: [
        {
          title: "Project 1: Cloud Infrastructure & Platform Engineering",
          achievements: [
            {
              impact: "40% Reduction in Deployment Delays",
              description: "Reduced deployment delays and release failures by 40% by designing and maintaining automated CI/CD pipelines using Jenkins and GitHub Actions, enabling faster and more reliable production releases."
            },
            {
              impact: "99.9% Availability Maintained",
              description: "Improved system scalability and service reliability by deploying and operating containerised applications using Docker and Kubernetes, consistently maintaining 99.9% availability for production workloads."
            },
            {
              impact: "30% Increase in Operational Efficiency",
              description: "Increased operational efficiency by 30% by automating repetitive infrastructure and operational tasks using Python and Shell scripting, reducing manual intervention and error rates."
            },
            {
              impact: "Infrastructure as Code Implementation",
              description: "Reduced environment inconsistencies and deployment issues by implementing Infrastructure as Code with Terraform, enabling repeatable provisioning and standardised cloud environments across teams."
            },
            {
              impact: "Enhanced Cloud Security",
              description: "Strengthened cloud security and access controls by configuring IAM, encryption, secrets management, and network security rules, improving compliance and reducing security-related risks."
            }
          ],
          technologies: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Python", "Shell Scripting", "AWS", "IAM"]
        },
        {
          title: "Project 2: Cloud Operations & Production Analytics",
          achievements: [
            {
              impact: "99.85% Uptime Sustained",
              description: "Improved system reliability by analysing metrics across 14+ cloud services, sustaining 99.85% uptime."
            },
            {
              impact: "40% Reduction in Manual Analysis",
              description: "Reduced manual analysis effort by 40% by building Python-based data extraction pipelines for service metrics."
            },
            {
              impact: "Accelerated Root-Cause Analysis",
              description: "Accelerated root-cause analysis by aggregating and analysing production metrics to identify recurring failure patterns and performance bottlenecks."
            }
          ],
          technologies: ["Python", "Cloud Monitoring", "Grafana", "Metrics Analysis", "Data Pipelines", "Root-Cause Analysis"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ~3 years of experience owning and delivering production-grade AWS systems for enterprise 
            platforms serving 100K+ users with focus on cloud infrastructure, CI/CD, and production reliability.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-6">
                    <h4 className="text-xl font-semibold text-primary">{project.title}</h4>
                    
                    {/* Key Achievements */}
                    <div className="relative">
                      {/* Desktop: Normal stacked layout */}
                      <div className="hidden md:block space-y-4">
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-primary" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-primary font-semibold text-lg">
                                {achievement.impact}
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile: Carousel layout */}
                      <div className="md:hidden">
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent className="-ml-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <CarouselItem key={achIndex} className="pl-2 basis-full">
                                <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                                  <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                      <TrendingUp className="w-4 h-4 text-primary" />
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="text-primary font-semibold text-lg">
                                      {achievement.impact}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                      {achievement.description}
                                    </p>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                        
                        {/* Mobile Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                          {project.achievements.map((_, achIndex) => (
                            <div
                              key={achIndex}
                              className="w-2 h-2 rounded-full bg-muted-foreground/30"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
