import React from 'react';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import icon_envelope from '../../img/partners/bx-envelope.svg';

export default function InputEnvelope(props) {
  return (
    <TextField
      style={{ width: '100%', marginBottom: 20, background: 'white' }}
      id=""
      type=""
      placeholder={props.placeholder}
      defaultValue=""
      value={props.value}
      onChange={props.onChange}
      variant="outlined"
      InputProps={{
        style: { fontSize: 14 },
        startAdornment: (
          <InputAdornment position="start">
            <img src={icon_envelope} alt="" />
          </InputAdornment>
        ),
      }}
    />
  );
}
