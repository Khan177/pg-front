import React from "react";
import {
  BlockBody,
  Medium,
  Row,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import InputAnchor from "../../../../Inputs/InputAnchor";
import DatePicker from "../../../../Inputs/DatePicker";
import Multiline from "../../../../Inputs/Multiline";
import { sendValues } from "../../../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Intro(props) {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  return (
    <Medium style={{ height: "403px" }}>
      <BlockTitle>Общая информация</BlockTitle>
      <BlockBody>
        <Row>
          <div style={{ width: "36%" }}>
            <InputTitle>Город</InputTitle>
            <InputAnchor
              value={current ? current.city : ""}
              placeholder="Город"
              onChange={(e) => dispatch(sendValues("city", e.target.value))}
            />
          </div>
          <div style={{ width: "36%" }}>
            <InputTitle>Район</InputTitle>
            <InputAnchor
              value={current ? current.district : ""}
              placeholder="Район"
              onChange={(e) => dispatch(sendValues("district", e.target.value))}
            />
          </div>
          <div style={{ width: "20%" }}>
            <InputTitle>Почтовый индекс</InputTitle>
            <InputAnchor
              value={current ? current.postalCode : ""}
              placeholder="Индекс"
              onChange={(e) =>
                dispatch(sendValues("postalCode", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: "36%" }}>
            <InputTitle>Владелец</InputTitle>
            <InputAnchor
              value={current ? current.owner : ""}
              placeholder="Владелец"
              onChange={(e) => dispatch(sendValues("owner", e.target.value))}
            />
          </div>
          <div style={{ width: "60%" }}>
            <InputTitle>Маркетинговый адрес</InputTitle>
            <InputAnchor
              value={current ? current.marketingAddress : ""}
              placeholder="Маркетинговый адрес"
              onChange={(e) =>
                dispatch(sendValues("marketingAddress", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <div style={{ width: "30%" }}>
            <InputTitle>Дата создания</InputTitle>
            <DatePicker
              value={current ? new Date(current.dateOfCreation) : new Date()}
              onChange={(e) =>
                dispatch(sendValues("dateOfCreation", e.target.value))
              }
            />
          </div>
          <div style={{ width: "66%" }}>
            <InputTitle>Комментарий</InputTitle>
            <Multiline
              value={current ? current.generalComment : ""}
              onChange={(e) =>
                dispatch(sendValues("generalComment", e.target.value))
              }
            />
          </div>
        </Row>
      </BlockBody>
    </Medium>
  );
}
