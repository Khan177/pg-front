import React from 'react';
import {
  ButtonGroup,
  Controls,
  GreenButton,
  RedButton,
  SecondaryBtnStyled,
} from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import { updateConstructionProps, addConstruction } from '../../../../store/actions/constructionActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function TabPanelHeader(props) {
  const history = useHistory();
  const state = useSelector((state) => state.construction.currentConstruction);

  const routeChange = () => {
    let path = `/base/outdoor_furniture`;
    history.push(path);
  };

  const dispatch = useDispatch();
  return (
    <Controls>
      <JobTitle>Конструкция номер</JobTitle>
      <ButtonGroup>
        <GreenButton
          onClick={(event) => {
            if (props.constructionID) {
              dispatch(updateConstructionProps(state));
            } else {
              dispatch(addConstruction(state));
            }
            routeChange();
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
