import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './Components/AboutSection';
import Navbar from './Components/NavBar';
import AboutMe from './Components/AboutUs';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="App text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<><AboutSection /><AboutMe /><Services /><Portfolio /><ContactSection /></>} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <ScrollToTop />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
