import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LawBot – Backend Legal Awareness System",
    problem: "Designed a backend system to process and retrieve legal information, making legal awareness accessible through API-driven services.",
    techStack: ["Python", "REST APIs", "FastAPI", "PostgreSQL"],
    highlights: [
      "Built modular backend architecture with clear separation of concerns",
      "Implemented reliability-focused design with error handling and logging"
    ],
    github: "https://github.com/Vaishnavii-23/LawBot-AI-Powered-Legal-Assistant-Lawyer-Booking-Platform",
    type: "Backend System"
  },
  {
    title: "SafeRoute Pune – Women Safety Mapping Platform",
    problem: "Created a safety-focused route mapping solution using crowd-sourced data and Google Maps integration to help women navigate safer routes in Pune.",
    techStack: ["Google Maps API", "Node.js", "MongoDB", "React", "Express"],
    highlights: [
      "Integrated Google Maps Platform APIs for data-driven route optimization",
      "Awarded 2nd Prize globally at Google Maps Platform Hackathon"
    ],
    github: "https://ayushfande2003.github.io/women-safety-map/",
    award: "🏆 2nd Prize – Google Maps Platform Hackathon (Global)",
    type: "Google Maps API inetgrated Frontend Website"
  },
  {
    title: "PG Founder – PG Accommodation Finder",
    problem: "Developed a backend-driven web application to help students find suitable PG accommodations with structured search and filtering capabilities.",
    techStack: ["HTML","CSS", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    highlights: [
      "Designed database schema for efficient search and structured data handling",
      "Focus on usability, scalability, and clean code architecture"
    ],
    github: "https://github.com/Vaishnavii-23/Pg-founder",
    type: "Web Application"
  }
];

export function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-black mb-4">Projects</h1>
          <div className="w-20 h-1 bg-black rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Building scalable applications with focus on AI,FULL-STACK Integrated systems, APIs, and data-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-gray-400 transition-all hover:shadow-md"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl text-black">{project.title}</h2>
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                    {project.type}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black border border-gray-300 rounded-lg hover:border-black transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">View Code</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Award Badge */}
              {project.award && (
                <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded-lg">
                  <p className="text-gray-800 text-sm">{project.award}</p>
                </div>
              )}

              {/* Problem Statement */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.problem}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-sm text-gray-500 mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-gray-700">
                      <span className="text-gray-700 mr-3 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}