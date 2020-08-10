import React, { useEffect } from 'react';
import './../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css';
import { Section } from '../../../../components/Styles/ComponentsStyles';
import makeColumns from './DataTable/columns';
import makeData from './DataTable/data';
import Table from '../../../../components/Table/Table';
import HeaderList from './HeaderList';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getContragentsData } from '../../../../store/actions';

export default function PartnersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(getContragentsData());
  }, [dispatch]);
  const state = useSelector((state) => state.contragents.contragentsData);
  const columns = React.useMemo(() => makeColumns, []);

  return (
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <HeaderList />
          <Table columns={columns} data={state} />
        </Col>
      </Row>
    </Grid>
  );
}
