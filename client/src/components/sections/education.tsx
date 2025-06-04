const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Expected 2024",
    status: "In Progress",
    statusColor: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
    icon: "fas fa-shield-alt",
    iconColor: "bg-red-500/20 text-red-500"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    status: "Certified",
    statusColor: "bg-green-500/20 text-green-600 dark:text-green-400",
    icon: "fas fa-cloud",
    iconColor: "bg-blue-500/20 text-blue-500"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    year: "2023",
    status: "Certified",
    statusColor: "bg-green-500/20 text-green-600 dark:text-green-400",
    icon: "fas fa-robot",
    iconColor: "bg-purple-500/20 text-purple-500"
  },
  {
    title: "OSINT Fundamentals",
    issuer: "SANS",
    year: "2023",
    status: "Certified",
    statusColor: "bg-green-500/20 text-green-600 dark:text-green-400",
    icon: "fas fa-search",
    iconColor: "bg-green-500/20 text-green-500"
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    year: "2022",
    status: "Certified",
    statusColor: "bg-green-500/20 text-green-600 dark:text-green-400",
    icon: "fas fa-bug",
    iconColor: "bg-orange-500/20 text-orange-500"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" data-aos="fade-right">Education</h3>
            
            <div className="glass rounded-2xl p-6" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-medium mb-2">University Name • 2021 - 2025</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Specializing in Cybersecurity and Machine Learning. Relevant coursework includes 
                    Data Structures, Algorithms, Network Security, Database Systems, and Artificial Intelligence.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">GPA: 3.8/4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" data-aos="fade-left">Certifications</h3>
            
            {/* Certification Items */}
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={cert.title} className="glass rounded-xl p-4" data-aos="fade-left" data-aos-delay={100 * (index + 1)}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${cert.iconColor} rounded-lg flex items-center justify-center`}>
                      <i className={`${cert.icon} text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{cert.title}</h4>
                      <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
                    </div>
                    <span className={`px-2 py-1 ${cert.statusColor} rounded text-xs`}>{cert.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
