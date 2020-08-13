import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import Multiline from '../../../../Inputs/Multiline';
import { useSelector, useDispatch } from 'react-redux';

export const EditInformation = (props) => {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Редактирование информации</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Площадь (га)</InputTitle>
            <InputAnchor placeholder="34" />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Кадастровый номер</InputTitle>
            <InputAnchor placeholder="00-000-000-000" />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Целевое назначение</InputTitle>
            <InputAnchor placeholder="Рекламно-информационный объект" />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Комментарий</InputTitle>
            <Multiline />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default EditInformation;
