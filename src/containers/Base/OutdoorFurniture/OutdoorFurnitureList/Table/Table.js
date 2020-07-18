import React from 'react'import styled from 'styled-components'import {defaultColumn, useAsyncDebounce, useFilters, useGlobalFilter, usePagination, useTable} from 'react-table'import "./../../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"import makeColumns from "./DataTable/columns"import search_icon from "./../../../../../img/outdoor_furniture/table_icons/find_icon.svg"import makeData from './DataTable/data'// import PaginationTable from "./TablePagination/TablePagination";const Styles = styled.div`  width: 100%;  padding: 0;  table {    border-spacing: 0;    border: 1px solid #D3DFF0;    border-collapse: separate;    border-radius: 10px;    table-layout: fixed;    thead {        display: table-header-group;        vertical-align: middle;        border-color: inherit;        border-collapse: separate;    }    tr {        display: table-row;        vertical-align: inherit;        border-color: inherit;      :last-child {        td {          border-bottom: 0;        }      }      :nth-child(even) {        background-color: #F5F7FA;    }    th,    td {      text-align: left;      margin: 0;      padding: 0 10px;      vertical-align: middle;      height: 44px;      color: #1A1A1A;      font-family: "SF UI Display Medium", sans-serif;      font-weight: 400;      font-size: 14px;      line-height: 16px;      max-width: 150px;      white-space: nowrap;      overflow: hidden;      text-overflow: ellipsis;      :last-child {        border-right: 0;      }    }    td {    border-top: 1px solid  #D3DFF0;   }    thead:first-child tr:first-child th:first-child, tbody:first-child tr:first-child td:first-child {    border-radius: 10px 0 0 0;    }    thead:last-child tr:last-child th:first-child, tbody:last-child tr:last-child td:first-child {    border-radius: 0 0 0 10px;    }  },    .pagination {    padding: 0.5rem;  }`const TableToolbar = styled.div`    background-color: #e7eef8;    width: 100%;    border-radius: 6px;    padding: 10px;    display: flex;    justify-content: space-between;    margin-bottom: 16px;    position: relative;`;const InputWrapper = styled.div`      width: 100%;       &:before {                content: "";                z-index: 1000;                top: 15px;                left: 15px;                width: 32px;                height: 32px;                position: absolute;                background-image: url(${search_icon});                background-repeat: no-repeat;                background-position: center;                display: inline-block;              }`;const StyledInput = styled.input`      width: 400px;      padding: 8px 37px;      border-radius: 5px;      position: relative;      border: none;      &::placeholder{      font-family: "SF UI Display Light", sans-serif;      font-size: 12px;      letter-spacing: 0.25px;      color: #656565;      }`;function GlobalFilter({                          preGlobalFilteredRows,                          globalFilter,                          setGlobalFilter,                      }) {    const count = preGlobalFilteredRows.length    const [value, setValue] = React.useState(globalFilter)    const onChange = useAsyncDebounce(value => {        setGlobalFilter(value || undefined)    }, 200)    return (        <InputWrapper>            <StyledInput                value={value || ""}                onChange={e => {                    setValue(e.target.value);                    onChange(e.target.value);                }}                placeholder={`Быстрый поиск, ${count}  записей...`}            />        </InputWrapper>    )}function Table({columns, data}) {    const {        page, // Instead of using 'rows', we'll use page,        // which has only the rows for the active page        // The rest of these things are super handy, too ;)        canPreviousPage,        canNextPage,        pageOptions,        pageCount,        gotoPage,        nextPage,        previousPage,        setPageSize,        getTableProps,        getTableBodyProps,        headerGroups,        rows,        prepareRow,        state,        preGlobalFilteredRows,        setGlobalFilter,        state: {pageIndex, pageSize},    } = useTable(        {            columns,            data,            defaultColumn, // Be sure to pass the defaultColumn option            initialState: {pageIndex: 0, pageSize: 10},        },        useFilters, // useFilters!        useGlobalFilter, // useGlobalFilter!        usePagination    )    const handleChangePage = (event, pageCount) => {        // setPage(newPage);        gotoPage(pageCount - 1)        console.log("click")    };    console.log('pageIndex', pageIndex)    return (        <><pre>        <code>          {JSON.stringify(              {                  pageIndex,                  pageSize,                  pageCount,                  canNextPage,                  canPreviousPage,              },              null,              2          )}        </code>      </pre>            <TableToolbar>                <GlobalFilter                    preGlobalFilteredRows={preGlobalFilteredRows}                    globalFilter={state.globalFilter}                    setGlobalFilter={setGlobalFilter}                />            </TableToolbar>            <table {...getTableProps()}>                <thead>                {headerGroups.map(headerGroup => (                    <tr {...headerGroup.getHeaderGroupProps()}>                        {headerGroup.headers.map(column => (                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>                        ))}                    </tr>                ))}                </thead>                <tbody {...getTableBodyProps()}>                {page.map((row, i) => {                    prepareRow(row)                    return (                        <tr {...row.getRowProps()}>                            {row.cells.map(cell => {                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>                            })}                        </tr>                    )                })}                </tbody>            </table>            <div className="pagination">                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>                    {'<<'}                </button>{' '}                <button onClick={() => previousPage()} disabled={!canPreviousPage}>                    {'<'}                </button>{' '}                <button onClick={() => nextPage()} disabled={!canNextPage}>                    {'>'}                </button>{' '}                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>                    {'>>'}                </button>{' '}                <span>          Page{' '}                    <strong>            {pageIndex + 1} of {pageOptions.length}          </strong>{' '}        </span>                <span>          | Go to page:{' '}                    <input                        type="number"                        defaultValue={pageIndex + 1}                        onChange={e => {                            const page = e.target.value ? Number(e.target.value) - 1 : 0                            gotoPage(page)                        }}                        style={{ width: '100px' }}                    />        </span>{' '}                <select                    value={pageSize}                    onChange={e => {                        setPageSize(Number(e.target.value))                    }}                >                    {[10, 20, 30, 40, 50].map(pageSize => (                        <option key={pageSize} value={pageSize}>                            Show {pageSize}                        </option>                    ))}                </select>            </div>        </>    )}function List() {    const columns = React.useMemo(() => makeColumns, [])    const data = React.useMemo(() => makeData, [])    return (        <Styles>            <Table columns={columns} data={data}/>        </Styles>    )}export default List