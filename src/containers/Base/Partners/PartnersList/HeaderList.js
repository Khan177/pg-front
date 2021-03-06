import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import {
  ListHeader,
  ListTitle,
  StyledButton,
  Title,
  TitleLogo,
} from "../../../../components/Styles/ComponentsStyles";
import React from "react";
import { useHistory } from "react-router";
import { Col, Grid, Row } from "react-flexbox-grid";
import "../Style/style.css";
import { SecondaryBtnStyled } from "../../../../components/Styles/ButtonStyles";

export default function HeaderList() {
  const history = useHistory();

  const routeChange = () => {
    let path = `/base/partners/info`;
    history.push(path);
  };

  const links = [
    { id: "home", value: "Главная" },
    { id: "installation", value: "Базы" },
    { id: "constructions", value: "Контрагенты" },
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
            <Title>Контрагенты</Title>
          </Col>
          <Col xs className="ListTitleInfoButton">
            <StyledButton onClick={routeChange}>
              Создать контрагента
            </StyledButton>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
