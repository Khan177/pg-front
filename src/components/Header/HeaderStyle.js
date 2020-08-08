import styled from "styled-components";
import icon_logo from "../../img/partners/logo.svg";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  box-shadow: 0 1px 2px 0 #92b6e8, inset 0 -3px 0 0 #e7eef8;
  background: #fff;
  font-size: 14px;
  font-family: "SF UI Display Medium", sans-serif;
`;
export const HeaderLogo = styled.div`
  padding: 23px 39px;
`;
export const Logo = styled.a`
  background-image: url(${icon_logo});
`;
export const HeaderMenus = styled.div`
  padding-top: 25px;
`;

export const BaseHoverBlock = styled.div`
  position: absolute;
  left: 0;
  top: 110%;
  background: grey;
  padding: 5px;
  opacity: 0;
  display: flex;
  flex-flow: column;
  border-radius: 4px;
  z-index: 99999;
`;
export const HeaderMenuLink = styled(Link)`
  color: #003360;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  padding: 0 20px;
  position: relative;
  :hover {
    color: #003360;
    border-bottom: 3px solid #003360;
    text-decoration: none;
    padding-bottom: 32px;
    ${BaseHoverBlock}
    opacity: 1;
  }
  :active {
    color: red;
    border-bottom: 3px solid red;
    text-decoration: none;
    padding-bottom: 32px;
  }
  :nth-child(3) {
    color: red;
    border-bottom: 3px solid red;
    text-decoration: none;
    padding-bottom: 32px;
  }
  :hover ${BaseHoverBlock} {
    opacity: 1;
  }
`;
export const BaseHoverBlockLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px 0;
`;
export const FormUser = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 15px;
`;
