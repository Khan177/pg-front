import React, { useState } from "react";
import { Collapse, FormControlLabel, Checkbox } from "@material-ui/core";
import {
  FilterSection,
  FilterSectionTitle,
  FilterSectionTitleText,
} from "../../../components/Styles/StyledFilters";
import ArrowDown from "../../../components/CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../../components/CollapseArrows/CollapseArrowIcons/ArrowUp";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [isConstructExist, setIsConstructExist] = useState(false);

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по договорам</FilterSectionTitleText>
        {open && <ArrowUp style={{ marginLeft: 20, marginRight: 0 }} />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>
      <Collapse in={open}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isConstructExist}
              onChange={() => {
                setIsConstructExist(true);
                dispatch({
                  type: "SET_FORM_STATUS",
                  payload: "true",
                });
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Есть конструкция"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!isConstructExist}
              onChange={() => {
                setIsConstructExist(false);
                dispatch({
                  type: "SET_FORM_STATUS",
                  payload: "false",
                });
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Нет конструкции"
        />
      </Collapse>
    </FilterSection>
  );
}
