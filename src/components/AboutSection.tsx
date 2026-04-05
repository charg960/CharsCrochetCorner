import HoverCard from "./hoverCard";
import "../css/CollectionsPage.css";

export default function AboutSection() {
  return (
    <div>
      <header className="about-header">
        <div>
          <h1>My First App!</h1>

          <div className="project-badge">
            <p>A Maryville College project.</p>
          </div>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",  // spreads wide left → right
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "100%",                    // full width
          padding: "0 40px",                // optional side breathing room
          marginTop: "40px",
        }}
      >

        {/* LEFT EXTRA CARD */}
        <div style={{ flex: "0 0 auto", textAlign: "center", marginTop: "30px" }}>
          <HoverCard
            image="/images/blank.png"
            title="The project for all levels"
            description="Blankets are perfect for a first crochet adventure or a rewarding challenge."
          />
        </div>

        {/* ORIGINAL 1 */}
        <div style={{ flex: "0 0 auto", textAlign: "center" }}>
          <HoverCard
            image="/images/mom.jpg"
            title="Me and My Mom"
            description="The person who taught me to crochet!"
          />
        </div>

        {/* ORIGINAL 2 */}
        <div style={{ flex: "0 0 auto", textAlign: "center" }}>
          <HoverCard
            image="/images/blanket.png"
            title="My First Project"
            description="The first crochet project I took on by myself in 2019."
          />
        </div>

        {/* RIGHT EXTRA CARD */}
        <div style={{ flex: "0 0 auto", textAlign: "center", marginTop: "30px" }}>
          <HoverCard
            image="/images/ele.png"
            title="Little Crochet Elephant"
            description="Easy stitches can be so fun for a beginner!"
          />
        </div>
      </div>
    </div>
  );
}
