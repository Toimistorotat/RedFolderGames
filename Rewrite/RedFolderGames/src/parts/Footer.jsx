import { useLocation } from "react-router-dom";
export default function Footer() {
  const { pathname } = useLocation();
  //const navigate = useNavigate();

  const isMain = pathname.startsWith("/RedFolderGames/");
  return (
    <div className={`flex content background glowborder max-w-212.5 mb-5
    ${isMain ? "p-2 pl-10 pr-10" : ""}`}>
      <footer className="flex flex-col items-center text-center py-4 text-white">
        <p className="italic text-sm text-white/80! mb-1">
          From the basement, the only way is up.
        </p>

        <p className="text-sm text-white/90! mb-3">
          &copy; 2024 BasementGames.FI. All rights reserved.
        </p>

        {isMain && (
          <nav className="flex flex-wrap justify-center gap-3 text-xs text-white/60">
            <a href="/credits" className="hover:text-white transition">Credits</a>
            <span className="opacity-40">•</span>
            <a href="/socials" className="hover:text-white transition">Socials</a>
            <span className="opacity-40">•</span>
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <span className="opacity-40">•</span>
            <a href="/favorite" className="hover:text-white transition">My Favorite Website</a>
          </nav>
        )}
      </footer>
    </div>
  );
}