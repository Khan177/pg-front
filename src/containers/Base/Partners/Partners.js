import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "./FilterBar/FilterBar";
import Table from "../../../components/Table";
import SearchBtn from "./LeftBar/SearchBtn";
import LeftBar from "../../../components/LeftBar/LeftBar";
import {
  getPartnersData,
  getPartnersFiltered,
  getPartners,
  setTable
} from "../../../store/actions";
import "./Style/style.css";

const Partners = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartnersData());
    dispatch(getPartners());
  }, [dispatch]);

  const rows = useSelector((state) => state.table.partnersTableData);
  const rowKeys = useSelector((state) => state.table.partnersRowKeys);
  const [fastSearch, setFastSearch] = useState();

  const partnersColumns = [
    "Тип контрагента",
    "Контрагент",
    "Бренд",
    "Сектор деятельности",
    "Тип клиента",
  ];

  return (
    <div className="partners">
      <style>
        {`
          .partners {
            display: flex;
          }
          .partners-table-bar {
            padding: 2% 3%;
            width:60vw
          }
        `}
      </style>
      <LeftBar>
        <SearchBtn />
      </LeftBar>
      <FilterBar />
      <div className="partners-table-bar">
        <Table
          params={dispatch(setTable('partnerTable'))}
          columns={partnersColumns}
          rows={rows}
          rowKeys={rowKeys}
          handleChangeFastSearch={(e) => setFastSearch(e.target.value)}
          handleFastSearch={() => {
            dispatch(getPartnersFiltered(fastSearch));
          }}
        />
      </div>
    </div>
  );
};
export default Partners;
