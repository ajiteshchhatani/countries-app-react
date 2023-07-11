interface SelectPropType {
  regions: Array<string>;
  setRegion: (selectedRegion: string) => void;
}

const Select = ({ regions, setRegion }: SelectPropType) => {
  return (
    <select
      placeholder="Filter by region"
      className="w-[20%] border border-gray-400 p-2 rounded-md"
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
