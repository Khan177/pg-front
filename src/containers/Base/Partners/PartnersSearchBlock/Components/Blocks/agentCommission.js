import React from "react";
import {
    BlockBody,
    BlockTitle,
    BlockTitleText,
    InputTitle,
    Large,
    Row
} from "./Styles/StyledBlocks";
import {TextField} from "@material-ui/core";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import icon_anchor from "../../../../../../img/outdoor_furniture/filter_icons/bx-ancor.svg";
import useStyles from "./Styles/UseMaterialStyles"
import styled from "styled-components";

const InputWrapper = styled.div`
    width: 22%;
`;


export default function AgentCommission(props) {

    const classes = useStyles()

    return (
        <Large>
            <BlockTitle style={{padding: "15px 26px 15px 24px"}}>
                <BlockTitleText>Агенская коммисия</BlockTitleText>
            </BlockTitle>
            <BlockBody style={{paddingBottom:"24px"}}>
                <Row
                    style={{justifyContent:"spaceBetween", padding: "0 7px 0 0" }}
                >
                    <InputWrapper
                    >
                        <InputTitle>
                            Тип АК
                        </InputTitle>
                        <TextField
                            id=""
                            style={{width: "100%"}}
                            type=""
                            placeholder="В процентах"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            Агенская коммисия
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type=""
                            placeholder="10"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            АК распростроняется
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type=""
                            placeholder="На сумму без НДС"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            На какие    услуги распространяется АК
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type=""
                            placeholder="Печать, Монтаж"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </InputWrapper>
                </Row>
            </BlockBody>
        </Large>


    )
}
