// import React from "react";
// import {ButtonGroup, Controls, GreenButton, RedButton, SecondaryBtnStyled} from "../../../../components/Styles/ButtonStyles";
// import {JobTitle} from "../../../../components/Styles/StyledBlocks"
//
// export default function TabPanelFormHeader() {
//     return (
//         <>
//             <Controls>
//                 <JobTitle>
//                   Контрагент имя
//                 </JobTitle>
//                 <ButtonGroup>
//                     <GreenButton>
//                         Сохранить
//                     </GreenButton>
//                     <RedButton>
//                         Удалить
//                     </RedButton>
//                     <SecondaryBtnStyled>
//                         Сохранить договор
//                     </SecondaryBtnStyled>
//                 </ButtonGroup>
//             </Controls>
//         </>
//     )
//
// }
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import {
  ListHeader,
  ListTitle,
  StyledButton,
  Title,
  TitleLogo,
} from '../../../../components/Styles/ComponentsStyles';
import React from 'react';
import { useHistory } from 'react-router';
import { SecondaryBtnStyled } from '../../../../components/Styles/ButtonStyles';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { updateContragent } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function HeaderList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.contragents.currentContragent);

  const routeChange = (e) => {
    dispatch(updateContragent(state));
    alert('Обновлено');
    e.preventDefault();
    // let path = `/base/partners/`;
    // history.push(path);
  };

  const links = [
    { id: 'home', value: 'Главная' },
    { id: 'installation', value: 'Базы' },
    { id: 'constructions', value: 'Контрагенты' },
  ];

  return (
    <>
      <Grid fluid className="resetPadding">
        <Row className="resetPadding">
          <Col xs={12}>
            <BreadCrumbs links={links} />
          </Col>
        </Row>
        <Row className="ListTitleInfo">
          <Col xs className="ListTitleHeader">
            <TitleLogo />
            <Title>Конструкции</Title>
          </Col>
          <Col xs className="ListTitleInfoButton">
            <StyledButton onClick={routeChange}>Создать конструкцию</StyledButton>
            <SecondaryBtnStyled onClick={routeChange}>Создать договор</SecondaryBtnStyled>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
