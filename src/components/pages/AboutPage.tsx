import {
  GraduationCap,
  Code,
  Database,
  Server,
  Wrench,
  Brain,
  LayoutDashboard,
  BarChart3,
  Cloud
} from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "JavaScript", "SQL"]
  },
  {
    category: "Computer Science Fundamentals",
    icon: Brain,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Software Development Life Cycle (SDLC)",
      "Debugging & Problem Solving",
      "Basic System Design Concepts",
      "Operating Systems (Basics)",
      "Database Management Systems (DBMS)"
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      "RESTful API Design & Development",
      "FastAPI",
      "Backend Service Architecture",
      "Authentication & Authorization (Basics)",
      "API Integration",
      "Server-side Validation",
      "Error Handling & Logging"
    ]
  },
  {
    category: "Frontend Development",
    icon: LayoutDashboard,
    note: "Intentionally lean to reflect backend-focused profile",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive Web Design",
      "Basic UI/UX Principles"
    ]
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "CRUD Operations",
      "Database Schema Design (Basics)"
    ]
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    skills: [
      "Pandas",
      "NumPy",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization (Power BI, Tableau)"
    ]
  },
  {
    category: "Cloud & DevOps (Foundational)",
    icon: Cloud,
    skills: [
      "Microsoft Azure (Basics)",
      "Docker (Containerization Basics)",
      "Cloud Storage Concepts"
    ]
  },
  {
    category: "Tools & Development Practices",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Version Control & Branching",
      "Code Reviews",
      "Modular Code Design",
      "Technical Documentation"
    ]
  }
];

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-black mb-4">About Me</h1>
          <div className="w-20 h-1 bg-black rounded-full"></div>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a Computer Science undergraduate specializing in Artificial Intelligence and Data Science, 
            with a strong foundation in core CS fundamentals including data structures, algorithms, and 
            object-oriented programming. My focus is on backend development and building scalable, 
            data-driven systems that solve real-world problems. I'm passionate about writing clean, 
            maintainable code and designing reliable software architectures. Currently seeking internship 
            opportunities in Software Engineering, Backend Development, Data Science, and Applied Science roles.
          </p>
        </div>

        {/* Education */}
        <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-gray-700" />
            <h2 className="text-2xl text-black">Education</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl text-black mb-2">
              B.Tech – Artificial Intelligence & Data Science
            </h3>
            <p className="text-gray-700 mb-2">Maharashtra Institute of Technology</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                CGPA: 8.37
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                2022 – Present
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl text-black mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg text-black">{category.category}</h3>
                      {category.note && (
                        <p className="text-xs text-gray-500 mt-1">{category.note}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}