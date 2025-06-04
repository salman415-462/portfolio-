const socialLinks = [
  {
    icon: "fab fa-github",
    href: "https://github.com/muhammad-salman",
    hoverColor: "hover:bg-gray-700"
  },
  {
    icon: "fab fa-linkedin",
    href: "https://linkedin.com/in/muhammad-salman",
    hoverColor: "hover:bg-blue-500"
  },
  {
    icon: "fab fa-twitter",
    href: "https://twitter.com/muhammad-salman",
    hoverColor: "hover:bg-cyan-500"
  },
  {
    icon: "fas fa-envelope",
    href: "mailto:muhammad.salman@example.com",
    hoverColor: "hover:bg-red-500"
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gradient">Muhammad Salman</h3>
            <p className="text-slate-400 mt-2">CS Student & Threat Intelligence Learner</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8" data-aos="fade-up" data-aos-delay="100">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`w-12 h-12 bg-slate-800 ${link.hoverColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-slate-700" data-aos="fade-up" data-aos-delay="200">
            <p className="text-slate-400 text-sm">
              © 2024 Muhammad Salman. Built with passion for cybersecurity and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
