import React from "react";
import {
  BlockBody,
  Large,
  Row,
  BlockTitleText,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import InputAnchor from "../../../../Inputs/InputAnchor";
import { sendValues } from "../../../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Accounting() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();

  return (
    <Large>
      <BlockTitle>Парамметры - 1С</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: "49%" }}>
            <InputTitle>Инвентарный номер</InputTitle>
            <InputAnchor
              value={current ? current.bookkeepInventoryNumber : ""}
              placeholder="Инвентарный номер"
              onChange={(e) =>
                dispatch(sendValues("bookkeepInventoryNumber", e.target.value))
              }
            />
          </div>
        </Row>
      </BlockBody>
    </Large>
  );
}
