import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Zap, Brain, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Risk Analysis Platform (Master's Thesis)",
      description: "Built data pipelines using Python and Spark to process 5,000+ news articles into analytics-ready data. Implemented Spark SQL transformations to aggregate risk indicators for downstream analytics.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "5,000+ Articles Processed",
          description: "Built data pipelines using Python and Spark to process 5,000+ news articles into analytics-ready data"
        },
        {
          metric: "Spark SQL Transformations",
          description: "Implemented Spark SQL transformations to aggregate risk indicators for downstream analytics"
        }
      ],
      technologies: ["Python", "SQL", "APIs", "Apache Spark", "Data Pipelines", "GitHub"],
      category: "Master's Thesis",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com"
    },
    {
      title: "Production Incident Analytics Platform",
      description: "Analysed incident datasets to track frequency, resolution time, and recurring failure patterns. Modelled relational schemas to support operational reporting and reliable trend analysis.",
      icon: <Database className="w-8 h-8" />,
      achievements: [
        {
          metric: "Incident Analytics",
          description: "Analysed incident datasets to track frequency, resolution time, and recurring failure patterns"
        },
        {
          metric: "Relational Schema Design",
          description: "Modelled relational schemas to support operational reporting and reliable trend analysis"
        }
      ],
      technologies: ["Python", "PostgreSQL", "SQL Analytics", "Data Modelling", "GitHub"],
      category: "Personal Project",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions demonstrating expertise in cloud engineering, 
            data analytics, and production reliability.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                        </div>
                        <div>
                          <div className="text-primary font-semibold text-sm">
                            {achievement.metric}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 min-h-[60px]">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on challenging problems in cloud engineering, 
                infrastructure automation, and production reliability. Let's discuss how we can build something amazing together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:charangrcareers@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
