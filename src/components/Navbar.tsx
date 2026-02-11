import { useState } from "react";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 50);
  });

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-darkbg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          IC<span className="text-primary">Shop</span>
        </h1>

        <ul className="hidden md:flex gap-10 font-medium">
          <li className="hover:text-primary cursor-pointer">Shop</li>
          <li className="hover:text-primary cursor-pointer">Men</li>
          <li className="hover:text-primary cursor-pointer">Women</li>
          <li className="hover:text-primary cursor-pointer">New Drops</li>
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <ShoppingCart size={22} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
