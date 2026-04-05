import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageGrid from "../components/imageGrid";
import "../css/CollectionsPage.css";

function Collections() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/PhpFiles/get_projects.php")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="collection-content">
      <h1>Projects</h1>

      <ImageGrid images={projects} />

      <div className="add-project-row">
        <Link to="/add-project" className="add-btn">
          + Add Project
        </Link>
      </div>
    </div>
  );
}

export default Collections;
