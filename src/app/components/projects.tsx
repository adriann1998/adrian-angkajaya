import React, { ReactElement } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  ExternalLink,
  TrendingUp,
  MessageCircle,
  Smartphone,
  CalendarCheck,
} from 'lucide-react';

interface Project {
  icon: ReactElement;
  title: string
  demoLink: string
  githubLink?: string;
  description: string
  tech: string[]
  gradient: string
  inProgress: boolean
  progres?: number
}

const projects: Project[] = [
  {
    icon: <CalendarCheck className="w-12 h-12" />,
    title: "Reservation System",
    demoLink: "https://www.taxibox.com.au/booking/",
    description: "Complete booking platform featuring secure user authentication, seamless payment processing, and real-time availability tracking. Built with React frontend and Node.js + GraphQL backend to deliver a smooth end-to-end reservation experience.",
    tech: ["React", "Node.js", "GraphQL", "Zip"],
    gradient: "from-purple-600 to-blue-600",
    inProgress: false,
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Analytics Dashboard",
    demoLink: "https://www.taxibox.com.au/booking/",
    description: "Real-time analytics dashboard built with Next.js and D3.js. Features interactive charts, data visualization, and exportable reports.",
    tech: ["TBD"],
    gradient: "from-green-600 to-teal-600",
    inProgress: true,
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: "Real-time Chat App",
    demoLink: "https://www.taxibox.com.au/booking/",
    description: "WebSocket-powered chat application with React and Socket.io. Features include private messaging, file sharing, and emoji reactions.",
    tech: ["TBD"],
    gradient: "from-red-600 to-pink-600",
    inProgress: true,
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Task Management PWA",
    demoLink: "https://www.taxibox.com.au/booking/",
    description: "Progressive Web App for task management with offline capabilities. Built with React, features drag-and-drop, notifications, and team collaboration.",
    tech: ["TBD"],
    gradient: "from-indigo-600 to-purple-600",
    inProgress: true,
  }
];

function Projects() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-800/30 border-gray-700 backdrop-blur-sm overflow-hidden hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
          >
            <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className={`text-white opacity-${project.inProgress ? 50 : 80} group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              {project.inProgress ? (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-white mb-2">Coming Soon</div>
                    <div className="text-lg text-gray-300">Currently in development</div>
                    <div className="flex items-center justify-center gap-2 text-purple-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center space-y-4 flex gap-2">
                    <Button onClick={() => window.open(project.demoLink, '_blank')} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    {project.githubLink && (
                      <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <CardHeader>
              <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
              <CardDescription className="text-gray-300 text-xl leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-purple-600/20 text-purple-300 text-md border-purple-600/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;