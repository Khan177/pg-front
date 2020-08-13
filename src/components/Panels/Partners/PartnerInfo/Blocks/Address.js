import React from "react";
import {
  BlockBody,
  InputTitle,
  Quarter,
  Row,
  BlockTitle,
} from "../../../../Styles/StyledBlocks";
import InputGlobe from "../../../../Inputs/InputGlobe";
import InputEnvelope from "../../../../Inputs/InputEnvelope";
import InputDirections from "../../../../Inputs/InputDirections";
import InputHouse from "../../../../Inputs/InputHouse";
import { sendContragentValues } from "../../../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Address() {
  const state = useSelector((state) => state.contragents.currentContragent);
  const dispatch = useDispatch();
  return (
    <Quarter>
      <BlockTitle>Адрес</BlockTitle>
      <BlockBody>
        <div style={{ width: "100%", marginBottom: "21px" }}>
          <InputTitle>Город</InputTitle>
          <InputGlobe
            value={Object.keys(state).length !== 0 ? state.city : ""}
            onChange={(e) =>
              dispatch(sendContragentValues("city", e.target.value))
            }
            placeholder="Город"
          />
        </div>
        <Row>
          <div style={{ width: "46%", marginBottom: "21px" }}>
            <InputTitle>Район</InputTitle>
            <InputDirections
              value={Object.keys(state).length !== 0 ? state.district : ""}
              onChange={(e) =>
                dispatch(sendContragentValues("district", e.target.value))
              }
              placeholder="Район"
            />
          </div>
          <div style={{ width: "46%", marginBottom: "21px" }}>
            <InputTitle>Почтовый индекс</InputTitle>
            <InputEnvelope
              value={Object.keys(state).length !== 0 ? state.postalCode : ""}
              onChange={(e) =>
                dispatch(sendContragentValues("postalCode", e.target.value))
              }
              placeholder="Индекс"
            />
          </div>
        </Row>
        <div style={{ width: "100%", marginBottom: "21px" }}>
          <InputTitle>Юридический адрес</InputTitle>
          <InputEnvelope
            value={Object.keys(state).length !== 0 ? state.legalAddress : ""}
            onChange={(e) =>
              dispatch(sendContragentValues("legalAddress", e.target.value))
            }
            placeholder={"Адрес"}
          />
        </div>
        <div style={{ width: "100%", marginBottom: "21px" }}>
          <InputTitle>Фактический адрес</InputTitle>
          <InputHouse
            value={Object.keys(state).length !== 0 ? state.physicalAddress : ""}
            onChange={(e) =>
              dispatch(sendContragentValues("physicalAddress", e.target.value))
            }
            placeholder="Адрес"
          />
        </div>
      </BlockBody>
    </Quarter>
  );
}
