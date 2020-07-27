import React from "react";
import FilterBar from "./SidebarPartners/Filters/FilterBar";
import styled from "styled-components";
import PartnersList from "./PartnersList/PartnersList";

import SearchBtn from "./LeftBar/SearchBtn";


const Partners = () => {
    const PageWrap = styled.div`
      display: flex;
      font-family: "SF UI Display Light", sans-serif;
`;

    const SideBar = styled.div`
        background: #F5F7FA;
        box-shadow: inset -1px 0px 0px #D3DFF0;
        height: 200vh;
        display: flex;
        margin-top:2px
`;
    return (
        <PageWrap>
            <SideBar>
                <SearchBtn/>
                <FilterBar/>
            </SideBar>

            {/*<BlockSearchInput/>*/}
            <PartnersList/>
        </PageWrap>

    )

}
export default Partners

