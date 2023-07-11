import { useContext } from "react";
import themeIconDark from "../assets/moon-svgrepo-com-dark.svg";
import themeIconLight from "../assets/moon-svgrepo-com-light.svg";
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);

  const handleThemeChange = () => {
    localStorage.getItem("appTheme") === "light"
      ? theme.setTheme("dark")
      : theme.setTheme("light");
  };

  return (
    <button className="flex items-center gap-2" onClick={handleThemeChange}>
      {theme.theme === "dark" ? (
        <img
          src={themeIconLight}
          alt="change theme icon"
          width={30}
          height={30}
        />
      ) : (
        <img
          src={themeIconDark}
          alt="change theme icon"
          width={30}
          height={30}
        />
      )}
      {theme.theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeButton;
