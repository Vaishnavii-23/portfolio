import { Trophy, Award } from "lucide-react";
import { Card } from "./ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "Google Maps Platform Hackathon",
    description: "2nd Prize (Global) – SafeRoute Pune",
    highlight: "Recognized for technical excellence and social impact among global participants"
  },
  {
    icon: Award,
    title: "GirlScript Summer of Code",
    description: "Open Source Contributor",
    highlight: "Contributed to multiple open-source projects, focusing on backend improvements and bug fixes"
  }
];

export function Achievements() {
  return (
    <div className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-gray-900 text-center">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border border-gray-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-blue-600 mb-2">{achievement.description}</p>
                    <p className="text-gray-600 text-sm">{achievement.highlight}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
