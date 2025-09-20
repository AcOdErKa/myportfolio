import React from "react";
import { mockData } from "../data/mockData";

const SkillsSection = () => {
  const skills = mockData.skills;

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-blue-50/50 to-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-xl text-blue-700/70 max-w-3xl mx-auto">
            A comprehensive toolkit spanning from traditional full-stack development to cutting-edge AI technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="group backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {skillCategory.category}
                </h3>
                <div className="w-12 h-1 bg-blue-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>

              <div className="space-y-3">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div
                    key={tech}
                    className="flex items-center space-x-3 group/tech"
                    style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/tech:bg-blue-600 transition-colors group-hover/tech:scale-125 duration-200"></div>
                    <span className="text-blue-800/80 group-hover/tech:text-blue-700 transition-colors font-medium">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* AI Focus Callout */}
        <div className="mt-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-8 border border-blue-300/30 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                🌐 Generative AI Journey
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-blue-800">Designed AI-powered developer assistants to speed up coding and debugging</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-blue-800">Built custom RAG (Retrieval Augmented Generation) pipelines for enterprise insights</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-blue-800">Researched and prototyped AI-first applications blending LLMs with business logic</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-blue-800">Advocated for responsible AI adoption at team and organizational levels</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-blue-700 font-medium italic">
                  "I'm not just using AI — I'm making it practical, scalable, and impactful."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;