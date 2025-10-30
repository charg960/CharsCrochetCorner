import React from "react";
import { Link } from "react-router-dom";
import "./imageGrid.css";

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} className="grid-item">
          <Link to={`/project/${index}`}>
            <img src={img.src} alt={img.alt || `Image ${index + 1}`} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
