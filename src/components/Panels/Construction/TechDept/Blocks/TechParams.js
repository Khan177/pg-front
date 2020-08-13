import React from "react";
import {
  BlockBody,
  BlockTitle,
  BlockTitleText,
  InputTitle,
  Medium,
  Row,
} from "../../../../Styles/StyledBlocks";
import { sendValues } from "../../../../../store/actions/actions";
import InputAnchor from "../../../../Inputs/InputAnchor";
import { useSelector, useDispatch } from "react-redux";

export default function TechParams() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  return (
    <Medium>
      <BlockTitle>Технические параметры</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: "49%" }}>
            <InputTitle>Техническая проблема</InputTitle>
            <InputAnchor
              value={current ? current.techProblem : ""}
              onChange={(e) =>
                dispatch(sendValues("techProblem", e.target.value))
              }
            />
          </div>
          <div style={{ width: "49%" }}>
            <InputTitle>Комментарий</InputTitle>
            <InputAnchor
              value={current ? current.techComment : ""}
              onChange={(e) =>
                dispatch(sendValues("techComment", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: "49%" }}>
            <InputTitle>Статус по подключению</InputTitle>
            <InputAnchor
              value={current ? current.connectionStatus : ""}
              onChange={(e) =>
                dispatch(sendValues("connectionStatus", e.target.value))
              }
            />
          </div>
          <div style={{ width: "49%" }}>
            <InputTitle>Пометка</InputTitle>
            <InputAnchor
              value={current ? current.markup : ""}
              onChange={(e) => dispatch(sendValues("markup", e.target.value))}
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
}
