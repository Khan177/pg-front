import React, { useState } from "react";
import {
  BlockBody,
  BlockTitle,
  BlockTitleText,
  Large,
} from "../../../../Styles/StyledBlocks";
import { BtnSuccess } from "../../../../Styles/ButtonStyles";
import ExtraRow from "./Extras/ExtraRow";
import { sendValues } from "../../../../../store/actions/actions";
import { useSelector } from "react-redux";

export default function Sides() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const initialList = [ExtraRow];
  const [theList, setTheList] = useState(initialList);
  const removeClickHandler = (e, index) => {
    e.preventDefault();
    let newList = [...theList];

    if (index > -1) {
      newList.splice(index, 1);
    }
    setTheList(newList);
  };

  const addClickHandler = (e) => {
    e.preventDefault();
    setTheList([...theList, ExtraRow]);
  };
  return (
    <Large>
      <BlockTitle style={{ padding: "20px 26px 10px 24px" }}>
        <BlockTitleText>Стороны конструкции</BlockTitleText>
        <BtnSuccess onClick={addClickHandler}>Добавить еще</BtnSuccess>
      </BlockTitle>
      <BlockBody>
        {current
          ? current.sides.map((side) => {
              return (
                <div key={side._id}>
                  <ExtraRow
                    sendValues={sendValues}
                    current={side}
                    removeClickHandler={(e) => removeClickHandler(e, side._id)}
                  />
                </div>
              );
            })
          : theList.map((row, index) => {
              return (
                <div key={index}>
                  <ExtraRow
                    current={current}
                    removeClickHandler={(e) => removeClickHandler(e, index)}
                  />
                </div>
              );
            })}
      </BlockBody>
    </Large>
  );
}
