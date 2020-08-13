import React from "react";
import { PageWrap } from "../../../../components/Styles/ComponentsStyles";
import SearchBtn from "../LeftBar/SearchBtn";
import LeftBar from "../../../../components/LeftBar/LeftBar";
import TabPanelFormPartners from "./TabPanelFormPartners";
import { ContentWrap } from "../../../../components/Styles/ComponentsStyles";
import { Col, Grid, Row } from "react-flexbox-grid";
import {
  getContragentData,
  resetContragentValues,
} from "../../../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function PartnerGeneralInfo(props) {
  const [showSearchBtn, setSearchBtn] = React.useState(false);
  const [index, setIndex] = React.useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (props.location.rowID) {
      dispatch(getContragentData(props.location.rowID));
    } else {
      dispatch(resetContragentValues());
    }
  }, [dispatch, props.location.rowID]);
  console.log(props.location);
  const handleTasSelected = (index) => {
    setIndex(index);
    if (index === 0) {
      setSearchBtn(false);
    } else setSearchBtn(true);
  };
  return (
    <Grid fluid className="resetPadding">
      <Row>
        <Col>
          <LeftBar>
            {showSearchBtn ? (
              <Col xs={1} className="contentInfo resetPadding">
                <SearchBtn />
              </Col>
            ) : null}
          </LeftBar>
        </Col>
        <Col xs={11} className="resetPadding marginLeft10">
          {/*<ContentWrap>*/}
          <TabPanelFormPartners selectedTab={handleTasSelected} index={index} />
          {/*</ContentWrap>*/}
        </Col>
      </Row>
    </Grid>
  );
}
