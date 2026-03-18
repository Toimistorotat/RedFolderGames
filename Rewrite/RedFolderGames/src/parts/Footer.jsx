import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const isMain =
    pathname === "/RedFolderGames" ||
    pathname === "/RedFolderGames/";

  return (
    <div
      className={`flex content background glowborder max-w-212.5 mb-5 p-4 ${isMain ? "px-10" : "px-6"
        }`}
    >
      <footer className="flex w-full flex-col items-center text-center text-white">
        <p className="mb-1 italic text-sm text-white/80!">
          From the basement, the only way is up.
        </p>

        <p className={`text-sm text-white/90! ${isMain ? "mb-3" : ""}`}>
          &copy; 2024 BasementGames.FI. All rights reserved.
        </p>

        {isMain && (
          <nav className="flex flex-wrap justify-center gap-3 text-xs text-white/60">
            <button
              type="button"
              onClick={() => {
                sessionStorage.setItem("rf-guide", "credits");
                window.dispatchEvent(new Event("rf-start-guide"));
              }}
              className="transition hover:text-red-700"
            >
              Credits
            </button>
            <span className="opacity-40">•</span>
            <Link to="/socials" className="transition hover:text-red-700">
              Socials
            </Link>
            <span className="opacity-40">•</span>
            <Link to="/privacy" className="transition hover:text-red-700">
              Privacy Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link to="/favorite" className="transition hover:text-red-700">
              My Favorite Website
            </Link>
          </nav>
        )}
      </footer>
    </div>
  );
}