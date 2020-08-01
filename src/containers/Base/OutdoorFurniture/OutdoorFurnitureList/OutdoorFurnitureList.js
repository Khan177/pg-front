import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {Section} from "../../../../components/Styles/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import HeaderList from "../HeaderList";
import {ToolbarControl} from "../../../../components/Styles/ControlToolbarStyle";
import {ControlToolbar} from "../../../../components/Styles/ControlToolbarStyle";
import {useBlockLayout, useFilters, useGlobalFilter, usePagination, useResizeColumns, useTable} from "react-table";
import {useSticky} from "react-table-sticky";
import GlobalFilter from "../../../../components/Table/FilterGlobal";


export default function OutdoorFurnitureList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);


    const {
        page, // Instead of using 'rows', we'll use page - It is used by GlobalFilter and Pagination
        canPreviousPage, /*Pagination */
        canNextPage, /*Pagination */
        pageOptions, /*Pagination */
        pageCount, /*Pagination */
        gotoPage, /*Pagination */
        nextPage, /*Pagination */
        previousPage, /*Pagination */
        setPageSize, /*Pagination - onChange*/
        state, /*GlobalFilter*/
        preGlobalFilteredRows, /*GlobalFilter*/
        setGlobalFilter, /*GlobalFilter*/
        state: {pageIndex, pageSize, globalFilter}, /*Pagination state*/
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        // resetResizing,
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 20},
        },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        usePagination,
        useBlockLayout,
        useSticky,
        useResizeColumns
    );

    React.useEffect(() => {
        // props.dispatch({ type: actions.resetPage })
        console.log(globalFilter);
    }, [globalFilter]);


    return (
        <Section>
            <HeaderList/>

            <Table
                columns={columns}
                data={data}
            >
            </Table>
        </Section>
    )
}

