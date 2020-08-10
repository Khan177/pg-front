import React from 'react';
import { RedDeleteBtn } from '../../../../../Styles/ButtonStyles';
import { InputTitle } from '../../../../../Styles/StyledBlocks';
import { Row } from '../../../../../Styles/StyledBlocks';
import red_can from '../../../../../../img/outdoor_furniture/red_can.svg';
import InputAnchor from '../../../../../Inputs/InputAnchor';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const InputWrapper = styled.div`
  width: 30%;
`;

export default function ExtraRow(props) {
  const state = useSelector((state) => state.contragents.currentContragent);
  const dispatch = useDispatch();
  return (
    <Row style={{ justifyContent: 'spaceBetween', padding: '0 7px 0 0' }}>
      <InputWrapper>
        <InputTitle>ФИО</InputTitle>
        <InputAnchor
          value={props.state ? props.state.fullname : ''}
          onChange={(e) => {
            dispatch(
              props.sendContragentValues('phoneContact', [
                ...state.phoneContact.map((contact) => {
                  if (contact._id === props.state._id) {
                    return { ...contact, fullname: e.target.value };
                  } else {
                    return contact;
                  }
                }),
              ])
            );
          }}
          placeholder="ФИО"
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Телефон</InputTitle>
        <InputAnchor
          value={props.state ? props.state.phone : ''}
          onChange={(e) => {
            dispatch(
              props.sendContragentValues('phoneContact', [
                ...state.phoneContact.map((contact) => {
                  if (contact._id === props.state._id) {
                    return { ...contact, phone: e.target.value };
                  } else {
                    return contact;
                  }
                }),
              ])
            );
          }}
          placeholder="Телефон"
        />
      </InputWrapper>

      <InputWrapper>
        <InputTitle>E-mail</InputTitle>
        <InputAnchor
          value={props.state ? props.state.email : ''}
          onChange={(e) => {
            dispatch(
              props.sendContragentValues('phoneContact', [
                ...state.phoneContact.map((contact) => {
                  if (contact._id === props.state._id) {
                    return { ...contact, email: e.target.value };
                  } else {
                    return contact;
                  }
                }),
              ])
            );
          }}
          placeholder="E-mail"
        />
      </InputWrapper>
      <RedDeleteBtn onClick={props.removeClickHandler}>
        <img src={red_can} alt="" />
      </RedDeleteBtn>
    </Row>
  );
}
