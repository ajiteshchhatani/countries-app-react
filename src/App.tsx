import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./providers/ThemeProvider";
import { Outlet } from "react-router-dom";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col flex-wrap min-h-full ${
        theme.themeMode === "dark"
          ? "bg-body-dark text-white"
          : "bg-body-light text-black"
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
