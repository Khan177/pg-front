import React from 'react';
import makeColumns from './columns';
import makeData from './data';
import Table from '../../../Table/Table';

export const HistoryTable = () => {
  const columns = React.useMemo(() => makeColumns, []);
  const data = React.useMemo(() => makeData, []);
  return <Table columns={columns} data={data} />;
}

export default HistoryTable;
