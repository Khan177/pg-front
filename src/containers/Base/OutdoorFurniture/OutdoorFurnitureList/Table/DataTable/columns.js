import React from "react";import icon_pen from "./../../../../../../img/outdoor_furniture/table_icons/bx-dots-vertical.svg"import styled from "styled-components";const StyledSpan = styled.span`cursor: pointer;`const clickHandler = () => {  alert("Click")};const columns =  [        {            Header: 'Код',            accessor: 'col1', // accessor is the "key" in the data            sticky: 'left',        },        {            Header: 'Город',            accessor: 'col2',        },        {            Header: 'Почтовый индекс',            accessor: 'col3',        },        {            Header: 'Адрес маркетинговый',            accessor: 'col4',        },        {            Header: 'Адрес юридический',            accessor: 'col5',        },        {            Header: 'Формат',            accessor: 'col6',        },        {            Header: 'Координаты',            accessor: 'col7',        },        {            Header: 'Горит',            accessor: 'col8',        },        {            width: 100,            Header: '',            accessor: 'col9',            sticky: 'right',            Cell: row => (                <StyledSpan                onClick={clickHandler}                >                    <img src={icon_pen} alt=""/>                </StyledSpan>            )        },    ]export default columns