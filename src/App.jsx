import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackgroundScene from "./components/BackgroundScene";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-coal font-body text-stone-100">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <BackgroundScene />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/achievement" element={<Achievement />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
