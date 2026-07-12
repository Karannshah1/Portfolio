import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-border bg-card text-foreground shadow-[2px_2px_0_0_var(--color-border)] hover:bg-primary hover:text-primary-foreground hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_0_var(--color-border)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};