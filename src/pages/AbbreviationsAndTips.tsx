import React from "react";
import "../css/AbbreviationsAndTips.css";
import LevelMenu from "../components/LevelMenu.tsx";

const categorizedTerms = {
  "💛 Beginner Terms": [
    { term: "ch", definition: "Chain" },
    { term: "sc", definition: "Single Crochet" },
    { term: "sl st", definition: "Slip Stitch" },
    { term: "st / sts", definition: "Stitch / Stitches" },
    { term: "rep", definition: "Repeat" },
    { term: "rnd", definition: "Round" },
    { term: "fo", definition: "Fasten Off" },
    { term: "MR", definition: "Magic Ring" },
  ].sort((a, b) => a.term.localeCompare(b.term)),

    "🧡 Intermediate Terms": [
        { term: "dc", definition: "Double Crochet" },
        { term: "hdc", definition: "Half Double Crochet" },
        { term: "tr", definition: "Treble Crochet" },
        { term: "sp", definition: "Space" },
    ].sort((a, b) => a.term.localeCompare(b.term)),

    "❤️ Advanced Terms": [
        { term: "inc", definition: "Increase (2 stitches in the same stitch)" },
        { term: "dc inc", definition: "Double Crochet Increase (2 Double Crochets in the same stitch)" },
        { term: "hdc inc", definition: "Half Double Crochet Increase (2 Half Double Crochets in the same stitch)" },
        { term: "tr inc", definition: "Treble Crochet Increase (2 Treble Crochets in the same stitch)" },
    ].sort((a, b) => a.term.localeCompare(b.term)),

    "💜 Expert Terms": [
        { term: "3dc cl", definition: "3 Double Crochet Cluster – Yarn over and insert hook into indicated stitch or space, yarn over and pull up a loop, yarn over and pull through 2 loops (3 times). You have 4 loops on the hook; yarn over and pull through all 4 loops." },
        { term: "fptr", definition: "Front Post Treble Crochet – Yarn over twice, insert hook from front to back to front around the post of the indicated stitch, yarn over and draw up a loop, yarn over and pull through 2 loops three times." },
        { term: "fphdc", definition: "Front Post Half Double Crochet – Yarn over, insert hook from front to back to front around the post of the indicated stitch, draw up a loop, yarn over and pull through all 3 loops." },
        { term: "dtr", definition: "Double Treble Crochet" },
    ].sort((a, b) => a.term.localeCompare(b.term)),
    };

 const AbbreviationsAndTips = () => {
  return (
    <div className="abbrev-layout">
      <LevelMenu />
      <div className="abbrev-page-wrapper">
        <div className="abbrev-page">
          <h1>Crochet Abbreviations & Tips</h1>

          {Object.entries(categorizedTerms).map(([category, terms]) => {
            const id = category.replace(/[^\w]/g, "").toLowerCase();

            return (
              <section key={category} className="abbrev-section">
                {/* Invisible anchor for offset */}
                <div id={id} style={{ position: "relative", top: "-120px" }}></div>

                <h2>{category}</h2>
                <dl className="abbrev-list">
                  {terms.map((item, index) => (
                    <React.Fragment key={index}>
                      <dt>{item.term}</dt>
                      <dd>{item.definition}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </section>
            );
          })}
        </div>



      </div>

      
    </div>
    
  );
};


export default AbbreviationsAndTips;
