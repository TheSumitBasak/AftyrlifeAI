import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(() => {
    // Initialize theme from localStorage, default to 'winter'
    return globalThis?.localStorage?.getItem?.("site-theme") || "winter";
  });

  // Themes array for easy switching
  const themes = ["winter", "night"];

  useEffect(() => {
    // Update localStorage and html attribute when theme changes
    globalThis?.localStorage?.setItem?.("site-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-square"
      aria-label="Toggle Theme"
    >
      {theme === "night" ? (
        <Sun className="size-6" />
      ) : (
        <Moon className="size-6" />
      )}
    </button>
  );
}
