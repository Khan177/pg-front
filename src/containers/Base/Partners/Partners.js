import React from "react";
import FilterBar from "./SidebarPartners/Filters/FilterBar";
import SearchBar from "../OutdoorFurniture/Sidebar/Search/SearchBar";
import styled from "styled-components";
import PartnersList from "./PartnersList/PartnersList";


const Partners = () => {
    const PageWrap = styled.div`
      display: flex;
`;

    const SideBar = styled.div`
        background: #F5F7FA;
        box-shadow: inset -1px 0px 0px #D3DFF0;
        height: 200vh;
        display: flex;
`;
    return (
        <PageWrap>
            <SideBar>
                <SearchBar/>
                <FilterBar/>
            </SideBar>

            {/*<BlockSearchInput/>*/}
            <PartnersList/>
        </PageWrap>

    )

}
export default Partners

