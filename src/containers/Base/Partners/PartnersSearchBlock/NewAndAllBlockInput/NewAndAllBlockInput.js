import React from "react";
import {takeValueInput} from "../../../../../store/action";
import {connect} from "react-redux";
import GeneralInfo from "../Components/Blocks/generalInfo";
import Address from "../Components/Blocks/address";
import useStyles from "../../../../../components/UseInputMaterialStyles";
import {Container} from "../../../../../components/StyledBlocks";
import {BlockWrapper} from "../Components/Blocks/Styles/StyledBlocks";
import Bankcheck from "../Components/Blocks/bankCheck";
import SizesBlock from "../Components/Blocks/SizesBlock";
import AgentCommission from "../Components/Blocks/agentCommission";


const NewAndAllBlockInput = (props) => {
    const classes = useStyles();
    console.log(props.infoForm)
    return (
        <Container className={classes.root}>
            <BlockWrapper>
                <GeneralInfo/>
                <Address/>
                <Bankcheck/>
            </BlockWrapper>
            <SizesBlock/>
            <AgentCommission/>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        infoForm: state.table.infoForm,
        error: state.table.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFormCreated: (name, value) => dispatch(takeValueInput(name, value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewAndAllBlockInput)

