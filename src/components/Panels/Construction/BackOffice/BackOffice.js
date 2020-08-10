import React from 'react';
import 'date-fns';
import Details from './Blocks/Details';
import Intro from './Blocks/Intro';
import Sides from './Blocks/Sides';
import useStyles from '../../../Styles/UseInputMaterialStyles';
import { BlockWrapper, Container } from '../../../Styles/StyledBlocks';
import { Col, Grid, Row } from 'react-flexbox-grid';

export default function BackOffice(props) {
  const classes = useStyles();
  return (
    <Grid fluid className=" resetPadding ">
      <Row xs={12} className=" resetPadding">
        {/*<Container className={classes.root}>*/}
        <Col xs={6}>
          {/*<BlockWrapper>*/}
          <Intro />
        </Col>
        <Col xs={6}>
          <Details />
        </Col>
        {/*</BlockWrapper>*/}
        <Col xs style={{ marginTop: 10 }}>
          <Sides />
        </Col>
      </Row>
    </Grid>
  );
}
