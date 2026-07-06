import { useEffect } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LanguagesSection } from "./components/LanguagesSection";
import { LinksSection } from "./components/LinksSection";
import { ModeToggle } from "./components/ModeToggle";
import { Projects } from "./components/Projects";
import { SideNav } from "./components/SideNav";

function DocumentHead() {
  const { t } = useApp();

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);

  return null;
}

function Portfolio() {
  return (
    <>
      <DocumentHead />
      <ModeToggle />
      <SideNav />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <LanguagesSection />
        <Projects />
        <LinksSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  );
}
