import About from "./components/About";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AppBar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <About />
        <Experience />
        <Technology />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
