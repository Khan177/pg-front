import React from "react";import {BlockWrapper, Medium} from "../../../StyledBlocks";import useStyles from "../../../UseInputMaterialStyles"import Others from "./Blocks/Others";import ContactMap from "./Blocks/Geo";import {Container} from "../../../StyledBlocks";export default function Other() {    const classes = useStyles();    return (        <Container className={classes.root}>            <BlockWrapper>                <Others                    style={{minHeight: 800}}                />                <Medium>                <ContactMap/>                </Medium>            </BlockWrapper>        </Container>    )}