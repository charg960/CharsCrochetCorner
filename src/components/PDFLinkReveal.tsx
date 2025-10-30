import { useState } from "react";

function PdfLinkReveal({ label = "Click to view PDF", linkText = "Open PDF", pdfUrl }) {
  const [showLink, setShowLink] = useState(false);

  return (
    <div onClick={() => setShowLink(true)} style={{ cursor: "pointer", color: "#007bff" }}>
      {!showLink ? (
        <span>{label}</span>
      ) : (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
}

export default PdfLinkReveal;
