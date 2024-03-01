import { BrowserRouter } from "react-router-dom";
import { About, Code, Contact, Experience, Hero, Navbar, StarsCanvas, Tech } from "./Sections";

const App = () => (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Code />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
