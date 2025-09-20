import React from "react";
import { Mail, Linkedin, Github, MapPin, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-blue-50/50 to-white/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-700/70 max-w-3xl mx-auto">
            Ready to collaborate on AI-driven solutions? Let's discuss your vision and build something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-300/30">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Email</div>
                    <a
                      href="mailto:akar.bhisek@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                    >
                      akar.bhisek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-300/30">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/abhisek-karmakar-92644111b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-300/30">
                    <Github className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">GitHub</div>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                    >
                      View my projects
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-300/30">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Location</div>
                    <span className="text-blue-700 text-lg">Available for remote collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What I Can Help With */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-8 border border-blue-300/30 shadow-xl">
            <h4 className="text-2xl font-bold text-blue-900 mb-6">What I Can Help With</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-blue-800 text-lg">AI-powered application development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-blue-800 text-lg">RAG systems and document intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-blue-800 text-lg">Full-stack development with AI integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-blue-800 text-lg">Data analytics solutions using Gen AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-blue-800 text-lg">Team mentorship and technical leadership</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <p className="text-blue-800 mb-4 italic">
                "I can talk endlessly about how Gen AI will change the way we build software in the next 5 years."
              </p>
              <p className="text-blue-700 font-medium">
                Ready for that conversation? Let's connect! ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;