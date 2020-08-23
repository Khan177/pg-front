import React from 'react';
import { ButtonGroup } from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import {
  updateConstructionProps,
  addConstruction,
} from '../../../../store/actions/constructionActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TitleLogo } from '../../../../components/Styles/ComponentsStyles';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import { StyledButton, HeaderWrapper, HeaderTitleWrapper } from '../../../../styles/styles';

export default function TabPanelHeader(props) {
  const history = useHistory();
  const state = useSelector((state) => state.construction.currentConstruction);

  const routeChange = () => {
    let path = `/base/outdoor_furniture`;
    history.push(path);
  };

  const links = [
    { id: 'home', value: 'Главная' },
    { id: 'installation', value: 'Базы' },
    { id: 'constructions', value: 'Конструкции' },
  ];

  const dispatch = useDispatch();
  return (
    <>
      <BreadCrumbs links={links} />
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <TitleLogo />
          <JobTitle>Конструкция номер</JobTitle>
        </HeaderTitleWrapper>
        <ButtonGroup>
          <StyledButton
            backgroundColor="#008556"
            onClick={() => {
              if (props.constructionID) {
                dispatch(updateConstructionProps(state));
              } else {
                dispatch(addConstruction(state));
              }
              routeChange();
            }}
          >
            Сохранить
          </StyledButton>
          <StyledButton backgroundColor="#2c5de5">Создать сторону</StyledButton>
          <StyledButton backgroundColor="#d42d11">Демонтировать</StyledButton>
        </ButtonGroup>
      </HeaderWrapper>
    </>
  );
}
