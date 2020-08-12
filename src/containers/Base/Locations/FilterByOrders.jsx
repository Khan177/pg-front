import React from "react";
import { Collapse } from "@material-ui/core";
import { LocationCity } from "@material-ui/icons";
import {
  FilterSection,
  FilterSectionTitle,
  FilterSectionTitleText,
} from "../../../components/Styles/StyledFilters";
import SimpleInput from "../../../components/KhanInputs/SimpleInput";
import ArrowDown from "../../../components/CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../../components/CollapseArrows/CollapseArrowIcons/ArrowUp";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по договорам</FilterSectionTitleText>
        {open && <ArrowUp style={{ marginLeft: 20, marginRight: 0 }} />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>
      <Collapse in={open}>
        <SimpleInput
          placeholder="Номер договора"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_ORDERNUMBER",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
        <SimpleInput
          placeholder="Номер начала"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_STARTDATE",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
        <SimpleInput
          placeholder="Номер окончания"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_ENDDATE",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
      </Collapse>
    </FilterSection>
  );
}
