import '../css/TTShooter.css';
import '../css/multiuse.css';
import Header from '../parts/Header.jsx';
import Footer from '../parts/Footer.jsx';
import TTSContent from '../parts/TTSContent.jsx';
import CommentsSection from '../components/CommentsSection.jsx';
import { Loading } from '../components/Loading.jsx';
import { useState, useEffect } from 'react';

export default function TacTicalshooter({ comments, addComment }) {
  const [loading, setLoading] = useState(true);
  const [devMode, setDevMode] = useState(false);

  // Toggle dev mode with "B"
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key.toLowerCase() === "b" && loading) {
        setDevMode(true);
        setLoading(false); // instantly skip loading
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loading]);

  // Handle loading logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {loading ? (
        <Loading className="loadingScreen" />
      ) : (
        <div className="flex flex-col">
          {devMode && <div className="absolute top-2 right-2 text-green-400">DEV MODE</div>}
          <div>
            <Header />
            <div>
              <CommentsSection comments={comments} addComment={addComment} />
            </div>
            <div className="flex flex-col justify-start gap-8 py-8 px-4 max-w-full">
              <TTSContent />
            </div>
            <div className="w-96 mx-auto">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


/*
<section id="about-redfolder">
  <h3>About RedFolderGames</h3>
  <p>
    <strong>RedFolderGames</strong> is not a studio built on funding, marketing, or safety nets —  
    it’s built on ambition, grit, and a belief that games can still mean something.  
    Formed out of passion rather than profit, RedFolderGames exists to create experiences that 
    challenge players, not just entertain them.
  </p>
  <p>
    <strong>{Name}</strong> represents everything we love about the art of interactive storytelling —  
    risk, consequence, emotion, and authenticity.  
    It’s a concept born in late-night conversations, forged from the frustration of modern trends,  
    and shaped by the question: <em>“What if we made one game that truly mattered, even if it broke us doing it?”</em>
  </p>
  <p>
    There’s no guarantee this game will ever exist beyond design.  
    But that’s not the point.  
    The point is to dream big, to build something that doesn’t compromise —  
    something <em>studio-death ready</em>, where every mechanic, story, and bullet is there for a reason.
  </p>
  <p>
    Whether <strong>{Name}</strong> is ever fully realized or remains a digital blueprint,  
    it stands as proof that games can still be <em>personal</em>.  
    They can have weight, silence, and reflection.  
    They can make you feel loss, pride, and purpose — just like the people who fight and fall within them.
  </p>
  <p>
    <strong>From the basement, the only way is up.</strong>  
    – RedFolderGames
  </p>
</section>
*/