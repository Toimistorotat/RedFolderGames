import Footer from "../parts/Footer.jsx";
import Header from "../parts/Header.jsx";
import CommentsSection from "../components/CommentsSection.jsx";
import CityExtractionContent from "../parts/CityExtractionContent.jsx";
import "../css/CityExtraction.css";

const commentSections = [
  { id: "city-briefing", label: "City Briefing" },
  { id: "core-loop", label: "Core Loop" },
  { id: "about-the-game", label: "About The Game" },
  { id: "city-structure", label: "City Structure" },
  { id: "phase-system", label: "Phase System" },
  { id: "buildings-and-zones", label: "Buildings And Zones" },
  { id: "objectives-and-loadouts", label: "Objectives And Loadouts" },
  { id: "enemy-design", label: "Enemy Design" },
  { id: "extraction-system", label: "Extraction System" },
  { id: "risk-reward", label: "Risk And Reward" },
  { id: "emergent-stories", label: "Emergent Stories" },
  { id: "core-fantasy", label: "Core Fantasy" }
];

function CityExtractionPage({ comments, addComment }) {
  return (
    <main className="cex-page">
      <Header />

      <div className="cex-commentsDock">
        <CommentsSection
          comments={comments}
          addComment={addComment}
          pageId="city"
          pageLabel="Untitled City Extraction"
          sectionOptions={commentSections}
        />
      </div>

      <CityExtractionContent />

      <div className="cex-footerWrap">
        <Footer />
      </div>
    </main>
  );
}

export default CityExtractionPage;
