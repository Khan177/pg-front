import React from "react";import {TextField} from "@material-ui/core";import clsx from "clsx";import InputAdornment from "@material-ui/core/InputAdornment";import icon_envelope from "../../img/partners/bx-envelope.svg";import useStyles from "../Styles/UseInputMaterialStyles"export default function InputEnvelope(props) {    const classes = useStyles();    return(        <TextField            style={{width: "100%",  marginBottom: 20}}            id=""            type=""            placeholder={props.placeholder}            defaultValue=""            variant="outlined"            className={clsx(classes.margin, classes.textField)}            InputProps={{                startAdornment: <InputAdornment position="start">                    <img src={icon_envelope} alt=""/>                </InputAdornment>            }}        />    )}