import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;