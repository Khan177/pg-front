import React from "react";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import icon_home from "../../img/partners/bx-home.svg";

export default function InoutHouse(props) {


    return(
        <TextField
            id=""
            type=""
            style={{width: "100%", marginBottom: 20, background:"white"}}
            placeholder={props.placeholder}
            defaultValue=""
            value={props.value}
            onChange={props.onChange}
            variant="outlined"
            InputProps={{style: {fontSize: 14},
                startAdornment: <InputAdornment position="start">
                    <img src={icon_home} alt=""/>
                </InputAdornment>
            }}
        />
    )

}
