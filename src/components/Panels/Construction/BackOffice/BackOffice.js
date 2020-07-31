import React from "react";import "date-fns";import Details from "./Blocks/Details"import Intro from "./Blocks/Intro"import Sides from "./Blocks/Sides"import useStyles from "../../../Styles/UseInputMaterialStyles"import {BlockWrapper, Container} from "../../../Styles/StyledBlocks"export default function BackOffice() {    const classes = useStyles();    return (        <Container className={classes.root}>            <BlockWrapper>                <Intro/>                <Details/>            </BlockWrapper>            <Sides/>        </Container>    )}