import React, { useState, useEffect } from 'react';
import { STab, STabList, STabPanel, STabs } from '../../../components/Styles/TabPanelsStyles';
import { ControlToolbar } from '../../../components/Styles/ControlToolbarStyle';
import Table from '../../../components/Table';
import { StyledButton } from '../../../styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOutdoorFurnitureData,
  getCities,
  getDistricts,
  getPostalCodes,
  getOutdoorFurnitureFiltered,
} from '../../../store/actions/actions';

const PanelDesign = (props) => {
  const tabs = [{ value: 'Закрепленные стороны' }, { value: 'Дизайн' }];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOutdoorFurnitureData());
    dispatch(getCities());

    dispatch(getDistricts());
    dispatch(getPostalCodes());
  }, [dispatch]);

  const rowKeys = useSelector((state) => state.table.rowKeys);
  const rows = useSelector((state) => state.table.outdoorFurnitureTableData);
  console.log(rowKeys, rows);
  const [fastSearch, setFastSearch] = useState();
  const outdoorFurnitureColums = [
    'Код',
    'Город',
    'Почтовый индекс',
    'Маркетинговый адрес',
    'Юридический адрес',
    'Формат',
    'Координаты',
    'Горит',
  ];
  return (
    <STabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
      <ControlToolbar position="static">
        <STabList>
          {tabs.map((tab, index) => {
            return (
              <STab key={index} onClick={() => props.setBlock(index)}>
                {tab.value}
              </STab>
            );
          })}
        </STabList>
      </ControlToolbar>
      <STabPanel>
        <div className="outdoor-table-bar">
          <Table
            linkProps={'/base/construction/'}
            columns={outdoorFurnitureColums}
            rows={rows}
            rowKeys={rowKeys}
            handleFastSearch={() => {
              dispatch(getOutdoorFurnitureFiltered(fastSearch));
            }}
            handleChangeFastSearch={(e) => setFastSearch(e.target.value)}
          />
        </div>
      </STabPanel>
      <STabPanel>
        <div className="design-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1vw' }}>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 1</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 2</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 3</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 4</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1vw' }}>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 5</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 6</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 7</div>
            <div style={{ borderRadius: '8px', border: '1px solid #d3dff0', padding: '5vw' }}>Дизайн 8</div>
          </div>
        </div>
      </STabPanel>
      <style>
        {`.outdoor-table-bar {
            width: 65.5vw;
          }
          .design-info {
            border-radius: 8px;
            border: 1px solid #d3dff0;
            // height: 100%;
            // padding: 1.5%;
            // flex: 0 1 30vw;
            // margin: 0 2vw 0 0;
          }`}
      </style>
    </STabs>
  );
};

export default PanelDesign;
