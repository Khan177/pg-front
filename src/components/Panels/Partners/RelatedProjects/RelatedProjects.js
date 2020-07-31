import React from "react";
import Table from "../../../Table/Table";
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import {useBlockLayout, useFilters, useGlobalFilter, usePagination, useResizeColumns, useTable} from "react-table";
import {useSticky} from "react-table-sticky";
import {ControlToolbar} from "../../../ControlToolbarStyle";
import GlobalFilter from "../../../Table/FilterGlobal";
import {BtnExport, BtnPrint, BtnSettings, ToolbarControl} from "../../../Table/TableStyles/TableStyles";
import print_icon from "../../../../img/outdoor_furniture/table_icons/print.svg";
import export_icon from "../../../../img/outdoor_furniture/table_icons/export_icon.svg";
import settings_icon from "../../../../img/outdoor_furniture/table_icons/setting.svg";


const RelatedProjects = (props) => {
    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    const {
        state, /*GlobalFilter*/
        preGlobalFilteredRows, /*GlobalFilter*/
        setGlobalFilter, /*GlobalFilter*/
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 10},
        },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        usePagination,
        useBlockLayout,
        useSticky,
        useResizeColumns
    );



    return (
        <>
            <Table
                columns={columns}
                data={data}
                toolbar={props.toolbar}
            />
        </>

    )
}
export default RelatedProjects
