import React from "react";import {TextField} from "@material-ui/core";import clsx from "clsx";import InputAdornment from "@material-ui/core/InputAdornment";import icon_home from "../../img/partners/bx-home.svg";import useStyles from "../Styles/UseInputMaterialStyles";export default function InoutHouse(props) {    const classes = useStyles();    return(        <TextField            id=""            type=""            style={{width: "100%", marginBottom: 20}}            placeholder={props.placeholder}            defaultValue=""            variant="outlined"            // className={clsx(classes.margin, classes.textField)}            InputProps={{                startAdornment: <InputAdornment position="start">                    <img src={icon_home} alt=""/>                </InputAdornment>            }}        />    )}