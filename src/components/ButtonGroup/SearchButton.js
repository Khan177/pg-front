import React from "react";import styled from "styled-components";import icon_search from "../../img/outdoor_furniture/bx-search.svg"const StyledSearchButton = styled.button`        width: 70px;        height: 61px;        text-align: center;        border: none;        border-bottom: 1px solid #D3DFF0;        background: #F5F7FA;        :hover {                cursor: pointer;        }`;const SearchText = styled.h6`        font-family: "SF UI Display Light", sans-serif;        font-size: 11px;        line-height: 13px;        text-align: center;        color: #003360;`;export default function SearchButton() {    return (        <StyledSearchButton            // onClick={this.clickHandler}        >            <img src={icon_search} alt=""/>            <SearchText>                Поиск            </SearchText>        </StyledSearchButton>    )}