import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import Multiline from '../../../../Inputs/Multiline';
import { useSelector, useDispatch } from 'react-redux';

export const Contract = (props) => {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Договор аренды</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '19%' }}>
            <InputTitle>Статус оформления</InputTitle>
            <InputAnchor placeholder="На оформлении" />
          </div>
          <div style={{ width: '19%' }}>
            <InputTitle>Номер договора</InputTitle>
            <InputAnchor placeholder="347856345" />
          </div>
          <div style={{ width: '19%' }}>
            <InputTitle>Начало договора</InputTitle>
            <InputAnchor placeholder="20.09.2021" />
          </div>
          <div style={{ width: '19%' }}>
            <InputTitle>Регистрация договора</InputTitle>
            <InputAnchor placeholder="20.09.2021" />
          </div>
          <div style={{ width: '19%' }}>
            <InputTitle>Окончание договора</InputTitle>
            <InputAnchor placeholder="20.09.2021" />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default Contract;
