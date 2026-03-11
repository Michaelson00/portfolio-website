import Navbar     from "./components/layout/Navbar";
import Footer     from "./components/layout/Footer";
import Hero       from "./components/sections/Hero";
import About      from "./components/sections/About";
import Skills     from "./components/sections/Skills";
import Projects   from "./components/sections/Projects";
import Charts     from "./components/sections/Charts";
import Experience from "./components/sections/Experience";
import Contact    from "./components/sections/Contact";

export default function App() {
    return (
        <div style={{ background: "#0a0a0a", color: "#ffffff", overflowX: "hidden" }}>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Charts />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}