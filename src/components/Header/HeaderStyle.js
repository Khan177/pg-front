import styled from 'styled-components';
import icon_logo from '../../img/partners/logo.svg';
import { Link } from 'react-router-dom';

export const HeaderLogo = styled.div`
  width: 200px;
  padding: 0 0 0 1%;
`;

export const Logo = styled.a`
  background-image: url(${icon_logo});
`;

export const HeaderMenus = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const HeaderMenuLink = styled(Link)`
  height: 60px;
  color: #003360;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 60px;
  letter-spacing: normal;
  text-align: center;
  padding: 0 20px;
  position: relative;
  :hover {
    color: #003360;
    border-bottom: 3px solid #003360;
    text-decoration: none;
    opacity: 1;
  }
`;

export const BaseHoverBlockLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 0;
`;

export const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 108%;
  background: grey;
  padding: 5px;
  display: none;
  flex-flow: column;
  border-radius: 4px;
  z-index: 1;
  a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  > a {
    color: red;
    text-decoration: none;
    padding-bottom: 32px;
  }
  > a:hover {
    color: red;
    border-bottom: 3px solid red;
  }
  :hover ${DropdownContent} {
    display: block;
  }
`;

export const FormUser = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`;
