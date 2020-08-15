import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import { getLocationProps } from '../../../../../store/actions/locationActions';
import { useSelector, useDispatch } from 'react-redux';

export const Address = (props) => {
  const state = useSelector((state) => state.location.currentLocation);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Адрес</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Город</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.city : ''}
              onChange={(e) => dispatch(getLocationProps('city', e.target.value))}
              placeholder="Алматы"
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Район</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.district : ''}
              onChange={(e) => dispatch(getLocationProps('district', e.target.value))}
              placeholder="Медеуский р-н."
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Почтовый индекс</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.postalCode : ''}
              onChange={(e) => dispatch(getLocationProps('postalCode', e.target.value))}
              placeholder="1012034"
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Юридический адрес</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.legalAddress : ''}
              onChange={(e) => dispatch(getLocationProps('legalAddress', e.target.value))}
              placeholder="Абая - ост. ГорВодоКанал"
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default Address;
