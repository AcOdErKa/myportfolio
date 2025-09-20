import React from "react";
import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">Abhisek Karmakar</h3>
              <p className="text-blue-200 leading-relaxed">
                Full Stack Developer & AI Enthusiast passionate about building 
                intelligent solutions that bridge the gap between cutting-edge 
                technology and real-world impact.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="mailto:akar.bhisek@gmail.com"
                className="p-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhisek-karmakar-92644111b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-blue-200 hover:text-white transition-colors hover:-translate-y-0.5 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <div className="space-y-3 text-blue-200">
              <div>AI Development</div>
              <div>Full Stack Apps</div>
              <div>RAG Systems</div>
              <div>Data Analytics</div>
              <div>Team Leadership</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-blue-200 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <span>© {currentYear} Crafted with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by Abhisek Karmakar</span>
              </p>
              <p className="text-sm mt-1 text-blue-300">
                Building the future, one intelligent solution at a time.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-6 py-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-white"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Fun Quote */}
        <div className="mt-8 text-center">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-blue-100 italic">
              "I can talk endlessly about how Gen AI will change the way we build software in the next 5 years."
            </p>
            <p className="text-blue-300 text-sm mt-2">- Ready for that conversation? Let's connect! ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;