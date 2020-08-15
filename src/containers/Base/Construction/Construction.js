import React, { useEffect } from 'react';
import { PageWrap, ContentWrap } from '../../../components/Styles/ComponentsStyles';
import InnerForm from './TabPanelForm/TabPanelFormConstruction';
import SearchButton from '../../../components/ButtonGroup/SearchButton';
import LeftBar from '../../../components/LeftBar/LeftBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import SearchBtn from '../Partners/LeftBar/SearchBtn';
import { getCurrentConstruction, resetCurrentConstruction } from '../../../store/actions/constructionActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Construction(props) {
  const current = useSelector((state) => state.construction.currentConstruction);
  console.log(current);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof props.match.params.id != 'undefined') {
      dispatch(getCurrentConstruction(props.match.params.id));
    } else {
      dispatch(resetCurrentConstruction());
    }
  }, [props.match]);
  
  const [showSearchBtn, setSearchBtn] = React.useState(false);

  const handleTabSelected = (index) => {
    if (index === 4) {
      setSearchBtn(true);
    } else setSearchBtn(false);
  };

  return (
    <Grid fluid className="resetPadding">
      <Row className="resetPadding">
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
          <InnerForm selectedTab={handleTabSelected} constructionID={props.match.params.id} />
        </Col>
      </Row>
    </Grid>
  );
}
