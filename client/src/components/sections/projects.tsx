import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Phishing Email Detector",
    description: "Advanced machine learning system using XGBoost and Deterministic Finite Automata (DFA) to detect phishing emails with 96% accuracy. Implements natural language processing and URL analysis for comprehensive threat detection.",
    icon: "fas fa-envelope-open-text",
    iconGradient: "from-red-500 to-orange-500",
    tech: ["Python", "XGBoost", "NLP", "Scikit-learn"],
    techColors: {
      "Python": "bg-blue-500/20 text-blue-600 dark:text-blue-400",
      "XGBoost": "bg-orange-500/20 text-orange-600 dark:text-orange-400",
      "NLP": "bg-green-500/20 text-green-600 dark:text-green-400",
      "Scikit-learn": "bg-purple-500/20 text-purple-600 dark:text-purple-400"
    }
  },
  {
    title: "Database Advisor App",
    description: "Intelligent recommendation system that analyzes project requirements and suggests optimal database solutions (SQL vs NoSQL). Features interactive decision trees, performance comparisons, and deployment guides.",
    icon: "fas fa-database",
    iconGradient: "from-green-500 to-teal-500",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    techColors: {
      "JavaScript": "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
      "React": "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
      "Node.js": "bg-green-500/20 text-green-600 dark:text-green-400",
      "MongoDB": "bg-blue-500/20 text-blue-600 dark:text-blue-400"
    }
  },
  {
    title: "OSINT Dashboard",
    description: "Comprehensive Open Source Intelligence platform integrating multiple APIs (WHOIS, Shodan, AbuseIPDB, VirusTotal) for threat hunting and digital forensics. Features real-time data aggregation and visual threat analysis.",
    icon: "fas fa-search",
    iconGradient: "from-purple-500 to-pink-500",
    tech: ["Python", "Flask", "JavaScript", "APIs"],
    techColors: {
      "Python": "bg-blue-500/20 text-blue-600 dark:text-blue-400",
      "Flask": "bg-red-500/20 text-red-600 dark:text-red-400",
      "JavaScript": "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
      "APIs": "bg-purple-500/20 text-purple-600 dark:text-purple-400"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Innovative solutions at the intersection of cybersecurity, machine learning, and software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card glass rounded-2xl p-6 group" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.iconGradient} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className={`px-2 py-1 ${project.techColors[tech]} rounded text-xs`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex space-x-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-2 rounded-lg transition-colors text-sm">
                  <i className="fab fa-github mr-2"></i>View Code
                </Button>
                <Button variant="ghost" className="px-4 py-2 glass hover:bg-white/20 dark:hover:bg-white/10 rounded-lg transition-colors text-sm">
                  <i className="fas fa-external-link-alt"></i>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button variant="ghost" className="inline-flex items-center px-6 py-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
