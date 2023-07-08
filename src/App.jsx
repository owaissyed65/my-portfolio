import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
            <ScrollUp />
        </div>
    );
}

export default App;
