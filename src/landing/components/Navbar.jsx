import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="space-x-9">
      <Link to="/dashboard" className="hover:font-bold">
        Features
      </Link>
      <Link to="/properties" className="hover:font-bold">
        Future
      </Link>
      <Link to="#review-card" className="hover:font-bold">
        About
      </Link>
    </nav>
  );
}
