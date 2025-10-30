import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ImageGrid from "./components/imageGrid";
import ProjectDetail from "./components/ProjectDetail";
import TopBar from "./components/topBar";
import HoverCard from "./components/hoverCard";
import DirectionsPage from "./components/DirectionsPage"; 

function App() {
  const myImages = [
    {
      src: "/images/pattern0.png",
      alt: "TITLE",
      artist: "?",
      difficulty: "Intermediate",
      materials: ["Canvas", "Acrylic Paint", "Brush Set"],
      
      pages: [
        "/patterns/pattern1pg1.png",
        "/patterns/pattern1pg2.png",
        "/patterns/pattern1pg3.png",
      ],
    },
    { src: "/images/pattern1.png", alt: "Crochet Pattern 1" },
    { src: "/images/pattern2.png", alt: "Crochet Pattern 2" },
    { src: "/images/pattern3.png", alt: "Crochet Pattern 3" },
  ];

  return (
    <Router>
      <TopBar
        btn1="Home"
        btn2="About"
        btn3="Collections"
        btn4="💌 Contact Me"
      />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <header
                className="hero"
                style={{ backgroundImage: "url(./images/crochet.png)" }}
              >
                <div>
                  <h1>Charlotte's App</h1>
                  <p>Student at MC</p>
                </div>
              </header>

              <div className="card-row">
                <div className="card-container">
                  <div className="hover-card">
                    <HoverCard
                      image="/images/mom.jpg"
                      title="Me and My Mom"
                      description="The person who taught me to crochet!"
                    />
                  </div>
                </div>
              </div>

              <div className="image-grid">
                <ImageGrid images={myImages} />
              </div>

              <footer>
                <p className="read-me">Made with ❤️ in 2025!</p>
              </footer>
            </>
          }
        />

        {/* Project Detail Page */}
        <Route
          path="/project/:id"
          element={<ProjectDetail images={myImages} />}
        />
        <Route path="/project/:id/directions" element={<DirectionsPage images={myImages} />} />

      </Routes>
    </Router>
  );
}

export default App;
