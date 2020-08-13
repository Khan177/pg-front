import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import Multiline from '../../../../Inputs/Multiline';
import { useSelector, useDispatch } from 'react-redux';

export const Address = (props) => {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Адрес</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Город</InputTitle>
            <InputAnchor placeholder="Алматы" />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Район</InputTitle>
            <InputAnchor placeholder="Медеуский р-н." />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Почтовый индекс</InputTitle>
            <InputAnchor placeholder="1012034" />
          </div>
        </Row>
        <Row>
          <div style={{ width: '100%' }}>
            <InputTitle>Юридический адрес</InputTitle>
            <InputAnchor placeholder="Абая - ост. ГорВодоКанал" />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default Address;
