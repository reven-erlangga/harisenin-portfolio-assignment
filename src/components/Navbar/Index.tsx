import { ReactNode, useEffect, useState } from "react";
import { themeChange } from "theme-change";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, [theme]);

  function handleTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setTheme(localStorage.theme);
  }

  return (
    <div className="navbar bg-base-100 flex flex-row-reverse gap-4">
      <div>{children}</div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          data-set-theme={theme == "dark" ? `light` : `dark`}
          data-act-class="ACTIVECLASS"
          onClick={(e) => handleTheme(e)}
        >
          <span className="material-icons-outlined">
            {theme == "dark" ? `wb_sunny` : `dark_mode`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
