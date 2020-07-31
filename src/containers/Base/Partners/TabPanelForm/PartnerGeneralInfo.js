import React from "react";
import {PageWrap} from "../../../../components/Styles/ComponentsStyles";
import SearchBtn from "../LeftBar/SearchBtn";
import LeftBar from "../../../../components/LeftBar/LeftBar";
import TabPanelFormPartners from "./TabPanelFormPartners";
import {ContentWrap} from "../../../../components/Styles/ComponentsStyles"


export default function PartnerGeneralInfo() {

    const [showSearchBtn, setSearchBtn] = React.useState(false);
    const [index, setIndex]= React.useState("");

    const handleTasSelected = (index) => {
        setIndex(index)
        if (index === 0) {
            setSearchBtn(false)
        } else setSearchBtn(true)
    };
    return (
        <PageWrap>
            <LeftBar>
                {showSearchBtn?<SearchBtn/>:null}
            </LeftBar>
            <ContentWrap>
                <TabPanelFormPartners
                    selectedTab={handleTasSelected}
                    index={index}
                />
            </ContentWrap>
        </PageWrap>
    );
};

