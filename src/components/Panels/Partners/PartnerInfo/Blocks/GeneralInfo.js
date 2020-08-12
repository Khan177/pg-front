import React from "react";
import InputAnchor from "../../../../Inputs/InputAnchor";
import Multiline from "../../../../Inputs/Multiline";
import SelectAnchor from "../../../../Inputs/SelectAnchor";
import {
  BlockBody,
  Medium,
  Row,
  Column,
  BlockTitle,
  InputTitle,
} from "../../../../Styles/StyledBlocks";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { sendContragentValues } from "../../../../../store/actions/actions";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiOutlinedInput-multiline": {
      height: 123,
      width: "100%",
    },
  },
}));

export default function GeneralInfo() {
  const classes = useStyles();
  const state = useSelector((state) => state.contragents.currentContragent);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <Medium>
      <BlockTitle>Общая информация</BlockTitle>
      <BlockBody>
        <form action="" className={classes.root}>
          <Row>
            <Column>
              <Row>
                <Column style={{ width: "45%", marginBottom: "21px" }}>
                  <div style={{ width: "100%" }}>
                    <InputTitle>Наименование контрагента</InputTitle>
                    <InputAnchor
                      value={
                        Object.keys(state).length !== 0 ? state.partnerName : ""
                      }
                      placeholder="Контрагент"
                      onChange={(e) =>
                        dispatch(
                          sendContragentValues("partnerName", e.target.value)
                        )
                      }
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <InputTitle>Сектор деятельности</InputTitle>
                    <InputAnchor
                      value={
                        Object.keys(state).length !== 0 ? state.sector : ""
                      }
                      placeholder="Производство напитков"
                      onChange={(e) =>
                        dispatch(sendContragentValues("sector", e.target.value))
                      }
                    />
                  </div>
                </Column>
                <Column style={{ width: "45%", marginBottom: "21px" }}>
                  <InputTitle>Комментарий</InputTitle>
                  <Multiline
                    style={{ width: "100%" }}
                    value={Object.keys(state).length !== 0 ? state.comment : ""}
                    inputProps={{ maxLength: 450, rows: 186, cols: 10 }}
                    onChange={(e) =>
                      dispatch(sendContragentValues("comment", e.target.value))
                    }
                  />
                  <div style={{ width: "100%" }}>
                    <InputTitle>Бренд</InputTitle>
                    <InputAnchor
                      value={Object.keys(state).length !== 0 ? state.brand : ""}
                      placeholder="Бренд"
                      onChange={(e) =>
                        dispatch(sendContragentValues("brand", e.target.value))
                      }
                    />
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: "45%", marginBottom: "21px" }}>
              <div style={{ width: "100%" }}>
                <InputTitle>Тип контрагента</InputTitle>
                <SelectAnchor
                  value={
                    Object.keys(state).length !== 0 ? state.partnerType : ""
                  }
                  onChange={(e) =>
                    dispatch(sendContragentValues("partnerType", e.value))
                  }
                  placeholder="Тип контрагента"
                  options={[
                    { label: "Рекламодатель", value: "Рекламодатель" },
                    {
                      label: "Рекламное агентство",
                      value: "Рекламное агентство",
                    },
                    { label: "Поставщик", value: "Поставщик" },
                  ]}
                />
              </div>
            </Column>
            <Column style={{ width: "45%", marginBottom: "21px" }}>
              <div style={{ width: "100%" }}>
                <InputTitle>Тип клиента</InputTitle>
                <InputAnchor
                  value={
                    Object.keys(state).length !== 0 ? state.clientType : ""
                  }
                  onChange={(e) =>
                    dispatch(sendContragentValues("clientType", e.target.value))
                  }
                  placeholder="Тип клиента"
                />
              </div>
            </Column>
          </Row>
        </form>
      </BlockBody>
    </Medium>
  );
}
