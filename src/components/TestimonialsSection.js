import React from "react";
import { Quote, Star } from "lucide-react";
import { mockData } from "../data/mockData";

const TestimonialsSection = () => {
  const testimonials = mockData.testimonials;

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-xl text-blue-700/70 max-w-3xl mx-auto">
            What clients and collaborators say about working with me
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-blue-800/80 mb-6 leading-relaxed italic group-hover:text-blue-700 transition-colors">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-600/80 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-8 border border-blue-300/30 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next AI-powered project. Whether it's a custom RAG system, 
              intelligent automation, or full-stack development with AI integration, I'm here to help 
              transform your vision into reality.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center space-x-2 px-8 py-4 backdrop-blur-lg bg-blue-600/80 hover:bg-blue-600/90 text-white rounded-full border border-blue-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl font-medium"
            >
              <span>Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;