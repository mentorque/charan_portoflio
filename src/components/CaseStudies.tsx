import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Lightbulb } from "lucide-react";

const CaseStudies = () => {
  // Easy to edit: Update this array to add, remove, or modify case studies
  const caseStudies = [
    {
      title: "SCA V2 & Generic Client Layer for eBay",
      description: "Designed and implemented Strong Customer Authentication (SCA) V2 flows for eBay Checkout. Built a generic SCA client layer adopted by ~40% of eBay host applications, standardizing authentication behavior and reducing duplicated logic.",
      tools: ["Java", "Spring Boot", "eBay Checkout", "Payment Flows", "SCA"],
      keyInsight: "Enabled ~40% adoption across eBay host applications by building a reusable SCA client layer that handled retries, fallbacks, and gateway failures across high-traffic payment workflows.",
      linkedInUrl: "https://www.linkedin.com/in/chetpelly-saicharan/"
    },
    {
      title: "ClickHouse Centralized Logging for Checkout",
      description: "Enhanced observability of distributed checkout systems by integrating ClickHouse-based centralized logging, enabling faster tracing of cross-service requests.",
      tools: ["ClickHouse", "Distributed Systems", "Observability", "Logging"],
      keyInsight: "Reduced root-cause analysis time by ~30% through centralized logging and faster cross-service request tracing.",
      linkedInUrl: "https://www.linkedin.com/in/chetpelly-saicharan/"
    },
    {
      title: "eBay Money Back Guarantee (eMBG) Integration",
      description: "Reduced checkout drop-off by ~5% on mobile web by implementing the eBay Money Back Guarantee experience and integrating it with core checkout and payment flows.",
      tools: ["React", "eBay Checkout", "Payment Flows", "Mobile Web"],
      keyInsight: "~5% reduction in checkout drop-off on mobile web through eMBG experience implementation and seamless integration with checkout and payment flows.",
      linkedInUrl: "https://www.linkedin.com/in/chetpelly-saicharan/"
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
            Key technical highlights from eBay checkout and payment systems, 
            demonstrating impact in distributed systems, observability, and full-stack development.
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
