import React from 'react';
import { BlockBody, Quarter, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import { sendContragentValues } from '../../../../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function BankAccount() {
  const state = useSelector((state) => state.contragents.currentContragent);
  const dispatch = useDispatch();
  return (
    <Quarter>
      <BlockTitle>Банковский счет</BlockTitle>
      <BlockBody>
        <div style={{ width: '100%', marginBottom: '21px' }}>
          <InputTitle>Банк получателя</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.destinationBank : ''}
            onChange={(e) => dispatch(sendContragentValues('destinationBank', e.value))}
            placeholder="АО «Банк получателя»"
          />
        </div>
        <div style={{ width: '100%', marginBottom: '21px' }}>
          <InputTitle>ИИК</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.iik : ''}
            onChange={(e) => dispatch(sendContragentValues('iik', e.value))}
            placeholder="ИИК"
          />
        </div>
        <div style={{ width: '100%', marginBottom: '21px' }}>
          <InputTitle>БИК</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.bik : ''}
            onChange={(e) => dispatch(sendContragentValues('bik', e.value))}
            placeholder="БИК"
          />
        </div>
        <div style={{ width: '100%', marginBottom: '21px' }}>
          <InputTitle>Кбе</InputTitle>
          <InputAnchor
            value={Object.keys(state).length !== 0 ? state.kbe : ''}
            onChange={(e) => dispatch(sendContragentValues('kbe', e.value))}
            placeholder="Кбе"
          />
        </div>
      </BlockBody>
    </Quarter>
  );
}
