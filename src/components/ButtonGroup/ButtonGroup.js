import React from "react";
import { useDispatch } from "react-redux";
import { BtnGroup, ResetButton, SubmitButton } from "../Styles/ButtonStyles";
import { getOutdoorFurnitureData } from "../../store/actions";

export default function ButtonGroup() {
  const dispatch = useDispatch();
  return (
    <BtnGroup>
      <ResetButton
        onClick={() => {
          dispatch({ type: "CLEAR_FILTER" });
          dispatch(getOutdoorFurnitureData());
        }}
      >
        Очистить
      </ResetButton>
      <SubmitButton onClick={() => dispatch({ type: "FILTER_OUTDOOR_TABLE" })}>
        Искать
      </SubmitButton>
    </BtnGroup>
  );
}
