import React from "react";import {BlockBody, Medium, Row, BlockTitle, InputTitle} from "../../../../Styles/StyledBlocks"import InputAnchor from "../../../../Inputs/InputAnchor";export default function Tech() {    return (        <Medium>                <BlockTitle>                    Общие параметры                </BlockTitle>            <BlockBody>                <Row>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Экипаж                        </InputTitle>                        <InputAnchor                        placeholder="Экипаж"                        />                    </div>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Инвентарный номер                        </InputTitle>                        <InputAnchor                            placeholder="Инвентарный"                        />                    </div>                </Row>                <Row>                    <div                        style={{width: "49%"}}                    >                        <InputTitle>                            Номер телефона конструкции                        </InputTitle>                        <InputAnchor                            placeholder="Номер телефона"                        />                    </div>                </Row>            </BlockBody>        </Medium>    )};