import React from "react";
import PartnerInfo from "../../../../components/Panels/Partners/PartnerInfo/PartnerInfo";
import RelatedProjects from "../../../../components/Panels/Partners/RelatedProjects/RelatedProjects";
import RelatedBrands from "../../../../components/Panels/Partners/RelatedBrands/RelatedBrands";
import RelatedAdvertisers from "../../../../components/Panels/Partners/RelatedAdvertisers/RelatedAdvertisers";
import TabPanelFormHeaderPartners from "./TabPanelFormHeaderPartners";
import {STab, STabList, STabPanel, STabs} from "../../../../components/Styles/TabPanelsStyles";
import {ControlToolbar} from "../../../../components/Styles/ControlToolbarStyle";
import {BtnBrand} from "../../../../components/Styles/ButtonStyles";


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
const panel2 = <RelatedProjects/>;
const panel3 = <RelatedBrands/>;
const panel4 = <RelatedAdvertisers/>;


export default function TabPaneForm(props) {


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
                    </ControlToolbar>
                    <STabPanel>
                        {panel1}
                    </STabPanel>
                    <STabPanel>
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

