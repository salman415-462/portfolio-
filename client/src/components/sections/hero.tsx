import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedTextRef.current && (window as any).Typed) {
      new (window as any).Typed(typedTextRef.current, {
        strings: [
          'CS Student & Threat Intelligence Learner',
          'Cybersecurity Enthusiast',
          'Machine Learning Developer',
          'OSINT Researcher',
          'Future Security Professional'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }, []);

  const handleResumeDownload = () => {
    // In a real implementation, this would link to an actual PDF
    alert('Resume download would start here. Please replace with actual PDF URL.');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-emerald-500/20 rounded-full animate-float" style={{animationDelay: '-4s'}}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="mb-8" data-aos="zoom-in">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
            alt="Muhammad Salman Profile Picture" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 dark:border-slate-700/50"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" data-aos="fade-up">
          <span className="text-gradient">Muhammad</span>{" "}
          <span className="text-slate-800 dark:text-slate-200">Salman</span>
        </h1>
        
        {/* Animated Subtitle */}
        <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 h-16 flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
          <span ref={typedTextRef} className="typing-cursor"></span>
        </div>
        
        {/* Bio */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          Passionate Computer Science student specializing in Threat Intelligence and Cybersecurity. 
          I build innovative solutions that bridge the gap between technology and security, 
          creating a safer digital world through code and intelligence.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
          <Button 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            variant="ghost"
            onClick={handleResumeDownload}
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
          >
            <i className="fas fa-download mr-2"></i>
            Download Resume
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="800">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-slate-500"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
