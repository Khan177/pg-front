import React from "react";
import {TextField} from "@material-ui/core";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import icon_globe from "../../../../../../img/partners/bx-globe-alt.svg";
import icon_directions from "../../../../../../img/partners/bx-directions.svg";
import icon_envelope from "../../../../../../img/partners/bx-envelope.svg";
import icon_home from "../../../../../../img/partners/bx-home.svg";
import {
    BlockBody,
    BlockTitle,
    InputTitle,
    Medium,
    Row,
    BlockTitleText,
    MediaInput,
    AddressInputBlock
} from "./Styles/StyledBlocks"
import useStyles from "./Styles/UseMaterialStyles"


export default function Address() {

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2020-01-01")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    let div = <div
        style={{width: "60%"}}
    >
        <InputTitle>
            Маркетинговый адрес
        </InputTitle>
        <TextField
            id="outlined-search"
            type="search"
            placeholder="Маркетинговый адрес"
            defaultValue=""
            variant="outlined"

            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                startAdornment: <InputAdornment position="start">
                    <img src={icon_globe} alt=""/>
                </InputAdornment>
            }}
        />
    </div>;
    return (
        <Medium>
            <BlockTitle>
                <BlockTitleText>
                    Адрес
                </BlockTitleText>
            </BlockTitle>
            <BlockBody>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Город
                        </InputTitle>
                        <TextField
                            style={{width: "100%"}}
                            id="outlined-search"
                            type="search"
                            placeholder="Алматы"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_globe} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <MediaInput>
                        <AddressInputBlock
                        >
                            <InputTitle>
                                Район
                            </InputTitle>
                            <TextField
                                style={{width: "100%",marginBottom: '21px'}}
                                id="outlined-search"
                                type="search"
                                placeholder="Медеуский р-н."
                                defaultValue=""
                                variant="outlined"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <img src={icon_directions} alt=""/>
                                    </InputAdornment>
                                }}
                            />
                        </AddressInputBlock>
                        <AddressInputBlock
                        >
                            <InputTitle>
                                почтовый индекс
                            </InputTitle>

                            <TextField
                                style={{width: "100%", marginBottom: '21px'}}
                                id="outlined-search"
                                type="search"
                                placeholder=" 1012034"
                                defaultValue=""
                                variant="outlined"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <img src={icon_envelope} alt=""/>
                                    </InputAdornment>
                                }}
                            />
                        </AddressInputBlock>
                    </MediaInput>
                </Row>


                <Row>
                    <div
                        style={{width: "100%", marginBottom: '21px'}}
                    >
                        <InputTitle>
                            Юридический адрес
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            style={{width: "100%"}}
                            type="select"
                            placeholder="пр. Достык 25, офис 52"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <div
                        style={{width: "100%", marginBottom: "21px"}}
                    >
                        <InputTitle>
                            Фактический адрес
                        </InputTitle>
                        <TextField
                            id="outlined-search"
                            type="search"
                            style={{width: "100%"}}
                            placeholder="пр. Достык 25, офис 52"
                            defaultValue=""
                            variant="outlined"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <img src={icon_home} alt=""/>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </Row>
            </BlockBody>
        </Medium>
    )
}
