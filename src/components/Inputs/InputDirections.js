import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import icon_directions from '../../img/partners/bx-directions.svg';
import React from 'react';

export default function InputDirections(props) {
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
            <img src={icon_directions} alt="" />
          </InputAdornment>
        ),
      }}
    />
  );
}
