import React from 'react';
import { BlockWrapper, Medium } from '../../../Styles/StyledBlocks';
import useStyles from '../../../Styles/UseInputMaterialStyles';
import Others from './Blocks/Others';
import ContactMap from './Blocks/Geo';
import { Container } from '../../../Styles/StyledBlocks';

export default function Other() {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 45%', margin: '1vw 1vw 1vw 0' }}>
        <Others style={{ minHeight: 800 }} />
      </div>
      <div style={{ flex: '1 1 45%', margin: '1vw 0 1vw 1vw' }}>
        <Medium>
          <ContactMap />
        </Medium>
      </div>
    </div>
    // <Container className={classes.root}>
    //   <BlockWrapper>
    //     <Others style={{ minHeight: 800 }} />
    //     <Medium>
    //       <ContactMap />
    //     </Medium>
    //   </BlockWrapper>
    // </Container>
  );
}
