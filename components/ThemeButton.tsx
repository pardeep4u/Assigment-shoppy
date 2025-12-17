"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition"
    >
      {/* Icon */}
      <span className="text-yellow-500 dark:text-yellow-300">
        {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
      </span>

      {/* Toggle */}
      <span className="relative w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full transition">
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
            theme === "dark" ? "translate-x-5" : ""
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeButton;
