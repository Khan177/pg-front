import React, { useState } from 'react';
import { LeftBar, StyledButton } from '../../../styles/styles';
import SearchBtn from '../../Base/Partners/LeftBar/SearchBtn';
import FilterBar from '../../Base/OutdoorFurniture/OutdoorFurnitureList/FilterBar/FilterBar';
import HeaderSales from './HeaderSales';

const BatchPlacement = () => {
  const [block, setBlock] = useState(0);

  const links = [
    { id: 'home', value: 'Главная' },
    { id: 'installation', value: 'Базы' },
    { id: 'constructions', value: 'Конструкции' },
  ];

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div className="flex-margin">
        <LeftBar>
          <SearchBtn />
        </LeftBar>
        <FilterBar />
      </div>
      <div style={{ width: '100vw', margin: '0 2vw 0 0' }}>
        <HeaderSales />
      </div>
      <style>{`
        .flex-margin {
          display: flex;
          margin: 0 2vw 0 0;
        }
      `}</style>
    </div>
  );
};

export default BatchPlacement;
