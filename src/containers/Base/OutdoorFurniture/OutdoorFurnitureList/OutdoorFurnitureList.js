import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {ListHeader, ListTitle, Section, StyledButton, Title, TitleLogo} from "../../../../components/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import { useHistory } from "react-router-dom";
import BreadCrumbs from "../../../../components/BreadCrumbs"
import HeaderList from "../HeaderList";
import {ControlToolbar} from "../../../../components/CotrolToolbar/ControlToolbarStyle";
import GlobalFilter from "../../../../components/Table/FilterGlobal";
import {BtnExport, BtnPrint, BtnSettings, TableControl} from "../../../../components/Table/TableStyles/TableStyles";
import print_icon from "../../../../img/outdoor_furniture/table_icons/print.svg";
import export_icon from "../../../../img/outdoor_furniture/table_icons/export_icon.svg";
import settings_icon from "../../../../img/outdoor_furniture/table_icons/setting.svg";
import {useBlockLayout, useFilters, useGlobalFilter, usePagination, useResizeColumns, useTable} from "react-table";
import {useSticky} from "react-table-sticky";

export default function OutdoorFurnitureList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    const {

        state, /*GlobalFilter*/
        preGlobalFilteredRows, /*GlobalFilter*/
        setGlobalFilter, /*GlobalFilter*/
        state: {pageIndex, pageSize}, /*Pagination state*/

        // resetResizing,
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 10},
            // defaultColumn,
            // getColumnWidth
        },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        usePagination,
        useBlockLayout,
        useSticky,
        useResizeColumns
    );

    const toolbar = <ControlToolbar>
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
        />

        <TableControl>
            <BtnPrint>
                <img src={print_icon} alt=""/>
            </BtnPrint>
            <BtnExport
                // onClick={exportBtnHandler}
            >
                <img src={export_icon} alt=""/>
                Экспорт
            </BtnExport>
            <BtnSettings>
                <img src={settings_icon} alt=""/>
            </BtnSettings>
        </TableControl>
    </ControlToolbar>

    return (
        <Section>
            <HeaderList/>
            <Table
                columns={columns}
                data={data}
                toolbar={toolbar}
            >
            </Table>
        </Section>
    )
}

