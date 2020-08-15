import React from 'react';
import {
  ButtonGroup,
  Controls,
  GreenButton,
  SecondaryBtnStyled,
} from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import { updateLocationProps } from '../../../../store/actions/locationActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const TabPanelHeaderLocation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.location.currentLocation);
  const routeChange = () => {
    let path = `/base/locations`;
    history.push(path);
  };
  console.log(state);
  return (
    <Controls>
      <JobTitle>Местоположение {state.code}</JobTitle>
      <ButtonGroup>
        <GreenButton
          onClick={() => {
            dispatch(updateLocationProps(state));
            routeChange();
          }}
        >
          Сохранить
        </GreenButton>
        <SecondaryBtnStyled>Добавить конструкцию</SecondaryBtnStyled>
      </ButtonGroup>
    </Controls>
  );
};

export default TabPanelHeaderLocation;
