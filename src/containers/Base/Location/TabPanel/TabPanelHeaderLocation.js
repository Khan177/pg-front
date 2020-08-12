import React from 'react';
import {
  ButtonGroup,
  Controls,
  GreenButton,
  SecondaryBtnStyled,
} from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';

const TabPanelHeaderLocation = () => {
  return (
    <Controls>
      <JobTitle>Местоположение</JobTitle>
      <ButtonGroup>
        <GreenButton>Сохранить</GreenButton>
        <SecondaryBtnStyled>Добавить конструкцию</SecondaryBtnStyled>
      </ButtonGroup>
    </Controls>
  );
};

export default TabPanelHeaderLocation;
