import React from "react";
import {PageWrap} from "../../../../components/Styles/ComponentsStyles";
import SearchBtn from "../LeftBar/SearchBtn";
import LeftBar from "../../../../components/LeftBar/LeftBar";
import TabPanelFormPartners from "./TabPanelFormPartners";
import {ContentWrap} from "../../../../components/Styles/ComponentsStyles"
import {Col, Grid, Row} from "react-flexbox-grid";


export default function PartnerGeneralInfo() {

    const [showSearchBtn, setSearchBtn] = React.useState(false);
    const [index, setIndex] = React.useState("");

    const handleTasSelected = (index) => {
        setIndex(index)
        if (index === 0) {
            setSearchBtn(false)
        } else setSearchBtn(true)
    };
    return (
        <Grid fluid className="resetPadding">
            <Row>
                <Col>
                    <LeftBar>
                        {showSearchBtn ?
                            <Col xs={1} className="contentInfo resetPadding">
                                <SearchBtn/>
                            </Col>
                            : null}
                    </LeftBar>
                </Col>
                <Col xs={11} className="resetPadding marginLeft10">
                    {/*<ContentWrap>*/}
                    <TabPanelFormPartners
                        selectedTab={handleTasSelected}
                        index={index}
                    />
                    {/*</ContentWrap>*/}
                </Col>
            </Row>
        </Grid>
    );
};

