import React from "react";
import { useDispatch } from "react-redux";
import { Collapse } from "@material-ui/core";
import {
  FilterSectionTitle,
  FilterSection,
  FilterSectionTitleText,
} from "../../Styles/StyledFilters";
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import InputAnchor from "../../Inputs/InputAnchor";

export default function FilterByBIN() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    console.log("click");
  };

  const dispatch = useDispatch();

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по БИН</FilterSectionTitleText>
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>
      <Collapse in={open}>
        <InputAnchor
          placeholder="Введите БИН"
          onChange={(e) =>
            dispatch({
              type: "SET_FILTER_BIN",
              payload: e.toLowerCase(),
            })
          }
        />
      </Collapse>
    </FilterSection>
  );
}
