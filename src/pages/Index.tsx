import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import KeyAchievements from "@/components/KeyAchievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <KeyAchievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
