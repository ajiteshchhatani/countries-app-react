import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface SelectPropType {
  regions: Array<string>;
  setRegion: (selectedRegion: string) => void;
}

const Select = ({ regions, setRegion }: SelectPropType) => {
  const theme = useContext(ThemeContext);
  return (
    <select
      placeholder="Filter by region"
      className={`w-[20%] border border-gray-400 p-2 rounded-md ${theme.themeMode === "dark" ? `bg-region-dropdown-dark` : null }`}
      name="region"
      onChange={(e) => setRegion(e.target.value)}
    >
      {regions.map((region) => (
        <option key={region.toLocaleLowerCase()} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Select;
