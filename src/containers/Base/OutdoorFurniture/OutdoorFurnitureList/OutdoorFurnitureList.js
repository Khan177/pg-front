import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {Section} from "../../../../components/Styles/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import HeaderList from "../HeaderList";
import {Styles, ToolbarControl} from "../../../../components/Table/TableStyles/TableStyles";
import {ControlToolbar} from "../../../../components/Styles/ControlToolbarStyle";




import {
    useAsyncDebounce,
    useBlockLayout,
    useFilters,
    useGlobalFilter,
    usePagination,
    useResizeColumns,
    useTable
} from 'react-table'
import {useSticky} from "react-table-sticky";



export default function OutdoorFurnitureList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);





    const toolbar =
        <ControlToolbar>
            {/*{console.log(globalFilter)}*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={globalFilter || ""}*/}
            {/*    onChange={e => setGlobalFilter(e.target.value)}*/}
            {/*/>*/}

            <ToolbarControl>
                {/*<BtnPrint>*/}
                {/*    <img src={print_icon} alt=""/>*/}
                {/*</BtnPrint>*/}
                {/*<BtnExport*/}
                {/*    // onClick={exportBtnHandler}*/}
                {/*>*/}
                {/*    <img src={export_icon} alt=""/>*/}
                {/*    Экспорт*/}
                {/*</BtnExport>*/}
                {/*<BtnSettings>*/}
                {/*    <img src={settings_icon} alt=""/>*/}
                {/*</BtnSettings>*/}
            </ToolbarControl>
        </ControlToolbar>

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

