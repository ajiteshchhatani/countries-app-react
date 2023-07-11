import ThemeButton from "./Themebutton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-sm shadow-gray-400 p-2 md:p-4">
      <h2>Where in the world?</h2>
      <ThemeButton />
    </div>
  );
};

export default Navbar