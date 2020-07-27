import React, {useEffect} from "react";
import {fetchTableInfo} from "../../../../../store/action";
import {connect} from "react-redux";
import makeColumns from "../../PartnersList/DataTable/columns";
import makeData from "../../PartnersList/DataTable/data";
import Table from "../../Table/Table";

const RelatedBrands =(props) =>{
    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return(
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
const mapStateToProps = state => {
    return {
        tableInfo: state.table.tableInfo,
        errorName: state.table.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        takeAllInfoTable: () => dispatch(fetchTableInfo())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RelatedBrands)

