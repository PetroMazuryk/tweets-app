import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import { selectOptions } from "../../constants/selectOptions";
import { WrapperSelect } from "./Cards.styled";

const Cards = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <WrapperSelect>
        {" "}
        <DropDown
          options={selectOptions}
          filter={filter}
          onSelect={handleFilterChange}
        />
      </WrapperSelect>
    </div>
  );
};

export default Cards;
