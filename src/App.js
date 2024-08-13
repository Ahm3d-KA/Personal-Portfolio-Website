import {Navbar} from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";

function App() {
  return (
      <div>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Experience />
      </div>
  );
}

export default App;
