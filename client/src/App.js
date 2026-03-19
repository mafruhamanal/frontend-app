import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="relative h-full w-full overflow-x-hidden text-brown-cream antialiased selection:bg-brown-700 selection:text-brown-cream">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-brown-950 bg-[linear-gradient(to_right,#2a1c120a_1px,transparent_1px),linear-gradient(to_bottom,#2a1c120a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;