import Footer from "../parts/Footer.jsx";
import Header from "../parts/Header.jsx";
import CommentsSection from "../components/CommentsSection.jsx";
import AEContent from "../parts/AEContent.jsx";
import "../css/AirborneExodus.css";

const commentSections = [
  { id: "carrier-briefing", label: "Carrier Briefing" },
  { id: "fuel-and-runway-status", label: "Fuel And Runway Status" },
  { id: "about-the-game", label: "About The Game" },
  { id: "core-gameplay-loop", label: "Core Gameplay Loop" },
  { id: "the-carrier", label: "The Carrier" },
  { id: "aircraft-and-progression", label: "Aircraft And Progression" },
  { id: "refueling-system", label: "Refueling System" },
  { id: "flight-and-route-planning", label: "Flight And Route Planning" },
  { id: "taxiing-and-positioning", label: "Taxiing And Positioning" },
  { id: "the-infected", label: "The Infected" },
  { id: "world-design", label: "World Design" },
  { id: "mission-structure", label: "Mission Structure" },
  { id: "co-op-gameplay", label: "Co-op Gameplay" },
  { id: "atmosphere-and-tone", label: "Atmosphere And Tone" },
  { id: "ae-systems", label: "Additional Gameplay Systems" },
  { id: "endgame", label: "Endgame" },
  { id: "key-features", label: "Key Features" },
  { id: "ae-core-fantasy", label: "Core Fantasy" }
];

function AirborneExodusPage({ comments, addComment }) {
  return (
    <main className="ae-page">
      <Header />

      <div className="ae-commentsDock">
        <CommentsSection
          comments={comments}
          addComment={addComment}
          pageId="ae"
          pageLabel="Airborne Exodus"
          sectionOptions={commentSections}
        />
      </div>

      <AEContent />

      <div className="ae-footerWrap">
        <Footer />
      </div>
    </main>
  );
}

export default AirborneExodusPage;
