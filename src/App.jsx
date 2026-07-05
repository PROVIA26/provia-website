import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Recruit from "./components/Recruit";
import Area from "./components/Area";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <div data-aos="fade-up">
        <About />
      </div>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-up">
        <Recruit />
      </div>

      <div data-aos="fade-up">
        <Area />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;