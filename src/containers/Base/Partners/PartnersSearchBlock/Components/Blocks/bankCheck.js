import React from "react";
import {TextField} from "@material-ui/core";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import icon_globe from "../../../../../../img/partners/bx-globe-alt.svg";
import icon_directions from "../../../../../../img/partners/bx-directions.svg";
import icon_envelope from "../../../../../../img/partners/bx-envelope.svg";
import icon_home from "../../../../../../img/partners/bx-home.svg";
import {BlockBody, BlockTitle, InputTitle, Medium, Row, BlockTitleText} from "./Styles/StyledBlocks"
import useStyles from "./Styles/UseMaterialStyles"


export default function Bankcheck() {

    const classes = useStyles();
    return (
        <Medium>
            <BlockTitle>
                <BlockTitleText>
                    Банковский счет
                </BlockTitleText>
            </BlockTitle>
            <BlockBody>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Банк получателя
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type="select"
                            placeholder="АО «Банк получателя»"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            ИИК
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            type="search"
                            style={{width: "100%"}}
                            placeholder="KZ 5076600000308161101"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            БИК
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            type="search"
                            style={{width: "100%"}}
                            placeholder="CEDUKZKA"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            Кбе
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            type="search"
                            style={{width: "100%"}}
                            placeholder="CEDUKZKA"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
            </BlockBody>
        </Medium>
    )
}
