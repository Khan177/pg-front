import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  IconButton,
  TextField,
  Button,
  TableSortLabel,
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  Print,
  ImportExport,
  Settings,
  ArrowDownward,
  ArrowUpward,
  Edit,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getOutdoorFurnitureFiltered } from "../store/actions/actions";

import "./Table.css";
import Construction from "../containers/Base/Construction/Construction";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells, rowKeys } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  console.log(headCells);
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell}
            align={"left"}
            padding={"default"}
            sortDirection={orderBy === headCell ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell}
              direction={orderBy === headCell ? order : "asc"}
              onClick={createSortHandler(rowKeys[headCells.indexOf(headCell)])}
              IconComponent={order === "asc" ? ArrowDownward : ArrowUpward}
              style={{ whiteSpace: "nowrap" }}
            >
              {headCell}
              {orderBy === headCell ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    padding: "1% 2%",
  },
  table: {
    width: "100%",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable({
  linkProps,
  columns,
  rowKeys,
  rows,
  handleFastSearch,
  handleChangeFastSearch,
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("city");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log(rows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    console.log(order);
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [fastSearch, setFastSearch] = useState();
  return (
    <div className={classes.root}>
      <div className="table-toolbar">
        <div className="fast-search">
          <IconButton className={classes.iconButton} aria-label="menu">
            <Search />
          </IconButton>
          <TextField
            className={classes.input}
            placeholder="Быстрый поиск"
            onChange={(e) => handleChangeFastSearch(e)}
          />
          <Button
            color="primary"
            size="small"
            onClick={() => handleFastSearch()}
          >
            Найти
          </Button>
        </div>
        <div className="export-print">
          <IconButton style={{ backgroundColor: "white", borderRadius: "5px" }}>
            <Print />
          </IconButton>
          <Button
            variant="contained"
            color="default"
            startIcon={<ImportExport />}
            style={{ backgroundColor: "white", margin: "0 4px" }}
          >
            Экспорт
          </Button>
          <IconButton style={{ backgroundColor: "white", borderRadius: "5px" }}>
            <Settings />
          </IconButton>
        </div>
      </div>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={columns}
              rowKeys={rowKeys}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={(Math.random() * 100).toString()}
                    >
                      <TableCell align={"left"}>
                        <Link to={`${linkProps}${row._id}`}>
                          <IconButton>
                            <Edit />
                          </IconButton>
                        </Link>
                      </TableCell>
                      {rowKeys.map((rowKey) => {
                        return (
                          <TableCell
                            key={(Math.random() * 100).toString()}
                            align={"left"}
                          >
                            {row[rowKey] ? row[rowKey].toString() : ""}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
