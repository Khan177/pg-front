import React from 'react';
import makeColumns from './DataTable/columns';
import makeData from './DataTable/data';
import Table from '../../../Table/Table';

export default function ConstructionHist() {
  const columns = React.useMemo(() => makeColumns, []);
  const data = React.useMemo(() => makeData, []);

  return <Table columns={columns} data={data} />;
}
