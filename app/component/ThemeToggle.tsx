import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("");

  // Themes array for easy switching
  const themes = ["winter", "night"];

  useEffect(() => {
    // Update localStorage and html attribute when theme changes
    if (theme) {
      globalThis?.localStorage?.setItem?.("site-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      const isDarkMode =
        globalThis?.window?.matchMedia &&
        globalThis?.window?.matchMedia?.("(prefers-color-scheme: dark)")
          ?.matches;

      const theme =
        globalThis?.localStorage?.getItem?.("site-theme") ||
        (isDarkMode ? "night" : "winter");
      setTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip="Theme">
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
    </div>
  );
}
