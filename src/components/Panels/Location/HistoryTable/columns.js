const columns = [
  {
    Header: 'Код',
    accessor: 'col1', // accessor is the "key" in the data
    sticky: 'left',
    width: 150,
  },
  {
    Header: 'Дата',
    accessor: 'col2',
  },
  {
    Header: 'Ответственный',
    accessor: 'col3',
    width: 300,
  },
  {
    Header: 'Тип манипуляции',
    accessor: 'col4',
    width: 250,
  },
  {
    Header: 'Информация до',
    accessor: 'col5',
    width: 200,
  },
  {
    Header: 'Информация после',
    accessor: 'col6',
    width: 200,
  },
  {
    Header: '',
    accessor: 'col7',
    width: 100,
    sticky: 'right',
  },
];

export default columns;
