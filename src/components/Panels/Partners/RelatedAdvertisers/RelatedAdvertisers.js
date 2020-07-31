import React from "react";
import Table from "../../../Table/Table";
import makeColumns from "../../../../containers/Base/Partners/PartnersList/DataTable/columns";
import makeData from "../../../../containers/Base/Partners/PartnersList/DataTable/data";

const RelatedAdvertisers = (props) => {
    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return (
        <div >
            <Table
                index={props.index}
                columns={columns}
                data={data}
                display="none"
            />
        </div>

    )
}

export default RelatedAdvertisers

