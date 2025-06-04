import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "HOME", cmd: "ls", icon: "fas fa-home" },
  { href: "#about", label: "ABOUT", cmd: "cat", icon: "fas fa-user-secret" },
  { href: "#skills", label: "SKILLS", cmd: "grep", icon: "fas fa-terminal" },
  { href: "#projects", label: "PROJECTS", cmd: "git", icon: "fas fa-code-branch" },
  { href: "#education", label: "EDUCATION", cmd: "sudo", icon: "fas fa-graduation-cap" },
  { href: "#contact", label: "CONTACT", cmd: "ssh", icon: "fas fa-network-wired" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      setScrolled(window.scrollY > 50);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-hacker' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hacker Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-xl font-black cyber-font text-matrix glow-green hover:glow-blue transition-all duration-300 transform hover:scale-110"
            >
              [MS_CYBER]
            </button>
          </div>

          {/* Desktop Terminal Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded hacker-font text-sm transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === link.href.substring(1)
                      ? "text-black bg-green-400 glow-green"
                      : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                  }`}
                >
                  <i className={`${link.icon} mr-2`}></i>
                  <span className="group-hover:hidden">{link.label}</span>
                  <span className="hidden group-hover:inline">{link.cmd}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Status */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-green-400 text-xs hacker-font">
              STATUS: ONLINE
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Terminal Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-400/20">
          <div className="px-4 pt-4 pb-4 space-y-1">
            <div className="text-green-400 text-xs hacker-font mb-3">root@cybersec:~$ ls -la</div>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center w-full text-left px-3 py-2 rounded hacker-font text-sm transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-black bg-green-400"
                    : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                }`}
              >
                <i className={`${link.icon} mr-3 w-4`}></i>
                <span className="mr-2">{link.cmd}</span>
                <span className="text-xs opacity-60">{link.label.toLowerCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
