import React from "react";import {BlockBody, BlockTitleText, ImageBody, Medium, Row, BlockTitle, InputTitle} from "../../../../StyledBlocks";import {BtnStyledSecondary} from "../../../../ButtonStyles"import photo from "../../../../../img/outdoor_furniture/photo_load.png"import InputAnchor from "../../../../Inputs/InputAnchor";export default function Others() {    const loadClickHandler = (e) => {        e.preventDefault();        alert('loading');    }    return (        <Medium style={{minHeight: 600}}>            <BlockTitle>                <BlockTitleText>                    Другие параметры                </BlockTitleText>            </BlockTitle>            <BlockBody>                <Row>                    <ImageBody>                        <img src={photo} alt="" width="100%" height="100%"/>                    </ImageBody>                    <div                        style={{width: "60%"}}                    >                        <InputTitle>                            Ссылка                        </InputTitle>                        <InputAnchor                            placeholder="Ссылка"                        />                        <InputTitle>                            Коордтинаты                        </InputTitle>                        <InputAnchor                            placeholder="Координаты"                        />                    </div>                </Row>                <Row>                    <BtnStyledSecondary onClick={loadClickHandler}>                        Загрузить фото                    </BtnStyledSecondary>                </Row>            </BlockBody>        </Medium>    )}