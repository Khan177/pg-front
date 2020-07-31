import React from "react";
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../Table/Table";

const RelatedBrands = () => {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return (
        <>
            <Table
                columns={columns}
                data={data}
            />
            </>

    )
}

export default RelatedBrands

