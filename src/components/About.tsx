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
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* About Me */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">About Me</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Based in Ireland, I am a data and cloud professional with nearly three years of experience working on enterprise scale platforms serving over 100000 users.
                </p>
                <p>
                  My background combines data analytics, cloud engineering, and applied AI. I work extensively with SQL and Python to analyse large datasets, build reliable data pipelines, and translate complex data into clear and actionable insights for business and technical stakeholders. Alongside analytics, I have hands on experience with AWS and scalable data processing using Apache Spark.
                </p>
                <p>
                  At Capgemini, I worked across analytics and operations focused projects, analysing usage patterns, performance metrics, and system behaviour to improve efficiency, reliability, and data driven decision making. My work supported KPI tracking, reporting automation, and analytics ready data modelling.
                </p>
                <p>
                  During my Master's in Data Analytics at Dublin City University, I focused on AI driven analysis, working on projects involving large scale text data, risk analysis, and structured data transformation. I am particularly interested in applying data and AI in practical real world contexts.
                </p>
                <p>
                  I am authorised to work in Ireland under Stamp 1G with no sponsorship required and I am seeking opportunities as a Data Analyst or Analytics focused Engineer.
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
