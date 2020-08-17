import React from 'react';
import {
  ButtonGroup,
  GreenButton,
  RedButton,
  SecondaryBtnStyled,
} from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import {
  updateConstructionProps,
  addConstruction,
} from '../../../../store/actions/constructionActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TitleLogo } from '../../../../components/Styles/ComponentsStyles';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '2vh 0 2vh 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TitleLogo />
          <JobTitle>Конструкция номер</JobTitle>
        </div>
        <ButtonGroup>
          <GreenButton
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
          </GreenButton>
          <SecondaryBtnStyled>Создать сторону</SecondaryBtnStyled>
          <RedButton>Демонтировать</RedButton>
        </ButtonGroup>
      </div>
    </>
  );
}
