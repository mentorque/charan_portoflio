import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Lightbulb } from "lucide-react";

const CaseStudies = () => {
  // Easy to edit: Update this array to add, remove, or modify case studies
  const caseStudies = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and maintained automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment delays and release failures by 40%.",
      tools: ["Jenkins", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"],
      keyInsight: "Reduced deployment delays and release failures by 40% by automating CI/CD pipelines, enabling faster and more reliable production releases.",
      linkedInUrl: "https://linkedin.com/posts/charan-gorentla-ravi_example-post"
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Implemented Infrastructure as Code with Terraform, reducing environment inconsistencies and deployment issues across teams.",
      tools: ["Terraform", "AWS", "Infrastructure as Code", "Provisioning"],
      keyInsight: "Standardized cloud environments and enabled repeatable provisioning, reducing environment inconsistencies and deployment issues significantly.",
      linkedInUrl: "https://linkedin.com/posts/charan-gorentla-ravi_example-post"
    },
    {
      title: "Cloud Operations & Production Analytics",
      description: "Built Python-based data extraction pipelines for service metrics, reducing manual analysis effort by 40% across 14+ cloud services.",
      tools: ["Python", "Cloud Monitoring", "Grafana", "Data Pipelines", "Metrics Analysis"],
      keyInsight: "Reduced manual analysis effort by 40% and sustained 99.85% uptime by building automated metrics pipelines and accelerating root-cause analysis.",
      linkedInUrl: "https://linkedin.com/posts/charan-gorentla-ravi_example-post"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Case <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world projects demonstrating impact in cloud infrastructure, platform engineering, 
            and production reliability. Detailed explanations available on LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {study.description}
                </p>

                {/* Tools Used */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Insight */}
                <div className="flex-grow">
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <h4 className="text-sm font-semibold text-primary">Key Insight</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {study.keyInsight}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Link */}
                <div className="pt-4 mt-auto">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={study.linkedInUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
