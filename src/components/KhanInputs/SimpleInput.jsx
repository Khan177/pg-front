import React from "react";

import { TextField, InputAdornment } from "@material-ui/core";

const Input = ({ onChange, icon, placeholder }) => {
  return (
    <TextField
      style={{
        width: "100%",
        marginBottom: 20,
        background: "white",
        outline: "none",
      }}
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      onChange={(e) => onChange(e)}
      InputProps={{
        style: { fontSize: 14 },
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};
export default Input;
