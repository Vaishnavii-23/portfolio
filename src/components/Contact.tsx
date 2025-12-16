import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6 text-gray-900">Let's Connect</h2>
        <p className="text-xl text-gray-600 mb-12">
          Interested in collaborating or discussing opportunities? I'd love to hear from you.
        </p>
        
        <div className="mb-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span>GitHub</span>
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
