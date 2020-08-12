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
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import { useDispatch, useSelector } from "react-redux";

export default function FilterLocation() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => [
    { value: "", label: "Выберите город" },
    ...state.table.formCities.map((city) => {
      return { value: city, label: city };
    }),
  ]);
  const districts = useSelector((state) => [
    { value: "", label: "Выберите город" },
    ...state.table.formDistricts.map((district) => {
      return { value: district, label: district };
    }),
  ]);
  const zips = useSelector((state) => [
    { value: "", label: "Выберите город" },
    ...state.table.formPostalCodes.map((zip) => {
      return { value: zip, label: zip };
    }),
  ]);

  const [open, setOpen] = React.useState(true);

  const cityChangeHandler = (option) => {
    dispatch({
      type: "SET_FILTER_CITY",
      payload: option.value.toLowerCase(),
    });
  };

  const districtChangeHandler = (option) => {
    console.log(option.value);
    dispatch({
      type: "SET_FILTER_DISTRICT",
      payload: option.value.toLowerCase(),
    });
  };

  const zipChangeHandler = (option) => {
    dispatch({
      type: "SET_FILTER_POSTALCODE",
      payload: option.value.toLowerCase(),
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
