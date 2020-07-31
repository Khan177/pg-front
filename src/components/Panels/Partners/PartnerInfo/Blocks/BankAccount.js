import React from "react";
import {BlockBody, Quarter, BlockTitle, InputTitle} from "../../../../Styles/StyledBlocks"
import InputAnchor from "../../../../Inputs/InputAnchor";

export default function BankAccount() {

    return (
        <Quarter>
            <BlockTitle>
                    Банковский счет
            </BlockTitle>
            <BlockBody>
                    <div
                        style={{width: "100%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Банк получателя
                        </InputTitle>
                        <InputAnchor
                            placeholder="АО «Банк получателя»"
                        />
                    </div>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            ИИК
                        </InputTitle>
                        <InputAnchor
                            placeholder="ИИК"
                        />
                    </div>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            БИК
                        </InputTitle>
                        <InputAnchor
                            placeholder="БИК"
                        />
                    </div>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            Кбе
                        </InputTitle>
                        <InputAnchor
                            placeholder="Кбе"
                        />
                    </div>
            </BlockBody>
        </Quarter>
    )
};
