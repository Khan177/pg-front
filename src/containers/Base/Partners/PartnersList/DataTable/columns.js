import React from 'react';
import icon_pen from '../../../../../img/outdoor_furniture/table_icons/bx-dots-vertical.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const columns = [
  {
    Header: 'Тип контрагента',
    accessor: 'partnerType', // accessor is the "key" in the data
    sticky: 'left',
    width: 180,
  },
  {
    Header: 'Контрагент',
    accessor: 'partnerName',
    width: 200,
  },
  {
    Header: 'Бренд',
    accessor: 'brand',
    width: 200,
  },
  {
    Header: 'Сектор деятельности',
    accessor: 'sector',
    width: 200,
  },
  {
    Header: 'Тип клиента',
    accessor: 'clientType',
    width: 180,
  },
  {
    width: 60,
    Header: '',
    accessor: '_id',
    sticky: 'right',
    Cell: (row) => {
      return (<StyledLink to={{ pathname: '/base/partners/info', rowID: row.cell.value }}>
        <img src={icon_pen} alt="" />
      </StyledLink>);
    },
  },
];

export default columns;
