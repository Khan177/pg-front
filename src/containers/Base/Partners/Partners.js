import React from "react";
import FilterBar from "./FilterBar/FilterBar";
import PartnersList from "./PartnersList/PartnersList";
import SearchBtn from "./LeftBar/SearchBtn";
import LeftBar from "../../../components/LeftBar/LeftBar";
import {PageWrap} from "../../../components/ComponentsStyles";


const Partners = () => {
    return (
        <PageWrap>
            <LeftBar>
                <SearchBtn/>
            </LeftBar>
            <FilterBar/>
            <PartnersList/>
        </PageWrap>
    )
}
export default Partners

