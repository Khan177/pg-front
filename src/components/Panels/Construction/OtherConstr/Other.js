import React from 'react';
import { BlockWrapper, Medium } from '../../../Styles/StyledBlocks';
import useStyles from '../../../Styles/UseInputMaterialStyles';
import Others from './Blocks/Others';
import ContactMap from './Blocks/Geo';
import { Container } from '../../../Styles/StyledBlocks';

export default function Other() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BlockWrapper>
        <Others style={{ minHeight: 800 }} />
        <Medium>
          <ContactMap />
        </Medium>
      </BlockWrapper>
    </Container>
  );
}
