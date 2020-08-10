import React from 'react';
import { Large, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import styled from 'styled-components';
import InputAnchor from '../../../../Inputs/InputAnchor';
import { sendContragentValues } from '../../../../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

const InputWrapper = styled.div`
  width: 22%;
`;

export default function Commissions() {
  const state = useSelector((state) => state.contragents.currentContragent);
  const dispatch = useDispatch();
  return (
    <Large>
      <BlockTitle style={{ padding: '15px 26px 15px 24px' }}>Агентская коммисия</BlockTitle>
      <Row style={{ justifyContent: 'spaceBetween', padding: '0 20px 20px 20px' }}>
        <InputWrapper>
          <InputTitle>Тип АК</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.agencyComissionType : ''}
            onChange={(e) => dispatch(sendContragentValues('agencyComissionType', e.target.value))}
            placeholder="В процентах"
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Агентская коммисия</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.agencyComission : ''}
            onChange={(e) => dispatch(sendContragentValues('agencyComission', e.target.value))}
            placeholder="10"
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>АК распространяется</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.agencyDistributed : ''}
            onChange={(e) => dispatch(sendContragentValues('agencyDistributed', e.target.value))}
            placeholder="Без НДС"
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>На какие услуги распространяется АК</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.agencyServices : ''}
            onChange={(e) => dispatch(sendContragentValues('agencyServices', e.target.value))}
            placeholder="Печать"
          />
        </InputWrapper>
      </Row>
    </Large>
  );
}
