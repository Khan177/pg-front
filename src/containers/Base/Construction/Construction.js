import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InnerForm from './TabPanelForm/TabPanelFormConstruction';
import SearchBtn from '../Partners/LeftBar/SearchBtn';
import LeftBar from '../../../components/LeftBar/LeftBar';
import {
  getCurrentConstruction,
  resetCurrentConstruction,
} from '../../../store/actions/constructionActions';

const Construction = (props) => {
  const current = useSelector((state) => state.construction.currentConstruction);
  console.log(current);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof props.match.params.id != 'undefined') {
      dispatch(getCurrentConstruction(props.match.params.id));
    } else {
      dispatch(resetCurrentConstruction());
    }
  }, [props.match, dispatch]);

  const [showSearchBtn, setSearchBtn] = useState(false);

  const handleTabSelected = (index) => {
    console.log(index);
    if (index === 4) {
      setSearchBtn(true);
    } else setSearchBtn(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 1 5vw', margin: '0 2vw 0 0' }}>
        <LeftBar>{showSearchBtn ? <SearchBtn /> : null}</LeftBar>
      </div>
      <div style={{ flex: '0 1 100vw', margin: '0 2vw 0 0' }}>
        <InnerForm selectedTab={handleTabSelected} constructionID={props.match.params.id} />
      </div>
    </div>
  );
};

export default Construction;
