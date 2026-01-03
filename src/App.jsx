import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
      <Toaster
        toastOptions={{
          style: {
            background: "#631E05",
            color: "#fff",
          },
        }}
        position="top-right"
        reverseOrder={false}
      />

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

      <div id="contact">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
      <Socials showText={true} />
    </BrowserRouter>
  );
};

export default App;
