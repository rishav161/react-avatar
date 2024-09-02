import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
     <Navbar />
    <Hero />
    <About />
    <Footer />
    </>
  )
}

export default App
