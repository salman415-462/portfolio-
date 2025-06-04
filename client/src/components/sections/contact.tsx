const contactMethods = [
  {
    title: "Email",
    value: "muhammad.salman@example.com",
    href: "mailto:muhammad.salman@example.com",
    icon: "fas fa-envelope",
    gradient: "from-primary to-purple-600"
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/muhammad-salman",
    href: "https://linkedin.com/in/muhammad-salman",
    icon: "fab fa-linkedin",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "GitHub",
    value: "github.com/muhammad-salman",
    href: "https://github.com/muhammad-salman",
    icon: "fab fa-github",
    gradient: "from-gray-700 to-gray-900"
  }
];

const opportunities = [
  "Cybersecurity internships and entry-level positions",
  "Machine learning and AI project collaborations",
  "Open source contributions and community projects",
  "Speaking opportunities and knowledge sharing"
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Interested in collaboration, opportunities, or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="glass rounded-2xl p-6">
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center`}>
                        <i className={`${method.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <a 
                          href={method.href} 
                          className="text-primary hover:text-primary/80 transition-colors"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Message */}
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-6">Quick Message</h3>
              
              <div className="glass rounded-2xl p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  I'm always interested in discussing new opportunities, 
                  collaborating on interesting projects, or just connecting 
                  with fellow tech enthusiasts and security professionals.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold mb-3">What I'm looking for:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <i className="fas fa-check text-green-500"></i>
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="mailto:muhammad.salman@example.com" 
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
