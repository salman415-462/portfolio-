import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const matrixRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Matrix rain animation
    if (matrixRef.current) {
      const canvas = matrixRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const drops: number[] = [];
      
      for (let x = 0; x < canvas.width / 10; x++) {
        drops[x] = 1;
      }
      
      const draw = () => {
        if (!ctx || !canvas) return;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '15px Share Tech Mono';
        
        for (let i = 0; i < drops.length; i++) {
          const text = matrix[Math.floor(Math.random() * matrix.length)];
          ctx.fillText(text, i * 10, drops[i] * 10);
          
          if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };
      
      const interval = setInterval(draw, 35);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Initialize typing animation
    const initTyping = () => {
      if (typedTextRef.current && (window as any).Typed) {
        new (window as any).Typed(typedTextRef.current, {
          strings: [
            'CS Student & Threat Intelligence Learner',
            'OSINT Specialist',
            'Cybersecurity Enthusiast',
            'Digital Forensics Expert',
            'Threat Hunter'
          ],
          typeSpeed: 60,
          backSpeed: 40,
          backDelay: 2000,
          startDelay: 1000,
          loop: true,
          showCursor: true,
          cursorChar: '_'
        });
      }
    };

    if ((window as any).Typed) {
      initTyping();
    } else {
      const checkTyped = setInterval(() => {
        if ((window as any).Typed) {
          initTyping();
          clearInterval(checkTyped);
        }
      }, 100);
      
      setTimeout(() => clearInterval(checkTyped), 5000);
    }
  }, []);

  const handleResumeDownload = () => {
    // Create download link for resume
    const link = document.createElement('a');
    link.href = '/assets/Profile.pdf';
    link.download = 'Muhammad_Salman_Resume.pdf';
    link.click();
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix Rain Background */}
      <canvas 
        ref={matrixRef}
        className="absolute inset-0 opacity-30"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 hacker-glass rounded-lg animate-float opacity-20 flex items-center justify-center">
        <span className="text-green-400 text-xs hacker-font">{'{ }'}</span>
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 cyber-glass rounded-lg animate-float opacity-20 flex items-center justify-center" style={{animationDelay: '-2s'}}>
        <span className="text-cyan-400 text-xs hacker-font">{'</>'}</span>
      </div>
      <div className="absolute top-1/2 right-20 w-20 h-20 hacker-glass rounded-lg animate-float opacity-20 flex items-center justify-center" style={{animationDelay: '-4s'}}>
        <span className="text-green-400 text-xs hacker-font">{'[]'}</span>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Terminal-style Profile */}
        <div className="mb-8 inline-block" data-aos="zoom-in">
          <div className="relative">
            <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute inset-0 border border-cyan-400 rounded-full animate-spin-slow opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
              alt="Muhammad Salman Profile Picture" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto terminal-border grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Hacker-style Name Display */}
        <div className="mb-6" data-aos="fade-up">
          <div className="text-green-400 text-sm hacker-font mb-2">root@cybersec:~$ whoami</div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black cyber-font glow-green">
            <span className="text-matrix">MUHAMMAD</span>
            <br />
            <span className="text-cyber">SALMAN</span>
          </h1>
        </div>
        
        {/* Terminal-style Typing Animation */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <div className="hacker-glass rounded-lg p-4 max-w-3xl mx-auto">
            <div className="text-green-400 text-sm hacker-font mb-2">root@cybersec:~$ cat /etc/profile</div>
            <div className="text-xl md:text-3xl hacker-font text-green-300 h-12 flex items-center">
              <span className="text-green-400">{'>'}</span>
              <span ref={typedTextRef} className="ml-2"></span>
            </div>
          </div>
        </div>
        
        {/* Bio with Terminal Style */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="400">
          <div className="hacker-glass rounded-lg p-6 max-w-4xl mx-auto text-left">
            <div className="text-green-400 text-sm hacker-font mb-3">root@cybersec:~$ cat README.md</div>
            <p className="text-green-300 hacker-font leading-relaxed">
              I'm a passionate cybersecurity student at the National University of Technology. 
              With a focus on OSINT, fake news detection, and threat intelligence, I'm building 
              tools to uncover truth, protect digital footprints, and share insights with the world.
            </p>
          </div>
        </div>
        
        {/* Cyber Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="600">
          <button 
            onClick={scrollToProjects}
            className="cyber-button px-8 py-4 rounded-lg font-bold text-lg hacker-font relative overflow-hidden group"
          >
            <span className="relative z-10">{'> VIEW_PROJECTS.exe'}</span>
            <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button 
            onClick={handleResumeDownload}
            className="cyber-button px-8 py-4 rounded-lg font-bold text-lg hacker-font relative overflow-hidden group border-cyan-400 text-cyan-400 hover:bg-cyan-400"
          >
            <span className="relative z-10">{'> DOWNLOAD_RESUME.pdf'}</span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
        
        {/* Terminal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="800">
          <div className="animate-bounce">
            <div className="text-green-400 text-2xl">
              <i className="fas fa-terminal"></i>
              <div className="text-xs hacker-font mt-1">SCROLL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
