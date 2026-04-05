import AboutSection from "../components/AboutSection";
import CurvedLoop from '../components/CurvedLoop';
import "../css/ContactMe.css";
import '../css/myButton.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <AboutSection />

      <div className="contact-card">
        {/* CurvedLoop heading */}
        <CurvedLoop
          marqueeText={`Contact Me 💌 If you'd like to reach out, click the button below!`}
          speed={2.5}
          curveAmount={-200} // slightly less extreme
          className="curved-loop-text"
        />

        {/* Contact info list styled like abbrev-page */}
        <ul className="contact-info">
          <li><strong>Ravelry:</strong> {"Char'sCrochetCorner™"}</li>
          <li><strong>Email:</strong> charlotte.dickson@my.maryvillecollege.edu</li>
          <li><strong>Created:</strong> 2025 by Charlotte Dickson</li>
        </ul>

        <div style={{ position: "relative" }}>
          <button
            className="pill-btn"
            onClick={() => {
              window.location.href = "mailto:charlotte.dickson@my.maryvillecollege.edu?subject=Hello%20Charlotte!";
            }}
          >
            Send Me an Email 💌
          </button>
        </div>
      </div>
      
    </div>
  );
}
