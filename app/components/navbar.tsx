import { Link } from "@remix-run/react";

const links = [
  {
    pathname: "About",
    to: "/about",
  },
  {
    pathname: "Experience",
    to: "/about",
  },
  {
    pathname: "Work",
    to: "/about",
  },
  {
    pathname: "Contact",
    to: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="flex px-20 py-8">
      <nav>
        <h1>M</h1>
      </nav>
      <ul className="flex items-center ml-auto gap-x-4">
        {links.map((link, index) => (
          <li key={link.to}>
            <Link to={"/about"} className="text-sm">
              0{index + 1}. {link.pathname}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/resume" className="px-4 py-2 ml-4 text-sm text-green-600 border border-green-600 rounded-md">
        Resume
      </Link>
    </header>
  );
}
