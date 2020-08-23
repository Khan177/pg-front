import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftBar } from '../../../styles/styles';
import FilterBar from './OutdoorFurnitureList/FilterBar/FilterBar';
import SearchBtn from '../../Base/Partners/LeftBar/SearchBtn';
import HeaderList from './HeaderList';
import {
  getOutdoorFurnitureData,
  getOutdoorFurnitureFiltered,
  getCities,
  getDistricts,
  getPostalCodes,
} from '../../../store/actions/actions';
import Table from '../../../components/Table';

export default function OutdoorFurniture() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOutdoorFurnitureData());
    dispatch(getCities());
    dispatch(getDistricts());
    dispatch(getPostalCodes());
  }, [dispatch]);
  const rowKeys = useSelector((state) => state.table.rowKeys);
  const rows = useSelector((state) => state.table.outdoorFurnitureTableData);
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
    <div className="outdoor-furniture">
      <LeftBar>
        <SearchBtn />
      </LeftBar>
      <FilterBar />
      <div className="outdoor-table-bar">
        <HeaderList />
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
      <style>
        {`
          .outdoor-furniture {
            display: flex;
            height: 100%;
          }
          .outdoor-table-bar {
            padding: 2% 3%;
            width: 70vw;
          }
        `}
      </style>
    </div>
  );
}
