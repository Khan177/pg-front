import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import Multiline from '../../../../Inputs/Multiline';
import { getLocationProps } from '../../../../../store/actions/locationActions';
import { useSelector, useDispatch } from 'react-redux';

export const EditInformation = (props) => {
  const state = useSelector((state) => state.location.currentLocation);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Редактирование информации</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Площадь (га)</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.area : ''}
              onChange={(e) => dispatch(getLocationProps('area', e.target.value))}
              placeholder="34"
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Кадастровый номер</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.cadastralNumber : ''}
              onChange={(e) => dispatch(getLocationProps('cadastralNumber', e.target.value))}
              placeholder="00-000-000-000"
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Целевое назначение</InputTitle>
            <InputAnchor
              value={Object.keys(state).length !== 0 ? state.specialPurpose : ''}
              onChange={(e) => dispatch(getLocationProps('specialPurpose', e.target.value))}
              placeholder="Рекламно-информационный объект"
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Комментарий</InputTitle>
            <Multiline
              value={Object.keys(state).length !== 0 ? state.comment : ''}
              onChange={(e) => dispatch(getLocationProps('comment', e.target.value))}
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default EditInformation;
