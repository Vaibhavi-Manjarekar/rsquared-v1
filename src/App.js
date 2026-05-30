import React from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Footer from './Footer/Footer';
import Meet from './Meet/Meet';
import Projects from './Projects/Projects';
import heroImage from "./assets/umich_campus.jpg";

import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();

  const isHeroPage =
    location.pathname === "/" || location.pathname === "/about";

  const isDarkNav = !isHeroPage; 

  return (
    <>
      {isHeroPage ? (
        <div
          className="heroSection"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 80, 0.6), rgba(0, 0, 80, 0.6)),
              url(${heroImage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navigation isDark={isDarkNav} />
          <Header />
        </div>
      ) : (
        <Navigation isDark={isDarkNav} />
      )}

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<> <About /> <Meet />
              <Footer /> </>} />

        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;