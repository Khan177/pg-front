import React from 'react';
import Tech from './Blocks/Tech';
import TechParams from './Blocks/TechParams';

const TechDept = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 45%', margin: '1vw 1vw 1vw 0' }}>
        <Tech />
      </div>
      <div style={{ flex: '1 1 45%', margin: '1vw 0 1vw 1vw' }}>
        <TechParams />
      </div>
    </div>
  );
}

export default TechDept;