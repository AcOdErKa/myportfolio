import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Glass Card Container */}
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-light text-blue-900 mb-4 tracking-tight">
                Abhisek Karmakar
              </h1>
              <div className="text-xl md:text-2xl text-blue-700 font-medium">
                Full Stack Developer | Gen AI Enthusiast | Tech Innovator
              </div>
            </div>

            <p className="text-lg md:text-xl text-blue-800/80 max-w-3xl mx-auto leading-relaxed">
              From building robust enterprise apps to crafting intelligent AI-driven solutions — 
              I thrive on transforming ideas into impact.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:akar.bhisek@gmail.com"
                className="p-3 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-300/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-blue-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhisek-karmakar-92644111b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-300/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
              </a>
              <a
                href="#"
                className="p-3 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-300/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-blue-700" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 px-8 py-4 backdrop-blur-lg bg-blue-600/80 hover:bg-blue-600/90 text-white rounded-full border border-blue-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              <span className="font-medium">Explore My Journey</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;