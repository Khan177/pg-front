import React from "react";import {TextField} from "@material-ui/core";import clsx from "clsx";import InputAdornment from "@material-ui/core/InputAdornment";import icon_anchor from "../../../../../../img/outdoor_furniture/filter_icons/bx-ancor.svg";import {BlockBody, BlockTitle, InputTitle, Medium, Row, BlockTitleText} from "./Styles/StyledBlocks"import useStyles from "./Styles/UseMaterialStyles"export default function TechParams() {    const classes = useStyles();    return (        <Medium>            <BlockTitle>                <BlockTitleText>                    Технические параметры                </BlockTitleText>            </BlockTitle>            <BlockBody>                <Row>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Техническая проблема                        </InputTitle>                        <TextField                            style={{width: "100%"}}                            id="outlined-search"                            type=""                            placeholder=""                            defaultValue=""                            variant="outlined"                            className={clsx(classes.margin, classes.textField)}                            InputProps={{                                startAdornment: <InputAdornment position="start">                                    <img src={icon_anchor} alt=""/>                                </InputAdornment>                            }}                        />                    </div>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Комментарий                        </InputTitle>                        <TextField                            style={{width: "100%"}}                            id="outlined-search"                            type=""                            placeholder=""                            defaultValue=""                            variant="outlined"                            className={clsx(classes.margin, classes.textField)}                            InputProps={{                                startAdornment: <InputAdornment position="start">                                    <img src={icon_anchor} alt=""/>                                </InputAdornment>                            }}                        />                    </div>                </Row>                <Row>                    <div                    style={{width: "49%"}}                >                    <InputTitle>                        Статус по подключению                    </InputTitle>                    <TextField                        id="outlined-search"                        type=""                        placeholder=""                        defaultValue=""                        variant="outlined"                        className={clsx(classes.margin, classes.textField)}                        InputProps={{                            startAdornment: <InputAdornment position="start">                                <img src={icon_anchor} alt=""/>                            </InputAdornment>                        }}                    />                </div>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Пометка                        </InputTitle>                        <TextField                            id="outlined-search"                            type=""                            placeholder=""                            defaultValue=""                            variant="outlined"                            className={clsx(classes.margin, classes.textField)}                            InputProps={{                                startAdornment: <InputAdornment position="start">                                    <img src={icon_anchor} alt=""/>                                </InputAdornment>                            }}                        />                    </div>                </Row>            </BlockBody>        </Medium>    )}