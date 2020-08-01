import React from "react";
import Table from "../../../Table/Table";
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";


const RelatedProjects = () => {
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
export default RelatedProjects;
