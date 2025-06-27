import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download } from 'lucide-react';

const texts: string[] = ['Full-Stack Developer', 'React Specialist', 'Node.js Expert', 'UI/UX Enthusiast']

interface HeroProps {
  scrollToSection: (section: string) => void;
}

function Hero({
  scrollToSection,
}: HeroProps) {
  
  const [scrollY, setScrollY] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [textIndex, setTextIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 20 : 100;
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentFullText.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  // downloads file
  const fetchAndDownloadResume = async () => {
    setLoading(true);
    try {
      const response = await fetch('/documents/resume.pdf');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'Adrian-Angkajaya.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      // setStatus(`❌ Error downloading ${filename}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Adrian Angkajaya
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up animation-delay-200">
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and scalable backend solutions.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              onClick={fetchAndDownloadResume}
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold text-black border-gray-600 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300"
            >
              Download CV{' '}<Download className="w-8 h-8 text-black" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
}

export default Hero;