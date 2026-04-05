import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/topBar.css';

interface Props {
    btn1: string;
    btn2: string;
    btn3: string;
    btn4: string;
}

function TopBar({ btn1, btn2, btn3, btn4 }: Props) {
    const buttons = [
        { label: btn1, path: "/" },
        { label: btn2, path: "/collections" },
        { label: btn3, path: "/abbreviations&tips" },
        { label: btn4, path: "/about" },
    ];

    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="top-bar">

            <div className="nav-buttons">
                {buttons.map((btn, i) => {
                    const isActive = location.pathname === btn.path;
                    return (
                        <Link
                            key={i}
                            to={btn.path}
                            className={`pill-btn ${isActive ? 'active' : ''} ${hoveredIndex === i ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {btn.label}
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}

export default TopBar;
