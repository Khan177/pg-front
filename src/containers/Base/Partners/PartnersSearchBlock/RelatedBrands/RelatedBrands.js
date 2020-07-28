import React from "react";
import makeColumns from "../../PartnersList/DataTable/columns";
import makeData from "../../PartnersList/DataTable/data";
import Table from "../../../../../components/Table/Table";

const RelatedBrands = (props) => {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return (
        <div className="table_records tables tabcontent table_link">
            <Table
                index={props.index}
                columns={columns}
                data={data}
                display="none"
            />
        </div>

    )
}

export default RelatedBrands

