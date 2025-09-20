import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { mockData } from "../data/mockData";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = mockData.projects;

  const getStatusIcon = (status) => {
    switch (status) {
      case "Production":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Beta":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 border-green-200";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            AI Projects & Solutions
          </h2>
          <p className="text-xl text-blue-700/70 max-w-3xl mx-auto">
            Transforming ideas into intelligent solutions that make a real-world impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group backdrop-blur-xl bg-white/30 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-blue-300/50">AI</div>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 rounded-full border backdrop-blur-lg bg-white/80 text-xs font-medium">
                  {getStatusIcon(project.status)}
                  <span className={`${getStatusColor(project.status)} px-2 py-1 rounded-full border`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-blue-800/70 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-500/10 text-blue-700 px-2 py-1 rounded-lg border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-blue-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group/btn">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-blue-100/50 rounded-lg transition-colors">
                      <Github className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-blue-100/50 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl border border-white/40 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                        {getStatusIcon(selectedProject.status)}
                        <span>{selectedProject.status}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-blue-600 hover:text-blue-800 text-2xl font-light"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className="text-blue-800/80 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-blue-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-700 px-3 py-2 rounded-lg border border-blue-200/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">Impact</h4>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl border border-green-200/50">
                    <p className="text-green-800 font-medium">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium">
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-blue-300 hover:bg-blue-50 text-blue-700 rounded-xl transition-colors font-medium">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;