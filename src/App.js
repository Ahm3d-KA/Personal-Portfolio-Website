import {Navbar} from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Buffer from "./components/Buffer";
import Technlogies from "./components/Technologies";
import Project from "./components/Project";
import portfoliopic from "./assets/websitemockup1.jpg"

// Cool project picture animations
// Cool animations
// add smooth scroll using copilot
// check for contrast
// add all the logos
// color scheme
// cool images

function App() {
  return (
      <div>
          
          <Project link={"localhost:3000"} pictureLink={portfoliopic} title={"Clothing Website"} timePeriod={"May 23 - Jan 24"} technologiesUsed={["helo", "me"]}  about={"This project is an e-commerce shopping platform designed to provide users with a seamless online shopping experience. The website features a clean and modern user interface, allowing users to browse, search, and purchase products easily. The site includes a robust backend for handling inventory management, user authentication, and secure payment processing."} />
          
          {/*<Navbar />*/}
          {/*<Hero />*/}
          {/*<Technlogies />*/}
          {/*<About />*/}
          {/*<Work />*/}
          {/*<Experience />*/}
          {/*<Contact  />*/}
          {/*<Footer />*/}
      </div>
  );
}

export default App;
