import React from 'react';
import { InputTitle, Row } from '../../../../../Styles/StyledBlocks';
import { RedDeleteBtn } from '../../../../../Styles/ButtonStyles';
import red_can from '../../../../../../img/outdoor_furniture/red_can.svg';
import styled from 'styled-components';
import InputAnchor from '../../../../../Inputs/InputAnchor';
import { useDispatch, useSelector } from 'react-redux';

const InputWrapper = styled.div`
  width: 15%;
`;

export default function ExtraRow(props) {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Row style={{ justifyContent: 'spaceBetween', padding: '0 7px 0 0' }}>
      <InputWrapper>
        <InputTitle>Формат</InputTitle>
        <InputAnchor
          value={props.current ? props.current.format : ''}
          placeholder="Формат"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      format: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Сторона</InputTitle>
        <InputAnchor
          value={props.current ? props.current.side : ''}
          placeholder="Сторона"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      side: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Рекламная сторона</InputTitle>
        <InputAnchor
          value={props.current ? props.current.advertisingSide : ''}
          placeholder="Рекламная сторона"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      advertisingSide: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Назначение стороны</InputTitle>
        <InputAnchor
          value={props.current ? props.current.purposeSide : ''}
          placeholder="Назначение"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      purposeSide: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Размеры(см)</InputTitle>
        <InputAnchor
          value={props.current ? props.current.sizes : ''}
          placeholder="Размеры"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      sizes: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Доступность стороны</InputTitle>
        <InputAnchor
          value={props.current ? props.current.availabilitySide : ''}
          placeholder="Доступность"
          onChange={(e) => {
            dispatch(
              props.sendValues('sides', [
                ...current.sides.map((side) => {
                  if (side._id === props.current._id) {
                    let obj = {
                      ...side,
                      availabilitySide: e.target.value,
                    };
                    return obj;
                  } else {
                    return side;
                  }
                }),
              ])
            );
          }}
        />
      </InputWrapper>
      <RedDeleteBtn onClick={props.removeClickHandler}>
        <img src={red_can} alt="" />
      </RedDeleteBtn>
    </Row>
  );
}
