import { Code2, Brain, Server, Database, Wrench } from "lucide-react";
import { Card } from "./ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"]
  },
  {
    icon: Brain,
    title: "Core CS Fundamentals",
    skills: ["Data Structures & Algorithms", "System Design", "Object-Oriented Programming", "Computer Networks", "Operating Systems"]
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "REST APIs", "Django/Flask", "FastAPI", "GraphQL"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Database Design & Optimization"]
  },
  {
    icon: Wrench,
    title: "Tools & Cloud",
    skills: ["Git/GitHub", "Docker", "AWS", "Google Cloud Platform", "Linux", "CI/CD"]
  }
];

export function Skills() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
