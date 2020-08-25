import React from 'react';
import Details from './Blocks/Details';
import Intro from './Blocks/Intro';
import Sides from './Blocks/Sides';

const BackOffice = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 0 45%', margin: '1vw 1vw 1vw 0' }}>
        <Intro />
      </div>
      <div style={{ flex: '1 0 45%', margin: '1vw 0 1vw 1vw' }}>
        <Details />
      </div>
      <div style={{ flex: '0 1 100%', margin: '1vw 0 1vw 0' }}>
        <Sides />
      </div>
    </div>
  );
};

export default BackOffice;
