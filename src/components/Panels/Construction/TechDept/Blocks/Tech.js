import React from "react";
import {
  BlockBody,
  Medium,
  Row,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import InputAnchor from "../../../../Inputs/InputAnchor";
import { getConstructionProps } from "../../../../../store/actions/constructionActions";
import { useSelector, useDispatch } from "react-redux";

export default function Tech() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Общие параметры</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: "49%" }}>
            <InputTitle>Экипаж</InputTitle>
            <InputAnchor
              value={current ? current.crew : ""}
              placeholder="Экипаж"
              onChange={(e) => dispatch(getConstructionProps("crew", e.target.value))}
            />
          </div>
          <div style={{ width: "49%" }}>
            <InputTitle>Инвентарный номер</InputTitle>
            <InputAnchor
              value={current ? current.generalInventoryNumber : ""}
              placeholder="Инвентарный"
              onChange={(e) =>
                dispatch(getConstructionProps("generalInventoryNumber", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: "49%" }}>
            <InputTitle>Номер телефона конструкции</InputTitle>
            <InputAnchor
              value={current ? current.constructionPhoneNumber : ""}
              placeholder="Номер телефона"
              onChange={(e) =>
                dispatch(getConstructionProps("constructionPhoneNumber", e.target.value))
              }
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
}
