import React from "react";
import {
  BlockBody,
  Row,
  Medium,
  BlockTitleText,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import GroupRadio from "../../../../Inputs/GroupRadio";
import InputAnchor from "../../../../Inputs/InputAnchor";
import { SecondaryBtnStyled } from "../../../../Styles/ButtonStyles";
import { sendValues } from "../../../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Details() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  return (
    <Medium style={{ height: "403px" }}>
      <BlockTitle>Детали конструкции</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: "47%" }}>
            <InputTitle>Семейство конструкции</InputTitle>
            <InputAnchor
              value={current ? current.familyConstruction : ""}
              placeholder="Семейство"
              onChange={(e) =>
                dispatch(sendValues("familyConstruction", e.target.value))
              }
            />
          </div>
          <div style={{ width: "47%" }}>
            <InputTitle>Доступность конструкции</InputTitle>
            <InputAnchor
              value={current ? current.availabilityConstruction : ""}
              placeholder="Доступность"
              onChange={(e) =>
                dispatch(sendValues("availabilityConstruction", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: "47%" }}>
            <InputTitle>Подсемейство конструкции</InputTitle>
            <InputAnchor
              value={current ? current.subfamilyConstruction : ""}
              placeholder="Подсемейство"
              onChange={(e) =>
                dispatch(sendValues("subfamilyConstruction", e.target.value))
              }
            />
          </div>
          <div style={{ width: "47%" }}>
            <InputTitle>Модель</InputTitle>
            <InputAnchor
              value={current ? current.model : ""}
              placeholder="Модель"
              onChange={(e) => dispatch(sendValues("model", e.target.value))}
            />
          </div>
        </Row>
        <Row>
          <div>
            <InputTitle>Наличие земли</InputTitle>
            <GroupRadio
              value={current ? current.availabilityLand : ""}
              onChange={(e) =>
                dispatch(sendValues("availabilityLand", e.target.value))
              }
            />
          </div>
          <SecondaryBtnStyled>Открыть местоположение</SecondaryBtnStyled>
        </Row>
      </BlockBody>
    </Medium>
  );
}
