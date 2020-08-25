import React from 'react';

import SearchBtn from '../../Partners/LeftBar/SearchBtn';
import { LeftBar } from '../../../../styles/styles';
import HeaderAgreements from './HeaderAgreements';
import { STab, STabs, STabList, STabPanel } from '../../../../components/Styles/TabPanelsStyles';
import { ControlToolbar } from '../../../../components/Styles/ControlToolbarStyle';
import AgreementsTab from '../../../../components/Panels/AgreementsTab/AgreementsTab';

const Agreements = (props) => {
  const tabs = [{ value: 'Договора' }, { value: 'Приложения' }];
  const panel1 = <AgreementsTab />;
  // const panel2 = <TechDept />;

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <LeftBar className="left-bar">
        <SearchBtn />
      </LeftBar>
      <div className="right-bar">
        <HeaderAgreements />
        <div>
          <STabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
            onSelect={(index) => props.selectedTab(index)}
          >
            <ControlToolbar position="static">
              <STabList>
                {tabs.map((tab, index) => {
                  return <STab key={index}>{tab.value}</STab>;
                })}
              </STabList>
            </ControlToolbar>
            <STabPanel>{panel1}</STabPanel>
            {/* <STabPanel>{panel2}</STabPanel> */}
          </STabs>
        </div>
      </div>
      <style>{`
        .left-bar {
          margin: 0 2vw 0 0;
        }
        .right-bar {
          flex: 0 1 100vw; 
          margin: 0 2vw 0 0;
        }
      `}</style>
    </div>
  );
};

export default Agreements;
