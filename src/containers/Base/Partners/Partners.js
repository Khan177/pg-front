import React from "react";
import FilterBar from "./FilterBar/FilterBar";
import PartnersList from "./PartnersList/PartnersList";
import SearchBtn from "./LeftBar/SearchBtn";
import LeftBar from "../../../components/LeftBar/LeftBar";
import {Col, Grid, Row} from "react-flexbox-grid";
import "./Style/style.css"


const Partners = () => {
    return (
        <Grid fluid style={{padding:"0"}}>
            <Row>
                <Col xs={1} className="contentInfo resetPadding" >
                    <LeftBar>
                        <SearchBtn/>
                    </LeftBar>
                </Col>
                <Col xs={2} className="resetPadding">
                    <FilterBar/>
                </Col>
                <Col xs={9} className="resetPadding">
                    <PartnersList/>
                </Col>
            </Row>
        </Grid>
    )
}
export default Partners

