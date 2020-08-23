import React from 'react';
import { STab, STabList, STabPanel, STabs } from '../../../../components/Styles/TabPanelsStyles';
import { ControlToolbar } from '../../../../components/Styles/ControlToolbarStyle';
import GeneralInformation from '../../../../components/Panels/Location/GeneralInformation/GeneralInfomation';
import TabPanelHeaderLocation from './TabPanelHeaderLocation';
import HistoryTable from '../../../../components/Panels/Location/HistoryTable/HistoryTable';

STabPanel.tabsRole = 'TabPanel';
STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';

const tabs = [{ value: 'Общая информация' }, { value: 'История' }];
const panel1 = <GeneralInformation />
const panel2 = <HistoryTable />

export default function InnerForm(props) {
  return (
    <form style={{ width: '100%', margin: '0 2vw 0 0' }}>
      <TabPanelHeaderLocation locationID={props.locationID} />
      <div>
        <STabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
          onSelect={(index) => props.selectedTab(index)}
        >
          <ControlToolbar position="static">
            <STabList>
              {tabs.map((tab, index) => {
                console.log(tab.value);
                return <STab key={index}>{tab.value}</STab>;
              })}
            </STabList>
          </ControlToolbar>
          <STabPanel>{panel1}</STabPanel>
          <STabPanel>{panel2}</STabPanel>
        </STabs>
      </div>
    </form>
  );
}
