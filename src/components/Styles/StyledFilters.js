import styled from "styled-components";

export const FilterSection = styled.div`
  border-top: 1px solid #d3dff0;
  padding: 20px 30px;
`;

export const FilterSectionTitle = styled.div`
  padding: 0;
  margin-bottom: 18px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const FilterSectionTitleText = styled.div`
  font-size: 14px;
  text-align: left;
  color: #171717;
  font-weight: 600;
`;

export const Checks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FilterMenu = styled.div`
  font-family: "SF UI Display Light", sans-serif;
  width: 25vw;
  border-right: 1px solid #d3dff0;
  background-color: #f5f7fa;
`;

export const FilterText = styled.h6`
  font-family: "SF UI Display Bold", sans-serif;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #003360;
  margin: 0px 32px;
  padding: 16px 0;
`;

export const SearchTitle = styled.div`
  width: 100%;
  height: 60px;
  margin: 1vw 0 0 0;
`;

export const Form = styled.form`
  width: 100%;
  text-align: center;
`;
