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
        <FilterSectionTitleText>Другое</FilterSectionTitleText>
        {open && <ArrowUp style={{ marginLeft: 20, marginRight: 0 }} />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>
      <Collapse in={open}>
        <SimpleInput
          placeholder="Постановление от акимата"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_AKIMAT",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
        <SimpleInput
          placeholder="Акт на землю"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_ACT",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
        <SimpleInput
          placeholder="Статус оформления"
          onChange={(e) => {
            dispatch({
              type: "SET_FORM_STATUSNON",
              payload: e.target.value.toLowerCase(),
            });
          }}
          icon={<LocationCity style={{ color: "rgb(178,187,201)" }} />}
        />
      </Collapse>
    </FilterSection>
  );
}
