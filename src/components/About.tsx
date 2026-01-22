import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, BarChart3 } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Programming",
      skills: ["Amazon Web Services (AWS)", "Azure", "Databricks", "Python", "SQL", "Shell Scripting", "REST APIs"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "DevOps & Platform Engineering",
      skills: ["CI/CD", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Provisioning"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering & Analytics",
      skills: ["Apache Spark", "Pandas", "NumPy", "Metrics and Log Analysis", "Data Pipelines"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Observability & Systems",
      skills: ["Grafana", "Cloud Monitoring", "Linux", "Git", "Incident and Root-Cause Analysis", "Production Support"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cloud Engineer with ~3 years of experience owning and delivering production-grade AWS systems for enterprise 
            platforms serving 100K+ users. Strong in CI/CD, containerisation, infrastructure automation, and cloud security, 
            with hands-on Python and SQL to improve system reliability and efficiency. Stamp 1G – no sponsorship required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cloud Engineer with ~3 years of experience owning and delivering 
                  <span className="text-primary font-semibold"> production-grade AWS systems</span> for enterprise 
                  platforms serving <span className="text-primary font-semibold">100K+ users</span>.
                </p>
                <p>
                  Strong in <span className="text-accent font-semibold">CI/CD, containerisation, infrastructure automation, 
                  and cloud security</span>, with hands-on Python and SQL to improve system reliability and efficiency.
                </p>
                <p>
                  Completed <span className="text-accent font-semibold">MSc in Computing (Data Analytics)</span> at Dublin City University. 
                  <span className="text-primary font-semibold"> Stamp 1G – no sponsorship required</span>. Ready to contribute to 
                  innovative teams and deliver scalable, high-performance cloud solutions.
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
