import React from "react";
import {
  ButtonGroup,
  Controls,
  GreenButton,
  RedButton,
  SecondaryBtnStyled,
} from "../../../../components/Styles/ButtonStyles";
import { JobTitle } from "../../../../components/Styles/StyledBlocks";
import { updateConstruction } from "../../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
export default function TabPanelHeader() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  return (
    <Controls>
      <JobTitle>Конструкция номер</JobTitle>
      <ButtonGroup>
        <GreenButton
          onClick={(event) => {
            event.preventDefault();
            dispatch(updateConstruction(current));
            alert("Обновлена конструкция");
          }}
        >
          Сохранить
        </GreenButton>
        <SecondaryBtnStyled>Создать сторону</SecondaryBtnStyled>
        <RedButton>Демонтировать</RedButton>
      </ButtonGroup>
    </Controls>
  );
}
