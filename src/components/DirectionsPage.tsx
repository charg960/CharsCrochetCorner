import React from "react";
import { useParams, Link } from "react-router-dom";

function DirectionsPage({ images }) {
  const { id } = useParams();
  const project = images[id];

  if (!project) return <p>Directions not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to={`/project/${id}`}>← Back to Overview</Link>
      <h1>{project.alt} — Directions</h1>
      <p>Here you could show the step-by-step directions, images, etc.</p>

      {project.pdf && (
        <a href={project.pdf} target="_blank" rel="noopener noreferrer">
          📄 Open PDF Instructions
        </a>
      )}
    </div>
  );
}

export default DirectionsPage;
