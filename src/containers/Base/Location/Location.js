import React, { useEffect } from 'react';
import { PageWrap, ContentWrap } from '../../../components/Styles/ComponentsStyles';
import SearchButton from '../../../components/ButtonGroup/SearchButton';
import LeftBar from '../../../components/LeftBar/LeftBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { FilterMenu, SearchTitle, FilterText } from '../../../components/Styles/StyledFilters';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import InnerForm from './TabPanel/TabPanelLocation';

const Location = (props) => {
  return (
    <Grid fluid className="resetPadding">
      <Row className="resetPadding">
        <Col>
          <LeftBar>
          </LeftBar>
        </Col>
        <Col xs={11} className="resetPadding">
          <InnerForm />
        </Col>
      </Row>
    </Grid>
  );
};

export default Location;
