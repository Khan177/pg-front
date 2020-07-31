import React from "react";
import {Large, Row, BlockTitle, InputTitle} from "../../../../Styles/StyledBlocks";
import styled from "styled-components";
import InputAnchor from "../../../../Inputs/InputAnchor";

const InputWrapper = styled.div`
    width: 22%;
`;

export default function Commissions() {

    return (
        <Large>
            <BlockTitle style={{padding: "15px 26px 15px 24px"}}>
                Агентская коммисия
            </BlockTitle>
                <Row style={{justifyContent:"spaceBetween", padding: "0 20px 20px 20px" }}>
                    <InputWrapper>
                        <InputTitle>
                            Тип АК
                        </InputTitle>
                        <InputAnchor
                            placeholder="В процентах"
                        />
                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            Агенская коммисия
                        </InputTitle>
                        <InputAnchor
                            placeholder="10"
                        />
                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            АК распространяется
                        </InputTitle>
                        <InputAnchor
                            placeholder="Без НДС"
                        />

                    </InputWrapper>
                    <InputWrapper
                    >
                        <InputTitle>
                            На какие услуги распространяется АК
                        </InputTitle>
                    <InputAnchor
                        placeholder="Печать"
                    />
                    </InputWrapper>
                </Row>
        </Large>
    )
}
