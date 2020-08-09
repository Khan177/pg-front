import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftBar from "../../../components/LeftBar/LeftBar";
import FilterBar from "./OutdoorFurnitureList/FilterBar/FilterBar";
import SearchButton from "../../../components/ButtonGroup/SearchButton";
import HeaderList from "./HeaderList";
import {
  getOutdoorFurnitureData,
  getCities,
  getDistricts,
  getPostalCodes,
} from "../../../store/actions";

import Table from "../../../components/Table";

export default function OutdoorFurniture() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOutdoorFurnitureData());
    dispatch(getCities());
    dispatch(getDistricts());
    dispatch(getPostalCodes());
  }, [dispatch]);
  const outdoorFurnitureColums = [
    "Код",
    "Город",
    "Почтовый индекс",
    "Маркетинговый адрес",
    "Юридический адрес",
    "Формат",
    "Координаты",
    "Горит",
  ];
  return (
    <div className="outdoor-furniture">
      <style>
        {`
          .outdoor-furniture {
            display: flex;
          }
          .outdoor-table-bar {
            padding: 2% 3%;
            width:60vw
          }
        `}
      </style>
      <LeftBar>
        <SearchButton />
      </LeftBar>
      <FilterBar />
      <div className="outdoor-table-bar">
        <HeaderList />
        <Table columns={outdoorFurnitureColums} />
      </div>
    </div>
  );
}
