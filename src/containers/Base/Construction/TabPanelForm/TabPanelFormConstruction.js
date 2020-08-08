import React from "react";
import BackOffice from "../../../../components/Panels/Construction/BackOffice/BackOffice";
import TechDept from "../../../../components/Panels/Construction/TechDept/TechDept";
import AccDept from "../../../../components/Panels/Construction/AccDept/AccDept";
import {STab, STabList, STabPanel, STabs} from "../../../../components/Styles/TabPanelsStyles";
import {ControlToolbar} from "../../../../components/Styles/ControlToolbarStyle";
import TPFormConstructionHeader from "./TabPanelFormContsructionHeader";
import Other from "../../../../components/Panels/Construction/OtherConstr/Other";
import ConstructionHist from "../../../../components/Panels/Construction/History/ConstructionHist";

STabPanel.tabsRole = 'TabPanel';
STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';

const tabs = [
    {value: "Бэк офис"},
    {value: "Технический отдел"},
    {value: "Бухгалтерия"},
    {value: "Другое"},
    {value: "История"},
];

const panel1 = <BackOffice/>;
const panel2 = <TechDept/>;
const panel3 = <AccDept/>;
const panel4 = <Other/>;
const panel5 = <ConstructionHist/>;

export default function InnerForm(props) {
    return (
        <form style={{width: "100%"}}>
            <TPFormConstructionHeader/>
            <div>
                <STabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                    onSelect={index => props.selectedTab(index)}
                >
                    <ControlToolbar position="static">
                        <STabList>
                        {tabs.map((tab, index) => {
                            console.log(tab.value)
                            return <STab
                                key={index}
                            >{tab.value}</STab>
                        })}
                        </STabList>
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
                    <STabPanel>
                        {panel5}
                    </STabPanel>
                </STabs>
            </div>
        </form>
    )
};
