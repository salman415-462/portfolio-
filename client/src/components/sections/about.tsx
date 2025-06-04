export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4">Crafting Digital Solutions with Security in Mind</h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              As a dedicated Computer Science student, I'm passionate about the intersection of technology and cybersecurity. 
              My journey began with curiosity about how systems work and evolved into a deep fascination with protecting them 
              from emerging threats.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in Threat Intelligence, leveraging machine learning and open-source intelligence (OSINT) 
              to identify and mitigate cybersecurity risks. My projects range from AI-powered phishing detection 
              systems to comprehensive OSINT dashboards that help security professionals make informed decisions.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding or researching the latest security threats, you'll find me contributing to 
              open-source projects, participating in CTF competitions, or sharing knowledge with the cybersecurity community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-sm text-slate-500">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-sm text-slate-500">Years Learning</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative" data-aos="fade-left">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Security themed code snippet */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-primary"># Threat Intelligence Analysis</div>
                  <div className="text-slate-600 dark:text-slate-400">import pandas as pd</div>
                  <div className="text-slate-600 dark:text-slate-400">from sklearn.ensemble import XGBoostClassifier</div>
                  <div className="text-slate-600 dark:text-slate-400">import threat_intel as ti</div>
                  <div className="text-green-500"># Detecting malicious patterns...</div>
                  <div className="text-slate-600 dark:text-slate-400">model = XGBoostClassifier()</div>
                  <div className="text-slate-600 dark:text-slate-400">threat_score = model.predict(data)</div>
                  <div className="text-purple-500"># Security first, always! 🔒</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
