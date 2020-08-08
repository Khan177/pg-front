import React from "react";
import { Collapse } from "@material-ui/core";
import {
  FilterSection,
  FilterSectionTitle,
  FilterSectionTitleText,
} from "../../Styles/StyledFilters";
import SelectGlobe from "../../Inputs/SelectGlobe";
import SelectDirections from "../../Inputs/SelectDirections";
import SelectEnvelope from "../../Inputs/SelectEnvelope";
import cities from "./filterFeed/cities";
import districts from "./filterFeed/districts";
import zips from "./filterFeed/zips";
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import { useDispatch } from "react-redux";

export default function FilterLocation() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const [city, setCity] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [zip, setZip] = React.useState("");

  const cityChangeHandler = (option) => {
    setCity(option.value);
    dispatch({
      type: "SET_FILTER_CITY",
      payload: city,
    });
  };

  const districtChangeHandler = (option) => {
    setDistrict(option.value);
    console.log(option.value);
    dispatch({
      type: "SET_FILTER_DISTRICT",
      payload: district,
    });
  };

  const zipChangeHandler = (option) => {
    setZip(option.value);
    dispatch({
      type: "SET_FILTER_POSTALCODE",
      payload: zip,
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по местоположению</FilterSectionTitleText>
        {open && <ArrowUp style={{ marginLeft: 20, marginRight: 0 }} />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>
      <Collapse in={open}>
        <SelectGlobe
          options={cities}
          onChange={cityChangeHandler}
          placeholder="Выберите город"
        />

        <SelectDirections
          options={districts}
          onChange={districtChangeHandler}
          placeholder="Выберите район"
        />

        <SelectEnvelope
          options={zips}
          onChange={zipChangeHandler}
          placeholder="Выберите индекс"
        />
      </Collapse>
    </FilterSection>
  );
}
