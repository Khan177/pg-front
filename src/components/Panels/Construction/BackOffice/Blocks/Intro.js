import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../../../Styles/StyledBlocks';
import InputAnchor from '../../../../Inputs/InputAnchor';
import DatePicker from '../../../../Inputs/DatePicker';
import Multiline from '../../../../Inputs/Multiline';
import { getConstructionProps } from '../../../../../store/actions/constructionActions';
import { useSelector, useDispatch } from 'react-redux';

export default function Intro() {
  const current = useSelector((state) => state.construction.currentConstruction);
  const dispatch = useDispatch();
  return (
    <Medium style={{ height: '403px' }}>
      <BlockTitle>Общая информация</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: '36%' }}>
            <InputTitle>Город</InputTitle>
            <InputAnchor
              value={current.city || ''}
              placeholder="Город"
              onChange={(e) => dispatch(getConstructionProps('city', e.target.value))}
            />
          </div>
          <div style={{ width: '36%' }}>
            <InputTitle>Район</InputTitle>
            <InputAnchor
              value={current.district || ''}
              placeholder="Район"
              onChange={(e) => dispatch(getConstructionProps('district', e.target.value))}
            />
          </div>
          <div style={{ width: '20%' }}>
            <InputTitle>Почтовый индекс</InputTitle>
            <InputAnchor
              value={current.postalCode || ''}
              placeholder="Индекс"
              onChange={(e) => dispatch(getConstructionProps('postalCode', e.target.value))}
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '36%' }}>
            <InputTitle>Владелец</InputTitle>
            <InputAnchor
              value={current.owner || ''}
              placeholder="Владелец"
              onChange={(e) => dispatch(getConstructionProps('owner', e.target.value))}
            />
          </div>
          <div style={{ width: '60%' }}>
            <InputTitle>Маркетинговый адрес</InputTitle>
            <InputAnchor
              value={current.marketingAddress || ''}
              placeholder="Маркетинговый адрес"
              onChange={(e) => dispatch(getConstructionProps('marketingAddress', e.target.value))}
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: '30%' }}>
            <InputTitle>Дата создания</InputTitle>
            <DatePicker
              value={current.dateOfCreation || new Date()}
              onChange={(e) => {
                dispatch(getConstructionProps('dateOfCreation', e.toString()));
              }}
            />
          </div>
          <div style={{ width: '66%' }}>
            <InputTitle>Комментарий</InputTitle>
            <Multiline
              value={current.generalComment || ''}
              onChange={(e) => dispatch(getConstructionProps('generalComment', e.target.value))}
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
}
