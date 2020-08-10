import React from 'react';
import useStyles from '../../../Styles/UseInputMaterialStyles';
import { Container, BlockWrapper } from '../../../Styles/StyledBlocks';
import Accounting from './Blocks/Accounting';

export default function AccDept() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <BlockWrapper>
        <Accounting />
      </BlockWrapper>
    </Container>
  );
}
