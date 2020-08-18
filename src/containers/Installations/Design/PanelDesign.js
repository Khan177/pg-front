import React from 'react';
import { STab, STabList, STabPanel, STabs } from '../../../components/Styles/TabPanelsStyles';
import { ControlToolbar } from '../../../components/Styles/ControlToolbarStyle';

const PanelDesign = () => {
  const tabs = [{ value: 'Закрепленные стороны' }, { value: 'Дизайн' }];
  return (
    <>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <ControlToolbar position="static">
          <STabList>
            {tabs.map((tab, index) => {
              return <STab key={index}>{tab.value}</STab>;
            })}
          </STabList>
        </ControlToolbar>
        <STabPanel>
          <p>1</p>
        </STabPanel>
        <STabPanel>
          <p>2</p>
        </STabPanel>
      </STabs>
    </>
  );
};

export default PanelDesign;
