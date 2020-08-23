import { TextField } from '@material-ui/core';
import React from 'react';

export default function Multiline(props) {
  return (
    <TextField
      id="comments"
      inputProps={{ maxLength: 150 }}
      multiline
      placeholder="..."
      value={props.value}
      onChange={props.onChange}
      variant="outlined"
      style={{ width: '100%', background: ' white' }}
    />
  );
}
