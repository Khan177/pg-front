import React from "react";import {InputTitle, Row} from "../../../../../Styles/StyledBlocks";import {RedDeleteBtn} from "../../../../../Styles/ButtonStyles"import red_can from "../../../../../../img/outdoor_furniture/red_can.svg";import styled from "styled-components";import InputAnchor from "../../../../../Inputs/InputAnchor";const InputWrapper = styled.div`    width: 15%;`;export default function ExtraRow(props) {    return (        <Row            style={{justifyContent: "spaceBetween", padding: "0 7px 0 0"}}        >            <InputWrapper            >                <InputTitle>                    Формат                </InputTitle>                <InputAnchor                    placeholder="Формат"                />            </InputWrapper>            <InputWrapper            >                <InputTitle>                    Сторона                </InputTitle>                <InputAnchor                    placeholder="Формат"                />            </InputWrapper>            <InputWrapper            >                <InputTitle>                    Рекламная сторона                </InputTitle>                <InputAnchor                    placeholder="Cторона"                />            </InputWrapper>            <InputWrapper            >                <InputTitle>                    Назначение стороны                </InputTitle>                <InputAnchor                    placeholder="Назначение"                />            </InputWrapper>            <InputWrapper            >                <InputTitle>                    Размеры(см)                </InputTitle>                <InputAnchor                    placeholder="Размеры"                />            </InputWrapper>            <InputWrapper            >                <InputTitle>                    Доступность стороны                </InputTitle>                <InputAnchor                    placeholder="Доступность"                />            </InputWrapper>            <RedDeleteBtn                onClick={props.removeClickHandler}            >                <img src={red_can} alt=""/>            </RedDeleteBtn>        </Row>    )}