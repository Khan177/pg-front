import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import Multiline from '../../../../Inputs/Multiline';
import { useSelector, useDispatch } from 'react-redux';

export const AkimatResolution = (props) => {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Постановление от акимата</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '49%' }}>
            <InputTitle>Номер</InputTitle>
            <InputAnchor placeholder="347856345" />
          </div>
          <div style={{ width: '49%' }}>
            <InputTitle>Дата</InputTitle>
            <InputAnchor placeholder="20.09.2021" />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default AkimatResolution;