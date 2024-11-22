import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] m-0 ">
      <BrowserRouter>
        <AppBar />
        <HeroSection />
        <About />
        <Technology />
        <Education />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
