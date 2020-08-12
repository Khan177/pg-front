import React from 'react';
import { STab, STabList, STabPanel, STabs } from '../../../../components/Styles/TabPanelsStyles';
import { ControlToolbar } from '../../../../components/Styles/ControlToolbarStyle';
import TabPanelHeaderLocation from './TabPanelHeaderLocation';

STabPanel.tabsRole = 'TabPanel';
STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';

const tabs = [
  { value: 'Общая информация' },
  { value: 'История' }
];

export default function InnerForm(props) {
  return (
    <form style={{ width: '100%' }}>
      <TabPanelHeaderLocation />
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
          {/* <STabPanel>{panel1}</STabPanel>
          <STabPanel>{panel2}</STabPanel> */}
        </STabs>
      </div>
    </form>
  );
}
