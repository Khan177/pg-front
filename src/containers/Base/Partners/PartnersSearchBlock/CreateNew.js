import React from "react";
import {PageWrap} from "./Components/Blocks/Styles/StyledBlocks";
import SearchBtn from "../LeftBar/SearchBtn";
import LeftBar from "../LeftBar/LeftBar";
import styled from "styled-components";
import CreateNewParters from "./PartnerSearchBlock";

const ContentWrap = styled.div`
        width:94%;
        padding: 10px 20px;
        display: flex;
`;


export default function CreateNew() {

    const [showSearchBtn, setSearchBtn] = React.useState(false)
    const [index, setIndex]= React.useState("")

    const handleTasSelected = (index) => {
        console.log("click", index)
        setIndex(index)
        if (index === 0) {
            setSearchBtn(false)
        } else setSearchBtn(true)

    }
    return (
        <PageWrap>
            <LeftBar>
                {showSearchBtn?<SearchBtn/>:null}
            </LeftBar>
            <ContentWrap>
                <CreateNewParters
                    selectedTab={handleTasSelected}
                    index={index}
                />
            </ContentWrap>
        </PageWrap>
    );
}

