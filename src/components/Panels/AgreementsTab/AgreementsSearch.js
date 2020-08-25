import React from 'react';
import { BlockBody, Medium, Row, BlockTitle, InputTitle } from '../../Styles/StyledBlocks';
import InputAnchor from '../../Inputs/InputAnchor';
import DatePicker from '../../Inputs/DatePicker';
import GroupRadio from '../../Inputs/GroupRadio';
import { StyledButton } from '../../../styles/styles';

const AgreementsSearch = () => {
  return (
    <Medium>
      <BlockTitle>Поиск договора</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ margin: '0 0.75vw 0 0' }}>
            <InputTitle>Номер договора</InputTitle>
            <InputAnchor placeholder="Номер договора" />
          </div>
          <div style={{ margin: '0 0 0 0.75vw' }}>
            <InputTitle>Инициатор</InputTitle>
            <InputAnchor placeholder="Инициатор" />
          </div>
        </Row>
        <Row>
          <div style={{ margin: '0 0.75vw 0 0' }}>
            <InputTitle>Наименование контрагента</InputTitle>
            <InputAnchor placeholder="Наименование контрагента" />
          </div>
          <div style={{ margin: '0 0 0 0.75vw' }}>
            <InputTitle>Создатель</InputTitle>
            <InputAnchor placeholder="Создатель" />
          </div>
        </Row>
        <Row>
          <div style={{ margin: '0 0.75vw 0 0' }}>
            <InputTitle>Тип договора</InputTitle>
            <InputAnchor placeholder="Тип договора" />
          </div>
          <div style={{ margin: '0 0 0 0.75vw' }}>
            <InputTitle>Дата начала действия договора</InputTitle>
            <InputAnchor placeholder="Дата" />
          </div>
        </Row>
        <Row>
          <div style={{ margin: '0 0.75vw 0 0' }}>
            <InputTitle>Дата заключения договора</InputTitle>
            <DatePicker value={new Date()} />
          </div>
          <div style={{ margin: '0 0 0 0.75vw' }}>
            <InputTitle>Дата окончания действия договора</InputTitle>
            <DatePicker value={new Date()} />
          </div>
        </Row>
        <Row>
          <div>
            <InputTitle>Статус возврата</InputTitle>
            <GroupRadio />
          </div>
        </Row>
        <Row>
          <StyledButton style={{ margin: '0' }} backgroundColor="#2c5de5">Выгрузить</StyledButton>
        </Row>
      </BlockBody>
    </Medium>
  );
};

export default AgreementsSearch;
