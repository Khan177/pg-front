import React, { useState } from "react";
import { Collapse } from "@material-ui/core";
import {
  Checks,
  FilterSection,
  FilterSectionTitle,
  FilterSectionTitleText,
} from "../../Styles/StyledFilters";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAnchor from "../../Inputs/InputAnchor";
import SelectAnchor from "../../Inputs/SelectAnchor";
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown";
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp";
import { useDispatch } from "react-redux";

export default function FilterByParameters() {
  const light = [
    { value: false, label: "Не горит" },
    { value: true, label: "Горит" },
  ];

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const [open, setOpen] = React.useState(true);
  const [burning, setBurning] = useState();
  const [inventory, setInventory] = useState();
  const [format, setFormat] = useState();
  const [code, setCode] = useState();
  const [coord, setCoord] = useState();

  const handleChangeCheck = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  return (
    <FilterSection>
      <FilterSectionTitle onClick={handleClick}>
        <FilterSectionTitleText>Поиск по параметрам</FilterSectionTitleText>
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </FilterSectionTitle>

      <Collapse in={open}>
        <InputAnchor
          placeholder="Код конструкции"
          onChange={(e) => {
            setCode(e.target.value);
            dispatch({ type: "SET_FILTER_CODE", payload: code });
          }}
        />

        <InputAnchor
          placeholder="Инвентарный номер 1С"
          onChange={(e) => {
            setInventory(e.target.value);
            dispatch({ type: "SET_FILTER_INVENTORY", payload: inventory });
          }}
        />

        <InputAnchor
          placeholder="Формат"
          onChange={(e) => {
            setInventory(e.target.value);
            dispatch({ type: "SET_FILTER_FORMAT", payload: format });
          }}
        />

        <SelectAnchor
          options={light}
          placeholder="Горит/Не горит"
          onChange={(e) => {
            setInventory(e.target.value);
            dispatch({ type: "SET_FILTER_ISBURNING", payload: burning });
          }}
        />

        <InputAnchor
          placeholder="Координаты"
          onChange={(e) => {
            setInventory(e.target.value);
            dispatch({ type: "SET_FILTER_COORDINATES", payload: coord });
          }}
        />

        <Checks>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChangeCheck}
                name="checkedA"
                color="primary"
                size="small"
              />
            }
            label="Демонтированная конструкция"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeCheck}
                name="checkedB"
                color="primary"
                size="small"
              />
            }
            label="Доступная конструкция"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChangeCheck}
                name="checkedF"
                color="primary"
                size="small"
              />
            }
            label="Наличие помехи"
          />
        </Checks>
      </Collapse>
    </FilterSection>
  );
}
