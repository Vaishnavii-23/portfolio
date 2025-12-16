import { Download, ArrowRight } from "lucide-react";
import type { SectionId } from "../Navigation";

interface HomePageProps {
  onNavigate: (page: SectionId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-200">
              Artificial Intelligence & Data Science Undergraduate
            </div>
            
            <h1 className="text-5xl md:text-6xl text-black">
              Hi, I'm <span className="text-gray-700">Vaishnavi Ghuge</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              I build reliable backend systems and data-driven applications using strong computer science fundamentals.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate("projects")}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                href="/Vaishnavi_Ghuge_Resume.pdf"
                download="Vaishnavi_Ghuge_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-black hover:text-black transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl text-black">8.37</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
              <div>
                <div className="text-2xl text-black">3+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-2xl text-black">2026</div>
                <div className="text-sm text-gray-600">Graduating</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/60 rounded-full w-32 mx-auto"></div>
                    <div className="h-2 bg-white/40 rounded-full w-24 mx-auto"></div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-400 rounded-lg opacity-20 rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-500 rounded-lg opacity-20 -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}