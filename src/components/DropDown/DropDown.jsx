import { StyleSelect } from "./DropDown.styled";

const DropDown = ({ options, filter, onSelect }) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <StyleSelect value={filter} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyleSelect>
    </div>
  );
};

export default DropDown;
