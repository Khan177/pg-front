<<<<<<< HEAD
import styled from "styled-components";import search_icon from "../../../../../img/outdoor_furniture/table_icons/find_icon.svg";//Styles for table:export const Styles = styled.div`  .table {      display: inline-block;      border-spacing: 0;      border: 1px solid #D3DFF0;      text-align: left;      margin: 0;      vertical-align: middle;      height: 44px;      color: #1A1A1A;      font-family: "SF UI Display Medium", sans-serif;      font-weight: 400;      font-size: 14px;      border-bottom-left-radius: 0;      border-bottom-right-radius: 0;    .tr {      :last-child {        .td {          border-bottom:  1px solid #D3DFF0;        }      }       :nth-child(even) {              .td {        background-color: #F5F7FA;        }        nth-last-child(1) { background: cyan; }    }    }    .th,    .td {      padding: 8px 0 0 8px;      border-bottom: 1px solid #D3DFF0;      border-right: 1px solid #D3DFF0;      background-color: #fff;      white-space: nowrap;      :last-child {        border-right: 0;      }  ${''}      position: relative;      :last-child {        border-right: 0;      }      .resizer {        display: inline-block;        //background: blue;        width: 5px;        height: 100%;        position: absolute;        right: 0;        top: 0;        transform: translateX(50%);        z-index: 1;        ${'' /* prevents from scrolling while dragging on touch devices */}        touch-action:none;        &.isResizing {          background: red;        }      }    }    &.sticky {      overflow: scroll;      .header,      .footer {        position: sticky;        z-index: 1;        box-shadow: none;        height: 50px;      }      .header {        top: 0;      }      .footer {        bottom: 0;      }      .body {        position: relative;        z-index: 0;      }      [data-sticky-td] {        position: sticky;      }    }  }`;//Styles for Toolbar:export const TableToolbar = styled.div`    background-color: #e7eef8;    width: 100%;    height: 42px;    border-radius: 6px;    padding: 0 10px;    display: flex;    justify-content: space-between;    align-items: center;    margin-bottom: 16px;    position: relative;`;export const TableControl = styled.div`    display: flex;    justify-content: space-between;    width: 176px;    height: 32px;`;export const InputWrapper = styled.div`      width: 100%;       &:before {                content: "";                z-index: 1000;                top: 6px;                left: 15px;                width: 32px;                height: 32px;                position: absolute;                background-image: url(${search_icon});                background-repeat: no-repeat;                background-position: center;                display: inline-block;              }`;export const StyledInput = styled.input`      width: 400px;      height: 32px;      padding: 8px 37px;      border-radius: 5px;      position: relative;      border: none;      &::placeholder{      font-family: "SF UI Display Light", sans-serif;      font-size: 12px;      letter-spacing: 0.25px;      color: #656565;      }`;export const BtnSettings = styled.button`    display: flex;    justify-content: center;    align-items: center;    width: 32px;    height: 32px;    background: #FFFFFF;    border: 1px solid #D3DFF0;    box-sizing: border-box;    border-radius: 4px;`export const BtnPrint = styled.button`    display: flex;    justify-content: center;    align-items: center;    width: 32px;    height: 32px;    background: #FFFFFF;    border: 1px solid #D3DFF0;    box-sizing: border-box;    border-radius: 4px;`export const BtnExport = styled.button`        width: 102px;        height: 32px;        padding: 0 17px;        font-size: 12px;        line-height: 12px;        background: #FFFFFF;        border: 1px solid #D3DFF0;        box-sizing: border-box;        border-radius: 4px;        color: #252525;        display: flex;        justify-content: space-between;        align-items: center;`;//Pagination:export const PaginationStyled = styled.div`    width: 100%;    padding: 0 20px;    border: 1px solid #D3DFF0;    height: 50px;    display: flex;    justify-content: space-between;    align-items: center;    border-bottom-left-radius: 9px;    border-bottom-right-radius: 9px;`;export const PaginationWrap = styled.div`      padding-top: 16px;      color: red`;
=======
import styled from "styled-components";import search_icon from "../../../../../img/outdoor_furniture/table_icons/find_icon.svg";//Styles for table:export const Styles = styled.div`  .table {      display: inline-block;      border-spacing: 0;      border: 1px solid #D3DFF0;      text-align: left;      margin: 0;      vertical-align: middle;      height: 44px;      color: #1A1A1A;      font-family: "SF UI Display Medium", sans-serif;      font-weight: 400;      font-size: 14px;      border-bottom-left-radius: 0;      border-bottom-right-radius: 0;    .tr {      :last-child {        .td {          border-bottom:  1px solid #D3DFF0;        }      }       :nth-child(even) {              .td {        background-color: #F5F7FA;        }        nth-last-child(1) { background: cyan; }    }    }    .th,    .td {      padding: 8px 0 0 8px;      border-bottom: 1px solid #D3DFF0;      border-right: 1px solid #D3DFF0;      background-color: #fff;      white-space: nowrap;      :last-child {        border-right: 0;      }  ${''}      position: relative;      :last-child {        border-right: 0;      }      .resizer {        display: inline-block;        //background: blue;        width: 5px;        height: 100%;        position: absolute;        right: 0;        top: 0;        transform: translateX(50%);        z-index: 1;        ${'' /* prevents from scrolling while dragging on touch devices */}        touch-action:none;        &.isResizing {          background: red;        }      }    }    &.sticky {      overflow: scroll;      .header,      .footer {        position: sticky;        z-index: 1;        box-shadow: none;        height: 50px;      }      .header {        top: 0;      }      .footer {        bottom: 0;      }      .body {        position: relative;        z-index: 0;      }      [data-sticky-td] {        position: sticky;      }    }  }`;//Styles for Toolbar:export const SearchBlock = styled.div`        width: 100%;`;export const TableToolbar = styled.div`    background-color: #e7eef8;    border-radius: 6px;    padding: 10px;    display: flex;    justify-content: flex-end;    margin-bottom: 16px;    position: relative;`;export const TableControl = styled.div`    display: flex;    justify-content: space-between;    width: 176px;    height: 32px;`;export const InputWrapper = styled.div`        margin-right:12px;       &:before {                content: "";                z-index: 1000;                top: 12px;                right: 34%;                width: 32px;                height: 32px;                position: absolute;                background-image: url(${search_icon});                background-repeat: no-repeat;                background-position: center;                display: inline-block;              }`;export const StyledInput = styled.input`      width: 400px;      height: 32px;      padding: 8px 37px;      border-radius: 5px;      position: relative;      border: none;      &::placeholder{      font-family: "SF UI Display Light", sans-serif;      font-size: 12px;      letter-spacing: 0.25px;      color: #656565;      }`;export const BtnSettings = styled.button`    display: flex;    justify-content: center;    align-items: center;    width: 32px;    height: 32px;    background: #FFFFFF;    border: 1px solid #D3DFF0;    box-sizing: border-box;    border-radius: 4px;`export const BtnPrint = styled.button`    display: flex;    justify-content: center;    align-items: center;    width: 32px;    height: 32px;    background: #FFFFFF;    border: 1px solid #D3DFF0;    box-sizing: border-box;    border-radius: 4px;`export const BtnExport = styled.button`        width: 102px;        height: 32px;        padding: 0 17px;        font-size: 12px;        line-height: 12px;        background: #FFFFFF;        border: 1px solid #D3DFF0;        box-sizing: border-box;        border-radius: 4px;        color: #252525;        display: flex;        justify-content: space-between;        align-items: center;`;//Pagination:export const PaginationStyled = styled.div`    width: 100%;    padding: 0 20px;    border: 1px solid #D3DFF0;    height: 50px;    display: flex;    justify-content: space-between;    align-items: center;    border-bottom-left-radius: 9px;    border-bottom-right-radius: 9px;`;export const PaginationWrap = styled.div`      padding-top: 16px;      color: red`;export const ButtonSearchTable = styled.a`    display: block;    position: absolute;    top: 29%;    right: 13%;`
>>>>>>> 2917ca9a248a6afba083b712a4e2829bfdf5edb3
