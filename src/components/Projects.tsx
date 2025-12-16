import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LawBot",
    problem: "Making legal information accessible through an intelligent, backend-driven conversational system",
    tech: ["Python", "FastAPI", "NLP", "PostgreSQL", "REST APIs", "Docker"],
    highlights: [
      "Engineered a backend architecture for processing and retrieving legal documents with optimized query performance",
      "Implemented natural language processing pipelines to parse user queries and match relevant legal provisions",
      "Designed RESTful API endpoints with comprehensive error handling and request validation for reliable client integration"
    ]
  },
  {
    title: "SafeRoute Pune",
    problem: "Empowering women's safety through crowd-sourced data and intelligent route mapping",
    tech: ["Google Maps API", "Node.js", "MongoDB", "React", "Express", "Real-time Data"],
    highlights: [
      "Built backend services integrating Google Maps Platform APIs for route optimization based on safety metrics",
      "Developed data aggregation system to process crowd-sourced safety reports and generate heatmaps",
      "Secured 2nd Prize globally at Google Maps Platform Hackathon for technical implementation and social impact"
    ]
  },
  {
    title: "Analytics Dashboard Platform",
    problem: "Transforming complex datasets into actionable insights through interactive visualization",
    tech: ["React", "D3.js", "Python", "Pandas", "FastAPI", "PostgreSQL"],
    highlights: [
      "Designed and optimized database schemas for efficient storage and retrieval of time-series analytics data",
      "Built RESTful API layer with data transformation logic to serve aggregated metrics to frontend components",
      "Implemented dynamic filtering and real-time chart updates for seamless user experience with large datasets"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900 text-center">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-white border border-gray-200 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl text-gray-900">{project.title}</h3>
                <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
              <p className="text-gray-600 mb-4 italic">{project.problem}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-3">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
