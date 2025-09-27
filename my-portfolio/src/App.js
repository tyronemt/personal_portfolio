import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;