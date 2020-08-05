import React from "react";
import GeneralInfo from "./Blocks/GeneralInfo";
import Address from "./Blocks/Address";
import useStyles from "../../../Styles/UseInputMaterialStyles";
import {Container} from "../../../Styles/StyledBlocks";
import {BlockWrapper} from "../../../Styles/StyledBlocks";
import BankAccount from "./Blocks/BankAccount";
import ContactPerson from "./Blocks/ContactPerson";
import Commissions from "./Blocks/Commissions";
import {Col, Grid, Row} from "react-flexbox-grid";


const PartnerInfo = () => {
    // const classes = useStyles();
    return (
        <Grid fluid className=" resetPadding ">
            <Row xs={12} className=" resetPadding">
                {/*<Container className={classes.root}>*/}
                <Col xs={6}>
                    <GeneralInfo />
                </Col>
                <Col xs={3}>
                    <Address />
                </Col>
                <Col xs={3}>
                    <BankAccount />
                </Col>
            </Row>
            <ContactPerson/>
            <Commissions/>
            {/*</Container>*/}
        </Grid>
    )
}

export default PartnerInfo

