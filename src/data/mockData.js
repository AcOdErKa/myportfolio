export const mockData = {
  skills: [
    {
      category: "Frontend Development",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend Development", 
      technologies: ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL"]
    },
    {
      category: "Generative AI",
      technologies: ["OpenAI GPT", "LangChain", "RAG Systems", "Vector Databases", "Prompt Engineering"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Databases",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Pinecone"]
    }
  ],

  experience: [
    {
      company: "Deloitte USI",
      role: "Senior Full Stack Developer",
      period: "2020 - Present",
      description: "Led development of enterprise-scale applications, mentored junior developers, and pioneered AI integration initiatives.",
      achievements: [
        "Led a team of 8 developers in building a mission-critical financial platform",
        "Reduced application load time by 40% through optimization strategies",
        "Implemented AI-powered analytics reducing manual reporting by 60%"
      ]
    },
    {
      company: "Accenture",
      role: "Full Stack Developer",
      period: "2017 - 2020",
      description: "Developed scalable web applications using modern tech stack, collaborated with cross-functional teams.",
      achievements: [
        "Built 15+ production applications serving 100K+ users",
        "Introduced automated testing practices increasing code quality by 35%",
        "Mentored 5 junior developers in best coding practices"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Code Assistant",
      category: "Generative AI",
      description: "Built an intelligent coding companion that helps developers write, debug, and optimize code using advanced language models.",
      technologies: ["Python", "OpenAI GPT-4", "LangChain", "React", "FastAPI"],
      features: [
        "Real-time code analysis and suggestions",
        "Automated bug detection and fixes",
        "Code documentation generation",
        "Multi-language support"
      ],
      impact: "Increased developer productivity by 45% and reduced debugging time by 60%",
      status: "Production",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "RAG-Based Document Intelligence",
      category: "Data Analytics + AI",
      description: "Enterprise solution for intelligent document processing using Retrieval Augmented Generation to extract insights from complex business documents.",
      technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "React", "PostgreSQL"],
      features: [
        "Multi-format document ingestion",
        "Semantic search across document collections",
        "Automated summary generation",
        "Interactive Q&A interface"
      ],
      impact: "Reduced document analysis time from hours to minutes, serving 10K+ documents daily",
      status: "Production",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      category: "Data Analytics + AI",
      description: "Advanced analytics platform combining traditional data science with generative AI to provide predictive insights for business decision-making.",
      technologies: ["Python", "Pandas", "Scikit-learn", "OpenAI", "D3.js", "Node.js"],
      features: [
        "Real-time data visualization",
        "AI-generated insights and recommendations",
        "Predictive modeling with 92% accuracy",
        "Natural language query interface"
      ],
      impact: "Improved business decision accuracy by 38% and reduced analysis time by 70%",
      status: "Beta",
      image: "/api/placeholder/600/400"
    }
  ],

  stats: {
    yearsExperience: "7+",
    projectsCompleted: "50+",
    clientsSatisfied: "25+",
    aiSolutionsBuilt: "15+"
  }
};