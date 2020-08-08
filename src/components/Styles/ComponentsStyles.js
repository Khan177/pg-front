import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import icon_book from "../../img/outdoor_furniture/bx-book.svg";

//Styles for OutdoorFurniture & Outdoor furniture container

export const PageWrap = styled.div`
  font-family: "SF UI Display Light", sans-serif;
  display: flex;
  width: 100%;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: "SF UI Display Medium", sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #003360;
`;

export const Breadscrumbs = styled(Breadcrumbs)`
  width: 250px;
  height: 14px;
  font-size: 11px;
  line-height: 13px;
  padding-top: 8px;
`;

export const TitleLogo = styled.div`
  width: 33px;
  height: 32px;
  background-color: #d42d11;
  border-radius: 4px;
  background-image: url(${icon_book});
  background-repeat: no-repeat;
  background-position: center;
`;
export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  background: #008556;
  border: none;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  margin: 0 10px;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const Section = styled.div`
  font-family: "SF UI Display Light", sans-serif;
  min-width: 72%;
  margin: 20px;
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 203px;
  height: auto;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 30px;
  margin-bottom: 2%;
`;

export const ContentWrap = styled.div`
  width: 94%;
  padding: 20px;
  display: flex;
`;

export const LeftBarStyled = styled.div`
  font-family: "SF UI Display Light", sans-serif;
  border-right: 1px solid #d3dff0;
  background-color: #f5f7fa;
  padding-top: 4px;
  height: 100%;
  padding-left: 4px;
  margin-top: 2px;
  width: 7vw;
`;
