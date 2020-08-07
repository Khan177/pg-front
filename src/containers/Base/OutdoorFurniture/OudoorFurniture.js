import React, { Component } from "react";
import OutdoorFurnitureList from "./OutdoorFurnitureList/OutdoorFurnitureList";
import LeftBar from "../../../components/LeftBar/LeftBar";
import FilterBar from "./OutdoorFurnitureList/FilterBar/FilterBar";
import SearchButton from "../../../components/ButtonGroup/SearchButton";
import { PageWrap } from "../../../components/Styles/ComponentsStyles";
import { Col, Grid, Row } from "react-flexbox-grid";

class OutdoorFurniture extends Component {
  render() {
    return (
      <div className="outdoor-furniture">
        <style jsx>
          {`
            .outdoor-furniture {
              display: flex;
            }
          `}
        </style>
        <LeftBar>
          <SearchButton />
        </LeftBar>
        <FilterBar />
        <OutdoorFurnitureList />
      </div>
    );
  }
}

export default OutdoorFurniture;
