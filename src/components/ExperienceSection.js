import React from "react";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { mockData } from "../data/mockData";

const ExperienceSection = () => {
  const experience = mockData.experience;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            Experience Timeline
          </h2>
          <p className="text-xl text-blue-700/70 max-w-3xl mx-auto">
            My professional journey from full-stack development to AI innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-500 rounded-full hidden md:block"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-blue-700 font-semibold">{exp.company}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-blue-800/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Key Achievements</span>
                      </div>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start space-x-3 group/achievement"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover/achievement:bg-blue-600 transition-colors group-hover/achievement:scale-125 duration-200"></div>
                          <span className="text-blue-700/90 text-sm leading-relaxed group-hover/achievement:text-blue-600 transition-colors">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-8 border border-blue-300/30 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Current Focus: AI Solutions Architecture
              </h3>
              <p className="text-blue-800 text-lg leading-relaxed max-w-4xl mx-auto">
                Currently transitioning into an <strong>AI Solutions Architect</strong> role, 
                focusing on designing and implementing scalable AI systems that bridge the gap 
                between cutting-edge research and practical business applications. Working on 
                different solutions based on <strong>data analytics using Gen AI</strong> to 
                help enterprises make smarter, faster decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;