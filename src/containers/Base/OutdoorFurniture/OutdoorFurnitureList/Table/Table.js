import React from "react";import styled from "styled-components";import {useSticky} from "react-table-sticky";import {useAsyncDebounce, useBlockLayout, useFilters, useGlobalFilter, usePagination, useTable} from 'react-table'import makeData from "./DataTable/data";import makeColumns from "./DataTable/columns";import search_icon from "../../../../../img/outdoor_furniture/table_icons/find_icon.svg";const Styles = styled.div`  width: 100%;  .table {      border: 1px solid #D3DFF0;      text-align: left;      margin: 0;      vertical-align: middle;      height: 44px;      color: #1A1A1A;      font-family: "SF UI Display Medium", sans-serif;      font-weight: 400;      font-size: 14px;      border-bottom-left-radius: 0;      border-bottom-right-radius: 0;      //width: fit-content;    .tr {      :last-child {        .td {          border-bottom:  1px solid #D3DFF0;        }      }       :nth-child(even) {              .td {        background-color: #F5F7FA;        }        nth-last-child(1) { background: cyan; }    }    }    .th,    .td {      padding: 5px;      border-bottom: 1px solid #D3DFF0;      border-right: 1px solid #D3DFF0;      background-color: #fff;      white-space: nowrap;            :last-child {        border-right: 0;      }      §      .resizer {        display: inline-block;        width: 5px;        height: 100%;        position: absolute;        right: 0;        top: 0;        transform: translateX(50%);        z-index: 1;        &.isResizing {          background: red;        }      }    }    &.sticky {      overflow: scroll;      .header,      .footer {        position: sticky;        z-index: 1;        //width: fit-content;        box-shadow: none;        height: 50px;      }      .header {        top: 0;      }      .footer {        bottom: 0;      }      .body {        position: relative;        z-index: 0;      }      [data-sticky-td] {        position: sticky;      }    }  }`;const TableToolbar = styled.div`    background-color: #e7eef8;    width: 100%;    border-radius: 6px;    padding: 10px;    display: flex;    justify-content: space-between;    margin-bottom: 16px;    position: relative;`;const InputWrapper = styled.div`      width: 100%;       &:before {                content: "";                z-index: 1000;                top: 15px;                left: 15px;                width: 32px;                height: 32px;                position: absolute;                background-image: url(${search_icon});                background-repeat: no-repeat;                background-position: center;                display: inline-block;              }`;const StyledInput = styled.input`      width: 400px;      padding: 8px 37px;      border-radius: 5px;      position: relative;      border: none;      &::placeholder{      font-family: "SF UI Display Light", sans-serif;      font-size: 12px;      letter-spacing: 0.25px;      color: #656565;      }`;const PaginationStyled = styled.div`    width: 100%;    border: 1px solid #D3DFF0;    height: 50px;    display: flex;    justify-content: center;    align-items: center;    border-bottom-left-radius: 9px;    border-bottom-right-radius: 9px;`;function GlobalFilter({                          preGlobalFilteredRows,                          globalFilter,                          setGlobalFilter,                      }) {    const count = preGlobalFilteredRows.length    const [value, setValue] = React.useState(globalFilter)    const onChange = useAsyncDebounce(value => {        setGlobalFilter(value || undefined)    }, 200)    return (        <InputWrapper>            <StyledInput                value={value || ""}                onChange={e => {                    setValue(e.target.value);                    onChange(e.target.value);                }}                placeholder={`Быстрый поиск, ${count}  записей...`}            />        </InputWrapper>    )}function Table({columns, data}) {    // const defaultColumn = React.useMemo(    //     () => ({    //         minWidth: 50,    //         width: 150,    //         maxWidth: 400    //     }),    //     []    // );    const getColumnWidth = (rows, accessor, headerText) => {        const maxWidth = 400        const magicSpacing = 10        const cellLength = Math.max(            ...rows.map(row => (`${row[accessor]}` || '').length),            headerText.length,        )        return Math.min(maxWidth, cellLength * magicSpacing)    }    const {        page, // Instead of using 'rows', we'll use page,        // which has only the rows for the active page        // The rest of these things are super handy, too ;)        canPreviousPage,        canNextPage,        pageOptions,        pageCount,        gotoPage,        nextPage,        previousPage,        setPageSize,        state,        preGlobalFilteredRows,        setGlobalFilter,        state: {pageIndex, pageSize},        getTableProps,        getTableBodyProps,        headerGroups,        prepareRow    } = useTable(        {            columns,            data,            // defaultColumn, // Be sure to pass the defaultColumn option            initialState: {pageIndex: 0, pageSize: 10},            getColumnWidth        },        useFilters, // useFilters!        useGlobalFilter, // useGlobalFilter!        usePagination,        useBlockLayout,        useSticky    );    return (        <Styles>            <TableToolbar>                <GlobalFilter                    preGlobalFilteredRows={preGlobalFilteredRows}                    globalFilter={state.globalFilter}                    setGlobalFilter={setGlobalFilter}                />            </TableToolbar>            <div                {...getTableProps()}                className="table sticky"                style={{width: "100%", height: 500}}            >                <div className="header" >                    {headerGroups.map(headerGroup => (                        <div {...headerGroup.getHeaderGroupProps()} className="tr">                            {headerGroup.headers.map(column => (                                <div {...column.getHeaderProps()} className="th">                                    {column.render("Header")}                                </div>                            ))}                        </div>                    ))}                </div>                <div {...getTableBodyProps()} className="body">                    {page.map((row, i) => {                        prepareRow(row);                        return (                            <div {...row.getRowProps()} className="tr">                                {row.cells.map(cell => {                                    return (                                        <div {...cell.getCellProps()} className="td">                                            {cell.render("Cell")}                                        </div>                                    );                                })}                            </div>                        );                    })}                </div>            </div>            <PaginationStyled>                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>                    {'<<'}                </button>                {' '}                <button onClick={() => previousPage()} disabled={!canPreviousPage}>                    {'<'}                </button>                {' '}                <button onClick={() => nextPage()} disabled={!canNextPage}>                    {'>'}                </button>                {' '}                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>                    {'>>'}                </button>                {' '}                <span>          Page{' '}                    <strong>            {pageIndex + 1} of {pageOptions.length}          </strong>{' '}        </span>                <span>          | Go to page:{' '}                    <input                        type="number"                        defaultValue={pageIndex + 1}                        onChange={e => {                            const page = e.target.value ? Number(e.target.value) - 1 : 0                            gotoPage(page)                        }}                        style={{width: '100px'}}                    />        </span>{' '}                <select                    value={pageSize}                    onChange={e => {                        setPageSize(Number(e.target.value))                    }}                >                    {[10, 20, 30, 40, 50].map(pageSize => (                        <option key={pageSize} value={pageSize}>                            {pageSize}                        </option>                    ))}                </select>            </PaginationStyled>        </Styles>    );}function List() {    const columns = React.useMemo(() => makeColumns, [])    const data = React.useMemo(() => makeData, []);    return <Table columns={columns} data={data}/>;}export default List;