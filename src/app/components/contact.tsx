import React from 'react';
import { 
  Github, 
  Linkedin,
  Mail, 
  Phone, 
  MapPin,
} from 'lucide-react';
import { 
  Card, 
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function Contact() {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
              <Mail className="w-6 h-6" onClick={() => window.open(`mailto:angkajaya98@gmail.com?subject=Exciting Full Stack Opportunity&body=Hey Adrian,`)} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">angkajaya98@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
              <Phone className="w-6 h-6" onClick={() => window.open('tel:0411180990')} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+61 411 180 990</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-300">Melbourne, Australia</p>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-8">
            <Button
              variant="default"
              size="icon"
              className="w-12 h-12 border-gray-600 hover:bg-gray-800/50 hover:border-purple-500 transition-all duration-300"
              asChild
            >
              <a href={"https://github.com/adriann1998"} target="_blank">
                <Github className="w-5 h-5 text-red cursor-pointer" />
              </a>
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-12 h-12 border-gray-600 hover:bg-gray-800/50 hover:border-purple-500 transition-all duration-300"
              asChild
            >
              <a href={"https://www.linkedin.com/in/adrian-angkajaya-aa7641194/"} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 cursor-pointer" />
              </a>
            </Button>
          </div>
        </div>
        
        <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors resize-none"
              />
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  // Handle form submission logic here
                  alert('Message sent! (This is a demo)');
                }}
                className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contact;