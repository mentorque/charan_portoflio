import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top or scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Saicharan Chetpelly
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Achievements
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="mailto:saicharanchetpellydev@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Mail size={18} />
            </a>
            <a href="tel:+919704276705" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Phone size={18} />
            </a>
            <a href="https://www.linkedin.com/in/chetpelly-saicharan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('achievements')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Achievements
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Contact
              </button>
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <a href="mailto:saicharanchetpellydev@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="tel:+919704276705" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Phone size={18} />
                </a>
                <a href="https://www.linkedin.com/in/chetpelly-saicharan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
