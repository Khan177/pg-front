import React from 'react';
import AgreementsSearch from './AgreementsSearch';

const AgreementsTab = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 0 20%', margin: '1vw 1vw 1vw 0' }}>
        <AgreementsSearch />
      </div>
      <div style={{ flex: '1 0 50%', margin: '1vw 0 1vw 1vw' }}>
        Таблица договоров
      </div>
    </div>
  );
};

export default AgreementsTab;
