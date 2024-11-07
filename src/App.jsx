import { BrowserRouter } from "react-router-dom";
import "./index.css";

import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Socials,
} from "./components";

const App = () => {
  return (
    // z-0
    <BrowserRouter>
      <div className="relative bg-primary">
        <div className="bg-[#FFFDFDFA] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>

      <About />
      {/* <Experience /> */}
      {/* <Tech /> */}
      <Works />
      <Feedbacks />

      <div className="">
        <Contact />
        {/* <StarsCanvas /> */}
        <Socials showText = {true} />
      </div>
    </BrowserRouter>
  );
};

export default App;
