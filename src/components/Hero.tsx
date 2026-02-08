import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-24 md:pt-20">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden">
                <img
                  src="/chetpelly-profile.jpeg"
                  alt="Saicharan Chetpelly"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Saicharan</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Chetpelly
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Java Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Java Full Stack Developer with 3+ years of experience building and maintaining high-traffic, distributed web applications. Hands-on experience on enterprise-scale platforms like eBay, contributing to critical checkout and payment flows used by millions of users.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
            <a href="mailto:saicharanchetpellydev@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span>📧 saicharanchetpellydev@gmail.com</span>
            </a>
            <a href="tel:+919704276705" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span>📱 +91 9704276705</span>
            </a>
            <div className="flex items-center gap-2">
              <span>📍 Hyderabad, India</span>
            </div>
            <a href="https://www.linkedin.com/in/chetpelly-saicharan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span>LinkedIn</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Learn More About Me
            <ArrowDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
