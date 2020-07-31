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
                        <Row>
                            <Column
                                style={{width: "45%", marginBottom: '21px'}}>
                                <div style={{width: "100%"}}>
                                    <InputTitle>
                                        Наименование контрагента
                                    </InputTitle>
                                    <SelectAnchor
                                        placeholder="Контрагент"
                                    />
                                </div>
                                <div style={{width: "100%"}}>
                                    <InputTitle>
                                        Наименование контрагента
                                    </InputTitle>
                                    <InputAnchor
                                        placeholder="Производство напитков"
                                    />
                                </div>

                            </Column>

                            <Column
                                style={{width: "45%", marginBottom: '21px'}}>
                                <InputTitle>
                                    Комментарий
                                </InputTitle>

                                <Multiline
                                    inputProps={{maxLength: 450, rows: 186, cols: 10}}
                                />
                            </Column>
                        </Row>


                    </Column>
                </Row>
                <Row>
                    <Column style={{width: "45%", marginBottom: '21px'}}>
                        <div style={{width: "100%"}}>
                            <InputTitle>
                                Сектор деятельности
                            </InputTitle>

                            <InputAnchor
                                placeholder="Сектор"
                            />
                        </div>
                        <div style={{width: "100%"}}>
                            <InputTitle>
                                Тип контрагента
                            </InputTitle>
                            <InputAnchor
                                placeholder="Тип"
                            />
                        </div>
                    </Column>
                    <Column style={{width: "45%", marginBottom: '21px'}}>
                        <div style={{width: "100%"}}>
                            <InputTitle>
                                Тип клиента
                            </InputTitle>
<<<<<<< HEAD
                            <InputAnchor
                                placeholder="Тип клиента"
=======
                            <Multiline
                                // inputProps={{maxLength: 450, rows: 186, cols: 10}}
>>>>>>> e8e97b93e72d5871cf7a21d595b44b7669959e03
                            />
                        </div>
                    </Column>
                </Row>
                </form>
            </BlockBody>
        </Medium>
    )
}
