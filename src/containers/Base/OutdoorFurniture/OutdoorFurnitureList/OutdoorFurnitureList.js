import React from 'react';
import './../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css';
import { Section } from '../../../../components/Styles/ComponentsStyles';
import makeColumns from './DataTable/columns';
import makeData from './DataTable/data';
import Table from '../../../../components/Table/Table';
import HeaderList from '../HeaderList';
import { useAsyncDebounce, useGlobalFilter, useTable } from 'react-table';
import { ControlToolbar, ToolbarControl } from '../../../../components/Styles/ControlToolbarStyle';
import { BtnExport, BtnPrint, BtnSettings } from '../../../../components/Styles/ButtonStyles';
import print_icon from '../../../../img/outdoor_furniture/table_icons/print.svg';
import export_icon from '../../../../img/outdoor_furniture/table_icons/export_icon.svg';
import settings_icon from '../../../../img/outdoor_furniture/table_icons/setting.svg';
import { Styles } from '../../../../components/Table/TableStyles/TableStyles';
import GlobalFilter from '../../../../components/Panels/Partners/RelatedProjects/DataTable/FilterGlobal';

export default function OutdoorFurnitureList() {
  const columns = React.useMemo(() => makeColumns, []);
  const data = React.useMemo(() => makeData, []);

  const props = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter // useGlobalFilter!
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    preGlobalFilteredRows,
    state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;
  console.log(props);
  React.useEffect(() => {
    // props.dispatch({ type: actions.resetPage })
    console.log(globalFilter);
  }, [globalFilter]);

  return (
    <Section>
      <HeaderList />
      <ControlToolbar>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        <ToolbarControl>
          <BtnPrint>
            <img src={print_icon} alt="" />
          </BtnPrint>
          <BtnExport
          // onClick={exportBtnHandler}
          >
            <img src={export_icon} alt="" />
            Экспорт
          </BtnExport>
          <BtnSettings>
            <img src={settings_icon} alt="" />
          </BtnSettings>
        </ToolbarControl>
      </ControlToolbar>

      <Table columns={columns} data={data}></Table>
    </Section>
  );
}
