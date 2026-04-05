import React, { useState } from "react";
import "../css/LevelMenu.css";

const levels = [
  { label: "💛 Beginner", id: "beginnerterms" },
  { label: "🧡 Intermediate", id: "intermediateterms" },
  { label: "❤️ Advanced", id: "advancedterms" },
  { label: "💜 Expert", id: "expertterms" },
];

const LevelMenu = () => {
  const [open, setOpen] = useState(false);  // <-- NEW

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => setOpen(!open);  // <-- NEW

  return (
    <aside className={`level-menu ${open ? "open" : ""}`}>
      <div className="level-list">
        {/* Clicking this toggles menu on mobile */}
        <h3 onClick={toggleMenu}>Levels</h3>
        <ul>
          {levels.map((lvl) => (
            <li key={lvl.id} onClick={() => handleClick(lvl.id)}>
              {lvl.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LevelMenu;
