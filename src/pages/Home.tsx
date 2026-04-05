import "../css/Home.css"; 
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      
      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <div className="logo-wrapper">
        <img
          src="/images/CCCPaper.png"
          alt="Logo"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      </div>


      {/* Featured Project Card */}
      <div className="card featured-pattern" style={{ maxWidth: "320px", margin: "1rem auto" }}>
        <img
          src="/images/pattern0.png"
          alt="Cat Keychain"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "10px",
          }}
        />
        <h3 style={{ margin: "0 0 6px", fontSize: "1.1rem" }}>💛 Cat Keychain</h3>
        <p style={{ fontSize: "0.9rem", marginBottom: "10px", color: "#ff5f8c" }}>
          By Kathy Leung. A beginner-friendly crochet project, perfect as a keychain or cute gift!
        </p>
        <button
          className="button"
          onClick={() => navigate("/project/1")} // <-- navigate to featured project
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "14px",
            background: "linear-gradient(90deg, #ff8ab8, #ff6fa8)",
            color: "#fff",
            fontWeight: "600",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(255, 120, 160, 0.2)",
            transition: "transform 0.2s ease, box-shadow 0.25s ease",
          }}
        >
          View Pattern
        </button>
      </div>

      <footer>
        <p className="read-me">Made with ❤️ in 2025</p>
      </footer>
    </div>
  );
}
