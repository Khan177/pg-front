import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Collapse } from "@material-ui/core";
import {
  FilterSectionTitle,
  FilterSection,
  FilterSectionTitleText,
} from "../../Styles/StyledFilters";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import InputAnchor from "../../Inputs/InputAnchor";

export default function FilterByAddress() {
  const [open, setOpen] = React.useState(true);
  const [markAddress, setMarkAddress] = useState("");
  const [legalAddress, setLegalAddress] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по адресу</FilterSectionTitleText>
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>

      <Collapse in={open}>
        <InputAnchor
          placeholder="Адрес маркетинговый"
          onChange={(e) => {
            setMarkAddress(e);
            dispatch({
              type: "SET_FILTER_ADDRESSMARK",
              payload: e.toLowerCase(),
            });
          }}
        />
        <InputAnchor
          placeholder="Адрес юридический"
          onChange={(e) => {
            setLegalAddress(e);
            dispatch({
              type: "SET_FILTER_ADDRESSLEGAL",
              payload: e.toLowerCase(),
            });
          }}
        />
      </Collapse>
    </FilterSection>
  );
}
