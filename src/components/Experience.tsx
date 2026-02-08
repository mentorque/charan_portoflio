import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Zemoso Technologies",
      position: "Software Engineer",
      location: "India",
      duration: "Jan 2024 – Present",
      logo: "Z",
      projects: [
        {
          title: "eBay Checkout & Payment Systems",
          achievements: [
            {
              impact: "SCA V2 Flows for eBay Checkout",
              description: "Designed and implemented Strong Customer Authentication (SCA) V2 flows for eBay Checkout, handling retries, fallbacks, and gateway failures across high-traffic payment workflows supporting millions of transactions."
            },
            {
              impact: "~40% Adoption by eBay Host Applications",
              description: "Enabled adoption by ~40% of eBay host applications by building and maintaining a generic SCA client layer that standardized authentication behavior and reduced duplicated logic."
            },
            {
              impact: "~30% Reduction in Root-Cause Analysis Time",
              description: "Enhanced observability of distributed checkout systems by integrating ClickHouse-based centralized logging, enabling faster tracing of cross-service requests and reducing root-cause analysis time by ~30%."
            },
            {
              impact: "~5% Reduction in Checkout Drop-off",
              description: "Reduced checkout drop-off by ~5% on mobile web by implementing the eBay Money Back Guarantee (eMBG) experience and integrating it with core checkout and payment flows."
            },
            {
              impact: "Deployment Failure Rate: 45% → 6%",
              description: "Stabilized CI/CD pipelines for checkout-related features by diagnosing and resolving systemic Velocity workflow issues, reducing deployment failure rates from ~45% to ~6% and improving release reliability."
            }
          ],
          technologies: ["Java", "Spring Boot", "Microservices", "ClickHouse", "eBay Checkout", "Payment Flows", "CI/CD", "Velocity"]
        }
      ]
    },
    {
      company: "Zemoso Technologies",
      position: "Associate Software Engineer",
      location: "India",
      duration: "Dec 2022 – Dec 2023",
      logo: "Z",
      projects: [
        {
          title: "Backend Microservices & React Development",
          achievements: [
            {
              impact: "Spring Boot Microservices",
              description: "Engineered Spring Boot-based backend microservices and RESTful APIs using custom DTOs and standardized middleware, enabling reliable inter-service communication and ensuring scalability and high availability."
            },
            {
              impact: "~35% Reduction in API Integration Defects",
              description: "Reduced API integration defects by ~35% by centralizing authentication and request/response handling into shared client-server integration layers."
            },
            {
              impact: "~40% Reduction in UI Development Time",
              description: "Reduced UI development time by ~40% across multiple modules by architecting a standardized React framework with reusable, high-performance components using Vite and Material UI (MUI)."
            }
          ],
          technologies: ["Spring Boot", "RESTful APIs", "React", "Vite", "Material UI", "Microservices"]
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
            3+ years of experience building high-traffic distributed web applications. 
            Hands-on experience on enterprise-scale platforms like eBay, contributing to critical checkout and payment flows used by millions of users.
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
