import styled from "styled-components";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";


export const STabs = styled(Tabs)`
          font-family: "SF UI Display Light", sans-serif;
          font-size: 12px;
          width: 100%;
`;

export const STabList = styled(TabList)`
          list-style-type: none;
          padding:0;
          display: flex;
          justify-content: flex-start;
          margin: 0;
          
`;

export const STab = styled(Tab)`
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          text-transform: uppercase;
          align-items: center;
          white-space: nowrap;
          width: 100%;
          height: 32px;
          padding: 0 18px;
          //user-select: none;
          cursor: pointer;
          border-radius: 4px;
          margin-right: 12px;

  &.is-selected {
        color: #FFFFFF;
        background: #2C5DE5;
  }

  &:focus {
    outline: none;
  }
`;


export const STabPanel = styled(TabPanel)`
      display: none;
      min-height: 40vh;
      margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
