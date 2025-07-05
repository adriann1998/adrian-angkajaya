import React from 'react';
import {
  Code,
  Server,
  Cloud,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const skills = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend",
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Shadcn UI"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend",
    items: ["Node.js & Express", "GraphQL", "MySQL", "DynamoDB"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    items: ["AWS", "GitHub Actions", "CI/CD Pipelines", "Linux Server"]
  }
];

function Skills() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group"
          >
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <CardTitle className="text-3xl text-white">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-xl text-gray-300 space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;