import React from "react";
import {
  BlockBody,
  BlockTitleText,
  ImageBody,
  Medium,
  Row,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import { BtnStyledSecondary } from "../../../../Styles/ButtonStyles";
import photo from "../../../../../img/outdoor_furniture/photo_load.png";
import InputAnchor from "../../../../Inputs/InputAnchor";
import { getConstructionProps } from "../../../../../store/actions/constructionActions";
import { useSelector, useDispatch } from "react-redux";

export default function Others() {
  const current = useSelector(
    (state) => state.construction.currentConstruction
  );
  const dispatch = useDispatch();
  const loadClickHandler = (e) => {
    e.preventDefault();
    alert("loading");
  };
  return (
    <Medium style={{ minHeight: 600 }}>
      <BlockTitle>Другие параметры</BlockTitle>
      <BlockBody>
        <Row>
          <ImageBody>
            <img src={photo} alt="" width="100%" height="100%" />
          </ImageBody>
          <div style={{ width: "60%" }}>
            <InputTitle>Ссылка</InputTitle>
            <InputAnchor
              value={current ? current.link : ""}
              placeholder="Ссылка"
              onChange={(e) => dispatch(getConstructionProps("link", e.target.value))}
            />
            <InputTitle>Координаты</InputTitle>
            <InputAnchor
              value={current ? current.coordinates : ""}
              placeholder="Координаты"
              onChange={(e) =>
                dispatch(getConstructionProps("coordinates", e.target.value))
              }
            />
          </div>
        </Row>
        <Row>
          <BtnStyledSecondary onClick={loadClickHandler}>
            Загрузить фото
          </BtnStyledSecondary>
        </Row>
      </BlockBody>
    </Medium>
  );
}
