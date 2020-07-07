import React from "react";
import InfoTable from "../InfoTable/InfoTable";
import SearchTableInfo from "./SearchTableInfo";

const SearchTable =()=>{
    return(
        <div className="Counterparties">
            <SearchTableInfo/>
            <InfoTable/>
        </div>
    )
}
export default SearchTable