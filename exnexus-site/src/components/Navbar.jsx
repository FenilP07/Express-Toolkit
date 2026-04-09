import { Link, NavLink } from "react-router";
import { Boxes } from "lucide-react";

const linkBase =
  "rounded-full px-4 py-2 text-sm transition-all duration-200 flex items-center justify-center";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Boxes className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              exnexus
            </div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              Express Utility Core
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-white !text-black font-medium" // Added ! (important) to force black text
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/docs"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-white !text-black font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            Docs
          </NavLink>

          <NavLink
            to="/examples"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-white !text-black font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            Examples
          </NavLink>
        </nav>

        <a
          href="https://github.com/FenilP07/Express-Toolkit"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/12 bg-white/6 px-4 py-2 text-sm text-white transition hover:bg-white/12"
        >
          Github
        </a>
      </div>
    </header>
  );
}
