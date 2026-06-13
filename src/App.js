import React from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Footer from './Footer/Footer';
import Meet from './Meet/Meet';
import Projects from './Projects/Projects';
import heroImage from "./assets/umich_campus.jpg";
import StudentB from "./StudentB/StudentB";
import Study from "./Study/Study";

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
      ) :
      (
        <Navigation isDark={isDarkNav} />
      )}

      <Routes>
        <Route path="/" element={
          <> 
          <About /> 
          <div className="curveDivider">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
                d="M0,0
                L720,51
                L1440,0
                L1440,152
                L0, 152
                Z"
              fill="rgba(0, 39, 76, 0.85)"
            />
          </svg>
        </div>
          <Meet />
          <div className="curveDivider">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
               d="M0,0 L1440,0 L1440,80 L720,120 L0,80 Z"
              fill="#00274C"
            />
          </svg>
        </div>
          <Footer /> 
          </>} 
        />
        <Route path="/about" element={
          <> 
          <About /> 
          <div className="curveDivider">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
               d="M0,0
                L720,51
                L1440,0
                L1440,152
                L0, 152
                Z"
              fill="rgba(0, 39, 76, 0.85)"
            />
          </svg>
        </div>
          <Meet />
          <div className="curveDivider">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
               d="M0,0 L1440,0 L1440,80 L720,120 L0,80 Z"
              fill="#00274C"
            />
          </svg>
        </div>
          <Footer /> 
          </>} 
        />

        <Route
          path="/projects"
          element={
            <>
            <div className="curveDivider">
              <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 L1440,0 L1440,80 L720,120 L0,80 Z"
                  fill="#001F3CFF"
                />
              </svg>
            </div>
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/student-b"
           element={
            <>
               <div className="curveDivider">
              <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 L1440,0 L1440,80 L720,120 L0,80 Z"
                  fill="#001F3CFF"
                />
              </svg>
            </div>
              <StudentB />
              <Footer />
            </>
          }
        />
      <Route
          path="/study"
           element={
            <>
               <div className="curveDivider">
              <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 L1440,0 L1440,80 L720,120 L0,80 Z"
                  fill="#001F3CFF"
                />
              </svg>
            </div>
              <Study />
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
    <BrowserRouter basename="/rsquared-v1">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;