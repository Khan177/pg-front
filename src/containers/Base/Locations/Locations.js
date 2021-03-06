import React, { useEffect, useState } from 'react';
import { LeftBar } from '../../../styles/styles';
import FilterByLocations from './FilterByLocations';
import FilterByOrders from './FilterByOrders';
import FilterByParameters from './FilterByParameters';
import FilterByOther from './FilterByOther';
import FilterByStatus from './FilterByStatus';
import HeaderList from './HeaderList';
import { BtnGroup, ResetButton, SubmitButton } from '../../../components/Styles/ButtonStyles';

import Table from '../../../components/Table';
import {
  getLocationsData,
  filterLocationsFastSearch,
  filterLocationsTable,
} from '../../../store/actions/locationsActions';
import { useDispatch, useSelector } from 'react-redux';
import { FilterMenu, SearchTitle, FilterText } from '../../../components/Styles/StyledFilters';
import SearchBtn from '../Partners/LeftBar/SearchBtn';

const Locations = (props) => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.locations.tableData);
  const columns = useSelector((state) => state.locations.columns);
  const rowKeys = useSelector((state) => state.locations.rowKeys);
  const [fastSearch, setFastSearch] = useState();
  useEffect(() => {
    dispatch(getLocationsData());
  }, [dispatch]);
  return (
    <div className="locations-table">
      <style>
        {`
          .locations-table{
            display:flex;
          }
          .locations-table-bar{
            display: flex;
            flex-direction: column;
            width: 70vw;
            margin: 0 2vw;
          }
        `}
      </style>
      <LeftBar>
        <SearchBtn />
      </LeftBar>
      <FilterMenu>
        <SearchTitle>
          <FilterText>Поиск</FilterText>
        </SearchTitle>
        <FilterByLocations />
        <FilterByOrders />
        <FilterByParameters />
        <FilterByOther />
        <FilterByStatus />
        <BtnGroup>
          <ResetButton
            onClick={() => {
              dispatch({ type: 'CLEAR_FILTER' });
              dispatch(getLocationsData());
            }}
          >
            Очистить
          </ResetButton>
          <SubmitButton onClick={() => dispatch(filterLocationsTable())}>Искать</SubmitButton>
        </BtnGroup>
      </FilterMenu>
      <div className="locations-table-bar">
        <HeaderList />
        <Table
          linkProps={'/base/locations/location/'}
          rows={rows}
          columns={columns}
          rowKeys={rowKeys}
          handleChangeFastSearch={(e) => setFastSearch(e.target.value)}
          handleFastSearch={() => dispatch(filterLocationsFastSearch(fastSearch))}
        />
      </div>
    </div>
  );
};

export default Locations;
