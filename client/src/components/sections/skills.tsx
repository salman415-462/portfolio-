const skillCategories = [
  {
    title: "Programming",
    icon: "fas fa-code",
    iconColor: "text-primary",
    skills: [
      { name: "Python", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" },
      { name: "Node.js", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
      { name: "Java", color: "bg-red-500/20 text-red-600 dark:text-red-400" },
      { name: "C++", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
      { name: "SQL", color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
    ]
  },
  {
    title: "Cybersecurity",
    icon: "fas fa-shield-alt",
    iconColor: "text-emerald-500",
    skills: [
      { name: "Threat Intelligence", color: "bg-red-500/20 text-red-600 dark:text-red-400" },
      { name: "OSINT", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
      { name: "Malware Analysis", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
      { name: "Penetration Testing", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "SIEM", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
    ]
  },
  {
    title: "Machine Learning",
    icon: "fas fa-brain",
    iconColor: "text-purple-500",
    skills: [
      { name: "XGBoost", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
      { name: "Scikit-learn", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "TensorFlow", color: "bg-red-500/20 text-red-600 dark:text-red-400" },
      { name: "Pandas", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
      { name: "NumPy", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
    ]
  },
  {
    title: "Web Technologies",
    icon: "fas fa-globe",
    iconColor: "text-cyan-500",
    skills: [
      { name: "HTML5", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
      { name: "CSS3", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "React", color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
      { name: "Express.js", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
      { name: "REST APIs", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
    ]
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    iconColor: "text-green-500",
    skills: [
      { name: "PostgreSQL", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "MongoDB", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
      { name: "MySQL", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
      { name: "Redis", color: "bg-red-500/20 text-red-600 dark:text-red-400" },
      { name: "SQLite", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "fas fa-tools",
    iconColor: "text-yellow-500",
    skills: [
      { name: "Git", color: "bg-gray-500/20 text-gray-600 dark:text-gray-400" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
      { name: "AWS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
      { name: "Linux", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
      { name: "Wireshark", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity, software development, and threat intelligence
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="glass rounded-2xl p-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-2xl ${category.iconColor} mr-3`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag px-3 py-1 ${skill.color} rounded-full text-sm`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
