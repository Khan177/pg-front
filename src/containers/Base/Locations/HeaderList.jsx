import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import { TitleLogo } from '../../../components/Styles/ComponentsStyles';
import React from 'react';
import { useHistory } from 'react-router';
import { JobTitle } from '../../../components/Styles/StyledBlocks';
import { ButtonGroup } from '../../../components/Styles/ButtonStyles';
import { StyledButton, HeaderWrapper, HeaderTitleWrapper } from '../../../styles/styles';

export default function HeaderList() {
  const history = useHistory();

  const routeChange = () => {
    let path = `/base/construction`;
    history.push(path);
  };

  const links = [
    { id: '', value: 'Главная' },
    { id: 'base', value: 'Базы' },
    { id: 'base/locations', value: 'Список местоположений' },
  ];

  return (
    <>
      <BreadCrumbs links={links} />
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <TitleLogo />
          <JobTitle>Список местоположений</JobTitle>
        </HeaderTitleWrapper>
        <ButtonGroup>
          <StyledButton backgroundColor="#008556" onClick={routeChange}>
            Создать новое
          </StyledButton>
        </ButtonGroup>
      </HeaderWrapper>
    </>
  );
}
