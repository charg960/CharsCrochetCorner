import React from "react";
import "../css/ProjectDetail.css";
import { useParams, Link } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();

  if (!projects.length) {
    return <p>Loading project...</p>; // wait until projects are loaded
  }

  const project = projects.find(p => Number(p.Project_ID) === Number(id));

  if (!project) {
    return (
      <div style={{ padding: "20px" }}>
        <Link to="/collections" className="back-link">← Back to Gallery</Link>
        <p>Project not found.</p>
      </div>
    );
  }

  // Materials grouped by Set_Number
  const materialSets = [];
  if (project.Materials && Array.isArray(project.Materials)) {
    const grouped = {};
    project.Materials.forEach(m => {
      const setNum = m.Set_Number || 1;
      if (!grouped[setNum]) grouped[setNum] = [];
      grouped[setNum].push(m.Name);
    });
    Object.keys(grouped)
      .sort((a, b) => Number(a) - Number(b))
      .forEach(key => materialSets.push(grouped[key]));
  }

  return (
    <div style={{ padding: "10px" }}>
      <Link to="/collections" className="back-link">← Back to Gallery</Link>

      <div className="project-detail" style={{ padding: "10px" }}>
        <h1>{project.Name}</h1>

        <img
          src={project.Main_Image}
          alt={project.Main_Image_Alt || project.Name}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
        />

        <div className="project-info">
          <div className="info-box">
            <strong>Artist:</strong> {project.Artist}
          </div>
          <div className="info-box">
            <strong>Difficulty:</strong> {project.Emoji} {project.Difficulty}
          </div>
          <div className="info-box">
            <strong>Size:</strong> {project.Size}
          </div>
        </div>

        {materialSets.length > 0 && (
          <div className="materials-container">
            {materialSets.map((set, index) => (
              <div key={index} className={`material-set ${materialSets.length > 1 ? "multi-set" : ""}`}>
                {set.map((material, i) => (
                  <div key={i} className="material-bubble">{material}</div>
                ))}
              </div>
            ))}
          </div>
        )}

        {project.Directions && project.Directions.length > 0 && (
          <div className="directions-section" style={{ marginTop: "20px" }}>
            <h2>Pattern Pages</h2>
            <div className="directions-list">
              {project.Directions.map((page, index) => (
                <img
                  key={index}
                  src={page.File_Path}
                  alt={`Pattern page ${index + 1}`}
                  style={{ width: "100%", maxWidth: "800px", marginBottom: "20px", borderRadius: "6px" }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
