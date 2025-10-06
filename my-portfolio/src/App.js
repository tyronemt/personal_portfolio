import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="container">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* Add the new component here */}
    </div>
  );
}

export default App;