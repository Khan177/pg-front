import React from "react";
import {TextField} from "@material-ui/core";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import icon_briefcase from "../../../../../../img/partners/bx-briefcase.svg";
import icon_anchor from "../../../../../../img/partners/bx-anchor.svg";
import {BlockBody, BlockTitle, InputTitle, Row, BlockTitleText, MediumWell} from "./Styles/StyledBlocks"
import useStyles from "./Styles/UseMaterialStyles"


export default function GeneralInfo() {
    const classes = useStyles();
    return (
        <MediumWell>
            <BlockTitle>
                <BlockTitleText>
                    Общая информация
                </BlockTitleText>
            </BlockTitle>
            <BlockBody>
                <Row>
                    <Row style={{flexFlow: "column", alignItems: "end", width: "45%"}}>
                        <div
                            style={{width: "100%", marginBottom: '21px'}}
                        >
                            <InputTitle>
                                Наименование контрагента
                            </InputTitle>
                            <TextField
                                style={{width: "100%"}}
                                id="outlined-search"
                                type="search"
                                placeholder="Юниверсал ТОО"
                                defaultValue=""
                                variant="outlined"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <img src={icon_briefcase} alt=""/>
                                    </InputAdornment>
                                }}
                            />
                        </div>
                        <div
                            style={{width: "100%", marginBottom: '21px'}}
                        >
                            <InputTitle>
                                Сектор деятельности
                            </InputTitle>

                            <TextField
                                style={{width: "100%"}}
                                id="outlined-search"
                                type="search"
                                placeholder=" Производство напитков "
                                defaultValue=""
                                variant="outlined"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <img src={icon_anchor} alt=""/>
                                    </InputAdornment>
                                }}
                            />
                        </div>
                    </Row>
                    <Row style={{width: "45%", padding: "5px 0"}}>
                        <div
                            style={{width: "100%", transform: " translate(-3px, -9px)"}}
                        >
                            <InputTitle>
                                Комментарий
                            </InputTitle>

                            <TextField
                                id="comments"
                                inputProps={{maxLength: 150, rows: 6, cols: 8}}
                                multiline
                                placeholder="..."
                                defaultValue=""
                                variant="outlined"
                                className={clsx(classes.margin, classes.textField)}
                            />
                        </div>
                    </Row>
                </Row>


                <Row>
                    <div
                        style={{width: "45%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Тип контрагента
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type="select"
                            placeholder="Рекламодатель"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div
                        style={{width: "45%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            Тип клиента
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            type="search"
                            placeholder="по личным связям "
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_anchor} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>

                </Row>
                <Row>
                    {/*<div*/}
                    {/*    style={{width: "30%"}}*/}
                    {/*>*/}
                    {/*    <InputTitle>*/}
                    {/*        Дата создания*/}
                    {/*    </InputTitle>*/}
                    {/*    <MuiPickersUtilsProvider*/}
                    {/*        utils={DateFnsUtils}*/}
                    {/*    >*/}


                    {/*        <KeyboardDatePicker*/}
                    {/*            style={{width: "100%"}}*/}
                    {/*            inputVariant="outlined"*/}
                    {/*            format="MM/dd/yyyy"*/}
                    {/*            KeyboardButtonProps={{*/}
                    {/*                "aria-label": "change date",*/}
                    {/*            }}*/}

                    {/*            onChange={date => handleDateChange(date)}*/}
                    {/*            value={selectedDate}*/}
                    {/*            InputAdornmentProps={{position: "start"}}*/}
                    {/*            keyboardIcon={<Icon>*/}
                    {/*                <img src={icon_calendar} alt=""/>*/}
                    {/*            </Icon>}*/}
                    {/*        />*/}

                    {/*    </MuiPickersUtilsProvider>*/}
                    {/*</div>*/}

                </Row>
            </BlockBody>
        </MediumWell>
    )
}
