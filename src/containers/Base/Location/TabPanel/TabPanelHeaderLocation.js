import React from 'react';
import { ButtonGroup } from '../../../../components/Styles/ButtonStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import { updateLocationProps, addLocation } from '../../../../store/actions/locationActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import { HeaderWrapper, HeaderTitleWrapper, StyledButton } from '../../../../styles/styles';
import { TitleLogo } from '../../../../components/Styles/ComponentsStyles';

const TabPanelHeaderLocation = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.location.currentLocation);

  const routeChange = () => {
    let path = `/base/locations`;
    history.push(path);
  };

  const links = [
    { id: '', value: 'Главная' },
    { id: 'base', value: 'Базы' },
    { id: 'base/locations', value: 'Список проектов' },
  ];

  return (
    <>
      <BreadCrumbs links={links} />
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <TitleLogo />
          <JobTitle>Местоположение {state.code}</JobTitle>
        </HeaderTitleWrapper>
        <ButtonGroup>
          <StyledButton
            backgroundColor="#008556"
            onClick={() => {
              if (props.locationID) {
                dispatch(updateLocationProps(state));
              } else {
                dispatch(addLocation(state));
              }
              routeChange();
            }}
          >
            Сохранить
          </StyledButton>
          <StyledButton backgroundColor="#2c5de5">Добавить конструкцию</StyledButton>
        </ButtonGroup>
      </HeaderWrapper>
    </>
  );
};

export default TabPanelHeaderLocation;
