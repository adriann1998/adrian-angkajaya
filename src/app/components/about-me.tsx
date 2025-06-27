"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Code,
  User
} from 'lucide-react';

const totalProjects = 20
const totalYoe = 4;

export default function AboutMe() {

  const [projectCounter, setProjectCounter] = useState<number>(0);
  const [yoeCounter, setYoeCounter] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const aboutSectionRef = useRef(null);

  // only run animation when 70% of card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.7 } // Trigger when 70% of component is visible
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Project counts animation
  useEffect(() => {
    if (isVisible && projectCounter < totalProjects) {
      const timer = setTimeout(() => {
        setProjectCounter(prev => prev + 1);
      }, 100); // Adjust speed here (100ms per increment)
      return () => clearTimeout(timer);
    }
  }, [isVisible, projectCounter]);

  // yoe counts animation
  useEffect(() => {
    if (isVisible && yoeCounter < totalYoe) {
      const timer = setTimeout(() => {
        setYoeCounter(prev => prev + 1);
      }, 300); // Adjust speed here (500ms per increment)
      return () => clearTimeout(timer);
    }
  }, [isVisible, yoeCounter,]);

  return (
    <div className="container mx-auto px-6" ref={aboutSectionRef}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hey there! I'm a full-stack developer with four years under my belt, and I absolutely love building solutions that make
            a real difference for businesses. I've successfully delivered over {totalProjects} projects,
            consistently hitting deadlines and staying within budget – I'm all about moving fast and getting things done right!
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            When I'm not immersed in code, you'll find me staying active with fitness,
            exploring the latest tech trends to keep my skills on point,
            or relaxing with documentaries that really make me think and expand my understanding of the world.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">{projectCounter}{projectCounter === totalProjects ? '+' : ''}</h3>
                <p className="text-gray-300">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">{yoeCounter}{yoeCounter === totalYoe ? '+' : ''}</h3>
                <p className="text-gray-300">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative">
          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <User className="w-32 h-32 text-white opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
            <Code className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
