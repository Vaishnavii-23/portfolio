import { Briefcase, Award, GitBranch } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Corizo",
    location: "Remote",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    description: [
      "Worked with large datasets using Python, Pandas, and NumPy for data cleaning and transformation",
      "Built ETL pipelines to automate data preprocessing and feature engineering workflows",
      "Improved data quality and model performance through systematic data analysis and validation"
    ]
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    period: "2025",
    type: "Open Source",
    description: [
      "Contributed code improvements, bug fixes, and feature enhancements to multiple repositories",
      "Enhanced project documentation to improve developer onboarding experience",
      "Collaborated with maintainers using Git, GitHub, and collaborative development workflows"
    ]
  }
];

const achievements = [
  {
    title: "2nd Prize – Google Maps Platform Hackathon",
    description: "Global recognition for SafeRoute Pune, a women safety mapping platform",
    year: "2025",
    icon: Award
  },
  {
    title: "Selected Contributor – GirlScript Summer of Code",
    description: "Selected for open source contributions and collaborative development",
    year: "2025",
    icon: GitBranch
  }
];

export function ExperiencePage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-black mb-4">Experience</h1>
          <div className="w-20 h-1 bg-black rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-gray-700" />
            <h2 className="text-2xl text-black">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl text-black mb-1">{exp.title}</h3>
                    <p className="text-gray-700 mb-1">{exp.company} – {exp.location}</p>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                    {exp.type}
                  </span>
                </div>

                <div className="border-l-2 border-gray-300 pl-6 mt-6 space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1">▸</span>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-gray-700" />
            <h2 className="text-2xl text-black">Achievements & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-100 rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{achievement.year}</div>
                      <h3 className="text-lg text-black mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-700">{achievement.description}</p>
                    </div>
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