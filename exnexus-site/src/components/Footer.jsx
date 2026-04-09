import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} exnexus. Built for cleaner Express apps.
        </div>
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/examples">Examples</Link>
          <a href="https://www.npmjs.com/package/exnexus">npm</a>
        </div>
      </div>
    </footer>
  );
}
