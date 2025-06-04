import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initialize typing animation
    const initTyping = () => {
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
    };

    // Try immediately or wait for script to load
    if ((window as any).Typed) {
      initTyping();
    } else {
      const checkTyped = setInterval(() => {
        if ((window as any).Typed) {
          initTyping();
          clearInterval(checkTyped);
        }
      }, 100);
      
      // Clear interval after 5 seconds to prevent infinite checking
      setTimeout(() => clearInterval(checkTyped), 5000);
    }
  }, []);

  const handleResumeDownload = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '-2s'}}></div>
      <div className="absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '-4s'}}></div>
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '-1s'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Profile Image with Glassmorphism */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-75 blur-md"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
              alt="Muhammad Salman Profile Picture" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/50 dark:border-slate-700/50 backdrop-blur-sm"
            />
          </div>
        </div>
        
        {/* Main Heading with Stunning Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
            Muhammad
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent animate-gradient-x" style={{animationDelay: '-0.5s'}}>
            Salman
          </span>
        </h1>
        
        {/* Animated Subtitle with Better Styling */}
        <div className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 h-20 flex items-center justify-center text-slate-700 dark:text-slate-300">
          <span ref={typedTextRef} className="min-h-[1.2em]"></span>
        </div>
        
        {/* Enhanced Bio */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
          🚀 Passionate Computer Science student specializing in Threat Intelligence and Cybersecurity. 
          I build innovative solutions that bridge the gap between technology and security, 
          creating a safer digital world through code and intelligence.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={scrollToProjects}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300 animate-gradient-x"
          >
            🎯 View My Work
          </Button>
          <Button 
            variant="ghost"
            onClick={handleResumeDownload}
            className="px-10 py-4 bg-white/20 dark:bg-slate-800/20 backdrop-blur-md border border-white/30 dark:border-slate-700/30 rounded-full font-bold text-lg hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all duration-300 transform hover:scale-105"
          >
            📥 Download Resume
          </Button>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Visual Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/5 pointer-events-none"></div>
    </section>
  );
}
