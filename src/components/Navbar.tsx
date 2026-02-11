import { useState, useEffect } from "react";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme.jsx";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-darkbg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-wide">
            IC<span className="text-primary">Shop</span>
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-primary">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-primary">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <ShoppingCart size={20} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
