import React from 'react';
import { HeaderWrapper, HeaderTitleWrapper, StyledButton } from '../../../../styles/styles';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import { TitleLogo } from '../../../../components/Styles/ComponentsStyles';
import { JobTitle } from '../../../../components/Styles/StyledBlocks';
import { ButtonGroup } from '../../../../components/Styles/ButtonStyles';

const HeaderAgreements = () => {
  const links = [
    { id: '', value: 'Главная' },
    { id: 'base', value: 'Базы' },
    { id: 'base/projects', value: 'Список проектов' },
  ];

  return (
    <>
      <BreadCrumbs links={links} />
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <TitleLogo />
          <JobTitle>Документы</JobTitle>
        </HeaderTitleWrapper>
        <ButtonGroup>
          <StyledButton backgroundColor="#2c5de5">Создать договор</StyledButton>
        </ButtonGroup>
      </HeaderWrapper>
    </>
  );
};

export default HeaderAgreements;
