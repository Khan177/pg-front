import React, { useEffect } from 'react';
import EditInformation from './Blocks/EditInformation';
import Address from './Blocks/Address';
import { YMaps, Map, Placemark, ListBox } from 'react-yandex-maps';
import Contract from './Blocks/Contract';
import AkimatResolution from './Blocks/AkimatResolution';
import GroundAct from './Blocks/GroundAct';
import Construction from './Blocks/Construction';
import { getCurrentLocation } from '../../../../store/actions/locationActions';
import { useDispatch, useSelector } from 'react-redux';

const GeneralInformation = () => {
  let newCoords;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 0 23%', margin: '1vw 1vw 1vw 0' }}>
        <EditInformation />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw' }}>
        <Address />
      </div>
      <div style={{ flex: '1 0 48%', margin: '1vw 0 1vw 1vw' }}>
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
          </Map>
        </YMaps>
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw 1vw 1vw 0' }}>
        <Construction />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw' }}>
        <Construction />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw' }}>
        <Construction />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw 0 1vw 1vw' }}>
        <Construction />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw 1vw 1vw 0' }}>
        <AkimatResolution />
      </div>
      <div style={{ flex: '1 0 23%', margin: '1vw 0 1vw 1vw' }}>
        <GroundAct />
      </div>
      <div style={{ flex: '1 0 100%', margin: '1vw 0' }}>
        <Contract />
      </div>
    </div>
  );
};

export default GeneralInformation;
