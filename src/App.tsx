import { MutableRefObject, useRef, useState } from "react";
import { Navigation, SectionId } from "./components/Navigation";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ExperiencePage } from "./components/pages/ExperiencePage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: Record<SectionId, MutableRefObject<HTMLDivElement | null>> = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef
  };

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    const ref = sectionRefs[section];
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={activeSection} onNavigate={handleNavigate} />
      <main>
        <section ref={homeRef} id="home" className="scroll-mt-24">
          <HomePage onNavigate={handleNavigate} />
        </section>
        <section ref={aboutRef} id="about" className="scroll-mt-24">
          <AboutPage />
        </section>
        <section ref={experienceRef} id="experience" className="scroll-mt-24">
          <ExperiencePage />
        </section>
        <section ref={projectsRef} id="projects" className="scroll-mt-24">
          <ProjectsPage />
        </section>
        <section ref={contactRef} id="contact" className="scroll-mt-24">
          <ContactPage />
        </section>
      </main>
    </div>
  );
}
