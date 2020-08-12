import React from 'react';
import { LeftBarStyled } from '../Styles/ComponentsStyles';

export default function LeftBar(props) {
  return <LeftBarStyled>{props.children}</LeftBarStyled>;
}
