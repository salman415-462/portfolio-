import { useEffect, useRef } from "react";

export default function Portfolio() {
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
        ctx.font = '15px monospace';
        
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix Background */}
      <canvas 
        ref={matrixRef}
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-green-400/20 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-green-400">[MS_CYBER]</div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-green-400 hover:text-green-300">HOME</button>
            <button onClick={() => scrollToSection('about')} className="text-green-400 hover:text-green-300">ABOUT</button>
            <button onClick={() => scrollToSection('skills')} className="text-green-400 hover:text-green-300">SKILLS</button>
            <button onClick={() => scrollToSection('projects')} className="text-green-400 hover:text-green-300">PROJECTS</button>
            <button onClick={() => scrollToSection('education')} className="text-green-400 hover:text-green-300">EDUCATION</button>
            <button onClick={() => scrollToSection('contact')} className="text-green-400 hover:text-green-300">CONTACT</button>
          </div>
          <div className="text-xs text-green-400">STATUS: ONLINE</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="Muhammad Salman" 
              className="w-32 h-32 rounded-full mx-auto border-2 border-green-400 mb-4 grayscale"
            />
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ whoami</div>
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
              MUHAMMAD SALMAN
            </h1>
          </div>
          
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-4 mb-8">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ cat /etc/profile</div>
            <div className="text-xl text-green-300 h-8 flex items-center justify-center">
              <span className="text-green-400">{'>'}</span>
              <span ref={typedTextRef} className="ml-2"></span>
            </div>
          </div>

          <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 mb-8 text-left">
            <div className="text-green-400 text-sm mb-3">root@cybersec:~$ cat README.md</div>
            <p className="text-green-300">
              I'm a passionate cybersecurity student at the National University of Technology. 
              With a focus on OSINT, fake news detection, and threat intelligence, I'm building 
              tools to uncover truth, protect digital footprints, and share insights with the world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              {'> VIEW_PROJECTS.exe'}
            </button>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/Profile.pdf';
                link.download = 'Muhammad_Salman_Resume.pdf';
                link.click();
              }}
              className="px-6 py-3 bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              {'> DOWNLOAD_RESUME.pdf'}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ cat about.txt</div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">ABOUT_ME.md</h2>
          </div>
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-8">
            <p className="text-green-300 leading-relaxed mb-6">
              I'm a passionate cybersecurity student at the National University of Technology in Islamabad, Pakistan. 
              My journey in cybersecurity began with a curiosity about digital forensics and has evolved into a 
              specialized focus on Open Source Intelligence (OSINT) and threat detection.
            </p>
            <p className="text-green-300 leading-relaxed">
              Currently pursuing my BSc in Computer Science (2023-2027), I'm building tools that help organizations 
              detect fake news, analyze threats, and protect their digital infrastructure. My work combines machine 
              learning, data analysis, and cybersecurity principles to create practical solutions for real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ ls /skills/</div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">TECHNICAL_ARSENAL</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-bold mb-4">PROGRAMMING</h3>
              <div className="space-y-2">
                {['Python', 'SQL/NoSQL', 'JavaScript', 'Bash/Shell'].map(skill => (
                  <div key={skill} className="bg-green-400/10 border border-green-400/30 px-3 py-1 rounded text-green-300 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-bold mb-4">CYBERSECURITY</h3>
              <div className="space-y-2">
                {['OSINT', 'Threat Intelligence', 'Digital Forensics', 'Penetration Testing', 'IPS/IDS'].map(skill => (
                  <div key={skill} className="bg-green-400/10 border border-green-400/30 px-3 py-1 rounded text-green-300 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-bold mb-4">TOOLS & APIS</h3>
              <div className="space-y-2">
                {['Shodan', 'WHOIS', 'AbuseIPDB', 'HaveIBeenPwned', 'VirusTotal', 'Streamlit'].map(skill => (
                  <div key={skill} className="bg-green-400/10 border border-green-400/30 px-3 py-1 rounded text-green-300 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ git log --oneline</div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">PROJECT_PORTFOLIO</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all">
              <h3 className="text-green-400 font-bold mb-2">AI Phishing Email Detector</h3>
              <p className="text-green-300 text-sm mb-4">
                Detects suspicious patterns using DFA + ML (XGBoost, Random Forest)
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'XGBoost', 'DFA', 'ML'].map(tech => (
                  <span key={tech} className="bg-cyan-400/20 text-cyan-400 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all">
              <h3 className="text-green-400 font-bold mb-2">SQL vs NoSQL Advisor</h3>
              <p className="text-green-300 text-sm mb-4">
                Schema analysis + dashboard in Streamlit
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Streamlit', 'SQL', 'NoSQL'].map(tech => (
                  <span key={tech} className="bg-cyan-400/20 text-cyan-400 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all">
              <h3 className="text-green-400 font-bold mb-2">OSINT Dashboard</h3>
              <p className="text-green-300 text-sm mb-4">
                Uses APIs: WHOIS, Shodan, HaveIBeenPwned, AbuseIPDB, IPInfo, EmailRep
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'APIs', 'OSINT', 'Analysis'].map(tech => (
                  <span key={tech} className="bg-cyan-400/20 text-cyan-400 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative z-10 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ cat education.log</div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">EDUCATION & CERTIFICATIONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-bold mb-4">EDUCATION</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-green-300 font-semibold">BSc Computer Science</h4>
                  <p className="text-green-400 text-sm">NUTECH • 2023-2027</p>
                </div>
                <div>
                  <h4 className="text-green-300 font-semibold">Pre-Engineering</h4>
                  <p className="text-green-400 text-sm">Concordia Colleges • 2021-2023</p>
                </div>
              </div>
            </div>
            <div className="bg-black/60 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-bold mb-4">CERTIFICATIONS</h3>
              <div className="space-y-2">
                {[
                  'Google Cybersecurity Certificate',
                  'Play It Safe: Manage Security Risks', 
                  'Assets, Threats, and Vulnerabilities',
                  'Google AI Essentials',
                  'Tools of the Trade: Linux and SQL',
                  'Sound the Alarm: Detection and Response'
                ].map(cert => (
                  <div key={cert} className="bg-green-400/10 border border-green-400/30 px-3 py-2 rounded">
                    <span className="text-green-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-center mb-12">
            <div className="text-green-400 text-sm mb-2">root@cybersec:~$ cat contact.txt</div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">ESTABLISH_CONNECTION</h2>
          </div>
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-green-300 mb-6">
              Ready to collaborate on cybersecurity projects or discuss threat intelligence? 
              Let's connect and build a more secure digital world together.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:muhammadsalmanzahid@outlook.com" 
                className="block bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 px-6 py-3 rounded"
              >
                📧 muhammadsalmanzahid@outlook.com
              </a>
              <a 
                href="https://linkedin.com/in/muhammad-salman-128aa3318" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-6 py-3 rounded"
              >
                💼 LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-400 text-sm">
            © 2025 Muhammad Salman | GitHub Pages Hosting | Built with passion for cybersecurity
          </p>
        </div>
      </footer>
    </div>
  );
}
