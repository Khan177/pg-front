import React from "react";
import {BlockBody, InputTitle, Quarter, Row, BlockTitle} from "../../../../Styles/StyledBlocks"
import InputGlobe from "../../../../Inputs/InputGlobe";
import InputEnvelope from "../../../../Inputs/InputEnvelope";
import InputDirections from "../../../../Inputs/InputDirections";
import InputHouse from "../../../../Inputs/InputHouse";


export default function Address() {

    return (
        <Quarter>
            <BlockTitle>
                Адрес
            </BlockTitle>
            <BlockBody>
                <div
                    style={{width: "100%", marginBottom: '21px'}}
                >
                    <InputTitle>
                        Город
                    </InputTitle>
                    <InputGlobe
                        placeholder="Город"
                    />

                </div>
                <Row>
                <div style={{width: "46%", marginBottom: '21px'}}>
                    <InputTitle>
                        Район
                    </InputTitle>
                    <InputDirections
                        placeholder="Район"
                    />

                </div >
                <div style={{width: "46%", marginBottom: '21px'}}>
                    <InputTitle>
                        Почтовый индекс
                    </InputTitle>
                    <InputEnvelope
                        placeholder="Индекс"
                    />

                </div>
                </Row>
                <div
                    style={{width: "100%", marginBottom: '21px'}}
                >
                    <InputTitle>
                        Юридический адрес
                    </InputTitle>
                    <InputEnvelope
                        placeholder={
                            "Адрес"
                        }
                    />
                </div>
                <div
                    style={{width: "100%", marginBottom: "21px"}}
                >
                    <InputTitle>
                        Фактический адрес
                    </InputTitle>

                    <InputHouse
                        placeholder="Адрес"
                    />

                </div>
            </BlockBody>
        </Quarter>
    )
}
