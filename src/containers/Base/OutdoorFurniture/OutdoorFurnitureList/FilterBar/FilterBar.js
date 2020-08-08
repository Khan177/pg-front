import React from "react";
import FilterByLocation from "../../../../../components/Filters/FilterByLocation/FilterByLocation";
import FilterByAddress from "../../../../../components/Filters/FilterByAddress/FilterByAddress";
import FilterByParameters from "../../../../../components/Filters/FilterByParameters/FilterByParameters";
import {
  FilterMenu,
  FilterText,
  Form,
  SearchTitle,
} from "../../../../../components/Styles/StyledFilters";
import useStyles from "../../../../../components/Styles/UseInputMaterialStyles";
import ButtonGroup from "../../../../../components/ButtonGroup/ButtonGroup";

const FilterBar = () => {
  const classes = useStyles();
  return (
    <FilterMenu>
      <SearchTitle>
        <FilterText>Поиск</FilterText>
      </SearchTitle>
      <FilterByLocation />
      <FilterByAddress />
      <FilterByParameters />
      <ButtonGroup />
    </FilterMenu>
  );
};

export default FilterBar;
