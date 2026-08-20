import CommentsSection from "../components/CommentsSection.jsx";
import Footer from "../parts/Footer.jsx";
import Header from "../parts/Header.jsx";
import SpaceExtractionContent from "../parts/SpaceExtractionContent.jsx";
import { spaceCommentSections } from "../parts/spaceExtractionDossierData.js";
import "../css/SpaceExtraction.css";

function SpaceExtractionPage({ comments, addComment }) {
  return (
    <main className="sxe-page">
      <Header />
      <div className="sxe-commentsDock">
        <CommentsSection comments={comments} addComment={addComment} pageId="space" pageLabel="Untitled Space Extraction" sectionOptions={spaceCommentSections} />
      </div>
      <SpaceExtractionContent />
      <div className="sxe-footerWrap"><Footer /></div>
    </main>
  );
}

export default SpaceExtractionPage;
