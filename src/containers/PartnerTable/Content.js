import React from "react";
import BlockSearch from "../../components/BlockSearch/BlockSearch";
import BlockSearchInput from "../../components/BlockSearch/BlockSearchInput/BlockSearchInput";
import SearchTable from "../../components/searchTable/searchTable";


const Content = () => {
    return (
        <div style={{display:"flex",}} >
       <BlockSearch/>
       <BlockSearchInput/>
       <SearchTable/>
        </div>

    )

}
export default Content

