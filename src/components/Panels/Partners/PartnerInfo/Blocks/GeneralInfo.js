import React from "react";
import InputAnchor from "../../../../Inputs/InputAnchor";
import Multiline from "../../../../Inputs/Multiline";
import SelectAnchor from "../../../../Inputs/SelectAnchor";
import {BlockBody, Medium, Row, Column, BlockTitle, InputTitle} from "../../../../Styles/StyledBlocks"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiOutlinedInput-multiline": {
            height: 160
        },
    },
}));



export default function GeneralInfo() {
    const classes = useStyles();
    return (
        <Medium>
            <BlockTitle>
                Общая информация
            </BlockTitle>
            <BlockBody>
                <form action="" className={classes.root} >
                <Row>
                <Column>
                        <div
                            style={{width: "90%", marginBottom: '21px'}}
                        >
                            <InputTitle>
                                Наименование контрагента
                            </InputTitle>
                            <SelectAnchor
                                placeholder="Контрагент"
                            />
                            <InputAnchor
                            />
                        </div>
                        <div
                            style={{width: "90%", marginBottom: '21px'}}
                        >
                            <InputTitle>
                                Сектор деятельности
                            </InputTitle>

                            <InputAnchor
                                placeholder="Сектор"
                            />
                        </div>
                    <div
                        style={{width: "90%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Тип контрагента
                        </InputTitle>
                        <InputAnchor
                            placeholder="Тип"
                        />
                    </div>
                </Column>
                <Column>

                        <div
                            style={{width: "90%", marginBottom: '21px'}}
                        >
                            <InputTitle>
                                Комментарий
                            </InputTitle>
                            <Multiline
                                // inputProps={{maxLength: 450, rows: 186, cols: 10}}
                            />
                        </div>
                    <div
                        style={{width: "90%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Тип клиента
                        </InputTitle>
                        <InputAnchor
                            placeholder="Тип клиента"
                        />
                    </div>
                </Column>
                </Row>
                </form>
            </BlockBody>
        </Medium>
    )
}
