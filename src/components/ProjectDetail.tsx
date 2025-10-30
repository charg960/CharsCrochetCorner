import React from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetail({ images }) {
  const { id } = useParams();
  const project = images[id];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-detail" style={{ padding: "20px" }}>
      <Link to="/">← Back to Gallery</Link>

      <h1>{project.alt}</h1>

      <img
        src={project.src}
        alt={project.alt}
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
      />

      <p><strong>Artist:</strong> {project.artist}</p>
      <p><strong>Difficulty:</strong> {project.difficulty}</p>

      <p><strong>Materials:</strong></p>
      <ul>
        {project.materials?.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      {/* ✅ Pattern pages go right here */}
      {project.pages && project.pages.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Pattern Pages</h3>
          {project.pages.map((page, i) => (
            <img
              key={i}
              src={page}
              alt={`Pattern page ${i + 1}`}
              style={{
                width: "100%",
                maxWidth: "600px",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default ProjectDetail;
