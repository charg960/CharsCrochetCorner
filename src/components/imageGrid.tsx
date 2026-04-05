import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/imageGrid.css";

function ImageGrid({ images }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const toggleFavorite = (projectId) => {
    let updated;
    if (favorites.includes(projectId)) {
      updated = favorites.filter((id) => id !== projectId);
    } else {
      updated = [...favorites, projectId];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const displayedImages = showOnlyFavorites
    ? images.filter((img) => favorites.includes(img.Project_ID))
    : images;

  return (
    <div>
      {/* Favorites toggle button */}
      <div className="favorites-toggle">
        <button onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}>
          {showOnlyFavorites ? "Show All Projects" : "Show Favorites"}
        </button>
      </div>

      <div className="image-grid">
        {displayedImages.map((img) => (
          <div key={img.Project_ID} className="grid-item">
            <Link to={`/project/${img.Project_ID}`} className="image-link">
              <img
                src={img.Main_Image || img.Image_Link}
                alt={img.Main_Image_Alt || img.Caption || img.Name}
              />
              <div className="image-caption">
                {/* Heart to the left of name */}
                <button
                  className={`favorite-btn ${favorites.includes(img.Project_ID) ? "favorited" : ""}`}
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigating when clicking heart
                    toggleFavorite(img.Project_ID);
                  }}
                >
                  {favorites.includes(img.Project_ID) ? "💖" : "🤍"}
                </button>
                {img.Name || img.Caption}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
