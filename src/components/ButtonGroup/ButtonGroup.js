import React from "react";
import { useDispatch } from "react-redux";
import { BtnGroup, ResetButton, SubmitButton } from "../Styles/ButtonStyles";
import {
  getOutdoorFurnitureData,
  filterOutdoorTable,
} from "../../store/actions/actions";

export default function ButtonGroup({ submit, reset }) {
  const dispatch = useDispatch();
  return (
    <BtnGroup>
      <ResetButton onClick={() => reset()}>Очистить</ResetButton>
      <SubmitButton onClick={() => dispatch(filterOutdoorTable())}>
        Искать
      </SubmitButton>
    </BtnGroup>
  );
}
