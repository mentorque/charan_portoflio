import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Database, Layers } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Java", "TypeScript", "Python", "C++"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Frameworks",
      skills: ["Spring Boot", "Microservices Architecture", "RESTful APIs", "Maven", "Distributed Systems", "React"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      skills: ["MySQL", "MongoDB", "Redis"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Core Concepts",
      skills: ["Object-Oriented Design", "Design Patterns", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* About Me */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Java Full Stack Developer with 3+ years of experience building and maintaining high-traffic, distributed web applications.
                </p>
                <p>
                  Hands-on experience working on enterprise-scale platforms like eBay, contributing to critical checkout and payment flows used by millions of users. Proficient in designing backend microservices using Spring Boot and developing responsive user interfaces with React, with a strong focus on scalability, reliability, and clean, maintainable code in Agile environments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
