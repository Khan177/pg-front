import React from "react";
import PartnerInfo from "../../../../components/Panels/Partners/PartnerInfo/PartnerInfo";
import TableContent from "../../../../components/Panels/Partners/RelatedProjects/RelatedProjects";
import RelatedBrands from "../../../../components/Panels/Partners/RelatedBrands/RelatedBrands";
import RelatedAdvertisers from "../../../../components/Panels/Partners/RelatedAdvertisers/RelatedAdvertisers";
import TabPanelFormHeaderPartners from "./TabPanelFormHeaderPartners";
import {STab, STabList, STabPanel, STabs} from "../../../../components/Styles/TabPanelsStyles";
import {ControlToolbar} from "../../../../components/Styles/ControlToolbarStyle";
import {
    BtnBrand,
    BtnExport,
    BtnPrint,
    BtnSettings,
} from "../../../../components/Table/TableStyles/TableStyles";
import print_icon from "../../../../img/outdoor_furniture/table_icons/print.svg";
import export_icon from "../../../../img/outdoor_furniture/table_icons/export_icon.svg";
import settings_icon from "../../../../img/outdoor_furniture/table_icons/setting.svg";
import GlobalFilter from "../../../../components/Table/FilterGlobal";
import {useBlockLayout, useFilters, useGlobalFilter, usePagination, useResizeColumns, useTable} from "react-table";
import {useSticky} from "react-table-sticky";
import makeColumns from "../../../../components/Panels/Partners/RelatedProjects/DataTable/columns";
import makeData from "../../../../components/Panels/Partners/RelatedProjects/DataTable/data";

STabPanel.tabsRole = 'TabPanel';
STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';
STabPanel.tabsRole = 'TabPanel';

const tabs = [
    {value: "Общая информация"},
    {value: "Связанные проекты"},
    {value: "Связанные бренды"},
    {value: "Связанные рекламодатели"},
];

const panel1 = <PartnerInfo/>;
const panel2 = <TableContent/>;
const panel3 = <RelatedBrands/>;
const panel4 = <RelatedAdvertisers/>;


export default function TabPaneForm(props) {

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
    );


    const Ttoolbar = <>
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
        />
        <>
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
        </>
    </>

    return (
        <form style={{width: "100%"}}>
            <TabPanelFormHeaderPartners/>
            <div>
                <STabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                    onSelect={index => props.selectedTab(index)}
                >
                    <ControlToolbar position="static">
                        <STabList>
                            {tabs.map((tab,index)=> {
                                // console.log(tab.value, index)
                                return <STab
                                    key={index}
                                >{tab.value}</STab>
                            })}
                        </STabList>

                        {(props.index === 2) ?
                            <BtnBrand>
                                Привязать бренд
                            </BtnBrand> : null}
                        {(props.index === 1)?Ttoolbar: null}

                    </ControlToolbar>
                    <STabPanel>
                        {panel1}
                    </STabPanel>
                    <STabPanel
                    toolbar={Ttoolbar}
                    >
                        {panel2}
                    </STabPanel>
                    <STabPanel>
                        {panel3}
                    </STabPanel>
                    <STabPanel>
                        {panel4}
                    </STabPanel>
                </STabs>
            </div>
        </form>
    );
}

