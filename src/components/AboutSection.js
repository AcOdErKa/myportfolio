import React from "react";
import { Brain, Code2, Rocket, Users } from "lucide-react";
import { mockData } from "../data/mockData";

const AboutSection = () => {
  const stats = mockData.stats;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">My Journey</h3>
              <div className="space-y-4 text-blue-800/80 leading-relaxed">
                <p>
                  I'm Abhisek — a Full Stack Developer turned Generative AI explorer with 7+ years 
                  of hands-on experience in building scalable, enterprise-grade applications.
                </p>
                <p>
                  My journey started with <span className="font-semibold text-blue-700">Accenture and Deloitte USI</span>, 
                  where I led and delivered mission-critical projects across Node.js, Python, and cloud platforms. 
                  But I wasn't just coding features — I was constantly chasing the <em>"what's next"</em>.
                </p>
                <p>
                  That curiosity naturally pushed me into the world of <span className="font-semibold text-blue-700">Generative AI</span> — 
                  where technology doesn't just automate, but <strong>creates, reasons, and assists</strong>. 
                  Today, I'm blending my strong foundation in full-stack engineering with cutting-edge AI 
                  to build solutions that feel less like tools and more like teammates.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="backdrop-blur-xl bg-blue-500/10 rounded-3xl p-8 border border-blue-300/30 shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">My Philosophy</h3>
              <div className="space-y-3 text-blue-800/80">
                <p className="flex items-start space-x-3">
                  <Code2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Great code is like great music — structured, creative, and timeless.</span>
                </p>
                <p className="flex items-start space-x-3">
                  <Rocket className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><em>"Tech should not only solve problems, it should surprise you with possibilities."</em></span>
                </p>
                <p className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>I believe Gen AI will fundamentally change how we build software in the next 5 years.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-xl bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stats.yearsExperience}</div>
                <div className="text-blue-600 font-medium">Years Experience</div>
              </div>
              <div className="backdrop-blur-xl bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stats.projectsCompleted}</div>
                <div className="text-blue-600 font-medium">Projects Completed</div>
              </div>
              <div className="backdrop-blur-xl bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stats.clientsSatisfied}</div>
                <div className="text-blue-600 font-medium">Clients Satisfied</div>
              </div>
              <div className="backdrop-blur-xl bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stats.aiSolutionsBuilt}</div>
                <div className="text-blue-600 font-medium">AI Solutions Built</div>
              </div>
            </div>

            {/* What I Do */}
            <div className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-800">Full Stack Leadership</div>
                    <div className="text-blue-700/80 text-sm">7+ years in Node.js, Python, and cloud-native development</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-800">Generative AI Development</div>
                    <div className="text-blue-700/80 text-sm">Building RAG systems, intelligent assistants, and AI-driven applications</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-800">End-to-End Problem Solving</div>
                    <div className="text-blue-700/80 text-sm">From ideation to production deployment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-800">Mentorship & Team Growth</div>
                    <div className="text-blue-700/80 text-sm">Guiding engineers to build with speed, quality, and creativity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;