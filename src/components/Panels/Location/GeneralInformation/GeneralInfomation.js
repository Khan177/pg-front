import React, { useEffect } from 'react';
import EditInformation from './Blocks/EditInformation';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Address from './Blocks/Address';
import { YMaps, Map, Placemark, ListBox } from 'react-yandex-maps';
import Contract from './Blocks/Contract';
import AkimatResolution from './Blocks/AkimatResolution';
import GroundAct from './Blocks/GroundAct';
import Construction from './Blocks/Construction';
import { getProjectsData } from '../../../../store/actions/locationActions';
import { useDispatch, useSelector } from 'react-redux';

const GeneralInformation = () => {
  const state = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectsData());
  }, []);
  console.log(state);
  let newCoords;

  return (
    <Grid fluid className="resetPadding ">
      <Row xs={12} className="resetPadding">
        <Col xs={3}>
          <EditInformation />
        </Col>
        <Col xs={3}>
          <Address />
        </Col>
        <Col xs={6}>
          <YMaps>
            <Map
              style={{ height: '100%' }}
              defaultState={{ center: [43.24230063395435, 76.90130050681198], zoom: 9 }}
            >
              <Placemark
                geometry={{
                  type: 'Point',
                  coordinates: [43.24230063395435, 76.90130050681198],
                }}
                options={{
                  draggable: true,
                }}
                instanceRef={(ref) => {
                  if (ref) {
                    ref.geometry.events.add('change', function (e) {
                      newCoords = e.get('newCoordinates');
                    });
                  }
                }}
              />
              <ListBox 
                state={{a: newCoords}}
              />
            </Map>
          </YMaps>
        </Col>
      </Row>
      <Row xs={12} className="resetPadding" style={{ marginTop: '10px' }}>
        <Col xs={3}>
          <Construction />
        </Col>
        <Col xs={3}>
          <Construction />
        </Col>
        <Col xs={3}>
          <Construction />
        </Col>
        <Col xs={3}>
          <Construction />
        </Col>
      </Row>
      <Row xs={12} className="resetPadding" style={{ marginTop: '10px' }}>
        <Col xs={6}>
          <AkimatResolution />
        </Col>
        <Col xs={6}>
          <GroundAct />
        </Col>
      </Row>
      <Row xs={12} className="resetPadding" style={{ marginTop: '10px', marginBottom: '20px' }}>
        <Col xs={12}>
          <Contract />
        </Col>
      </Row>
    </Grid>
  );
};

export default GeneralInformation;
