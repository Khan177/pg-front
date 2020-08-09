import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from "@material-ui/core";
import {
  FilterSectionTitle,
  FilterSection,
  FilterSectionTitleText,
} from "../../Styles/StyledFilters";
import UseInputMaterialStyles from "../../Styles/UseInputMaterialStyles";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import InputAnchor from "../../Inputs/InputAnchor";
import cities from "./filterFeed/cities";
import InputGlobe from "../../Inputs/InputGlobe";
import SelectAnchor from "../../Inputs/SelectAnchor";

export default function FilterByCompany() {
  const classes = UseInputMaterialStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [city, setCity] = React.useState("");
  const cityChangeHandler = (option) => {
    setCity(option.value);
    dispatch({
      type: "SET_FILTER_PARTNER",
      payload: option.value.toLowerCase(),
    });
  };

  const dispatch = useDispatch();
  const partners = useSelector((state) => [
    { value: "", label: "Контрагент" },
    ...state.table.formContragents.map((c) => {
      return { value: c, label: c };
    }),
  ]);

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по параметрам</FilterSectionTitleText>
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>

      <Collapse in={open}>
        <SelectAnchor
          options={partners}
          onChange={cityChangeHandler}
          placeholder="Контрагент"
        />
        <InputAnchor
          placeholder="Бренд"
          onChange={(e) =>
            dispatch({
              type: "SET_FILTER_BRAND",
              payload: e.target.value.toLowerCase(),
            })
          }
        />

        <InputAnchor
          placeholder="Рекламодатель"
          onChange={(e) =>
            dispatch({
              type: "SET_FILTER_ADVERTISER",
              payload: e.target.value.toLowerCase(),
            })
          }
        />
        <InputAnchor
          placeholder="Сектор деятельности"
          onChange={(e) =>
            dispatch({
              type: "SET_FILTER_SECTOR",
              payload: e.target.value.toLowerCase(),
            })
          }
        />
      </Collapse>
    </FilterSection>
  );
}
