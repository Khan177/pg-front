import React from 'react';
import {
  BlockBody,
  Row,
  Medium,
  BlockTitle,
  InputTitle,
} from '../../../../Styles/StyledBlocks';
import GroupRadio from '../../../../Inputs/GroupRadio';
import InputAnchor from '../../../../Inputs/InputAnchor';
import { SecondaryBtnStyled } from '../../../../Styles/ButtonStyles';
import { getConstructionProps } from '../../../../../store/actions/constructionActions';
import { useSelector, useDispatch } from 'react-redux';

export default function Details() {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Детали конструкции</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '47%' }}>
            <InputTitle>Семейство конструкции</InputTitle>
            <InputAnchor
              value={current.familyConstruction || ''}
              placeholder="Семейство"
              onChange={(e) => dispatch(getConstructionProps('familyConstruction', e.target.value))}
            />
          </div>
          <div style={{ width: '47%' }}>
            <InputTitle>Доступность конструкции</InputTitle>
            <InputAnchor
              value={current.availabilityConstruction || ''}
              placeholder="Доступность"
              onChange={(e) =>
                dispatch(getConstructionProps('availabilityConstruction', e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '47%' }}>
            <InputTitle>Подсемейство конструкции</InputTitle>
            <InputAnchor
              value={current.subfamilyConstruction || ''}
              placeholder="Подсемейство"
              onChange={(e) =>
                dispatch(getConstructionProps('subfamilyConstruction', e.target.value))
              }
            />
          </div>
          <div style={{ width: '47%' }}>
            <InputTitle>Модель</InputTitle>
            <InputAnchor
              value={current.model || ''}
              placeholder="Модель"
              onChange={(e) => dispatch(getConstructionProps('model', e.target.value))}
            />
          </div>
        </Row>
        <Row>
          <div>
            <InputTitle>Наличие земли</InputTitle>
            <GroupRadio
              value={current.availabilityLand || ''}
              onChange={(e) => dispatch(getConstructionProps('availabilityLand', e.target.value))}
            />
          </div>
          <SecondaryBtnStyled>Открыть местоположение</SecondaryBtnStyled>
        </Row>
      </BlockBody>
    </Medium>
  );
}
