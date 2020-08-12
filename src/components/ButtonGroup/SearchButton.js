import React from 'react';
import styled from 'styled-components';
import icon_search from '../../img/outdoor_furniture/bx-search.svg';

const StyledSearchButton = styled.button`
  width: 60px;
  height: 60px;
  text-align: center;
  border: none;
  background: #f5f7fa;
  :hover {
    cursor: pointer;
  }
`;

const SearchText = styled.h6`
  font-family: 'SF UI Display Light', sans-serif;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #003360;
  padding-top: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid #d3dff0;
`;

export default function SearchButton() {
  return (
    <StyledSearchButton
    // onClick={this.clickHandler}
    >
      <img src={icon_search} alt="" />
      <SearchText>Поиск</SearchText>
    </StyledSearchButton>
  );
}
