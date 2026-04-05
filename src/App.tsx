import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import AbbreviationsAndTips from "./pages/AbbreviationsAndTips";
import ProjectDetail from "./components/ProjectDetail";
import TopBar from "./components/topBar";
import AddProject from "./components/AddProject"; // or wherever it lives
import Home from "./pages/Home";

import DirectionsPage from "./components/DirectionsPage"; 
import Collections from "./pages/Collections";
import ContactPage from "./pages/ContactMe";

function App() {
  /*const myImages = [
    {
      src: "/images/pattern0.png",
      alt: "Cat Keychain",
      artist: "Kathy Leung",
      difficulty: "💛 Beginner",
      materials: ["Yarn: Paintbox Simply DK - 1 ball Black, 1 ball Buttercup Yellow", "Hook: 2.00 mm crochet hook", "Other: Scissors, Stitch Marker, Sewing Needle, Keychain"],
      size: "13 cm",
      pages: [
        "/patterns/pattern0pg1.png",
        "/patterns/pattern0pg2.png"
      ]
    },
    { 
      src: "/images/pattern1.png", 
      alt: "Frog Plush", 
      artist: "Alexandra Volkova",
      difficulty: "💛 Beginner",
      materials: [
        "Yarn: Green Plush Yarn (1 skein — Wolans Bunny Baby / YarnArt Chenille)", 
        "Small amounts of YarnArt Jeans — Pink & Black (for cheeks/embroidery)", "Hook: 5.00 mm crochet hook", 
        "Other: Holofiber / Poly-fill stuffing, 7-8 mm safety eyes, Wide-eye sewing needle (for assembly/embriodery), Transparent craft glue (optional for eyes), Scissors"],
      size: "9-11 cm",
      pages: [
        "/patterns/pattern1pg1.png",
        "/patterns/pattern1pg2.png",
        "/patterns/pattern1pg3.png",
      ]
    },
    { 
      src: "/images/pattern2.png", 
      alt: "Star Dreamcatcher" ,
      artist: "Renata Saj",
      difficulty: "🧡 Intermediate",
      materials: [
        [
          "Yarn: Scheepjes Maxi Sweet Treat — 140 m / 25 g",
          "Hook: 1.75–2 mm", 
          "Finished Size: 10 cm",
          "Other: Wooden or Wire Rings (10-20 cm), Scissors, Tapestry needle (to weave in ends)"
        ],
        [
          "Yarn: Scheepjes Catona / Huisje van Katoen Barbante M — 125–100 m / 50–250 g", 
          "Hook: 3.5–4 mm", 
          "Finished Size: 20 cm",
          "Other: Wooden or Wire Rings (10-20 cm), Scissors, Tapestry needle (to weave in ends)"
        ]
      ],
      size: "10-20 cm (depends on the yarn and hook you use)",
      pages: [
        "/patterns/pattern2pg1.png",
        "/patterns/pattern2pg2.png",
        "/patterns/pattern2pg3.png",
        "/patterns/pattern2pg4.png",
      ]
    },
    { 
      src: "/images/pattern3.png", 
      alt: "Gary the Snail", 
      artist: "Kozytoys",
      difficulty: "💛 Beginner",
      materials: [],
      size: "9 cm",
      pages: [],     
    },
  ];*/

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/PhpFiles/get_projects.php")
      .then((res) => res.json())
      .then((data) => {
      console.log("Fetched projects:", data);
      setProjects(data);
    })
    .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Router>
      <>
        <div className="logo">
          <Link to="/">
            <img src="/images/CCCLogo.png" alt="Logo" />
          </Link>
        </div>

        <TopBar
          btn1="Home"
          btn2="Projects"
          btn3="Abbreviations & Tips"
          btn4="About"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
          <Route path="/project/:id/directions" element={<DirectionsPage projects={projects} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/abbreviations&tips" element={<AbbreviationsAndTips />} />
          <Route path="/collections" element={<Collections projects={projects} />} />
          <Route path="/about" element={<ContactPage />} />
        </Routes>
      </>
    </Router>

  );
}

export default App;
