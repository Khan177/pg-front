import React from "react";
import GeneralInfo from "./Blocks/GeneralInfo";
import Address from "./Blocks/Address";
import useStyles from "../../../Styles/UseInputMaterialStyles";
import {Container} from "../../../Styles/StyledBlocks";
import {BlockWrapper} from "../../../Styles/StyledBlocks";
import BankAccount from "./Blocks/BankAccount";
import ContactPerson from "./Blocks/ContactPerson";
import Commissions from "./Blocks/Commissions";


const PartnerInfo = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <BlockWrapper>
                <GeneralInfo/>
                <Address/>
                <BankAccount/>
            </BlockWrapper>
            <ContactPerson/>
            <Commissions/>
        </Container>
    )
}

export default PartnerInfo

