import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import icon_book from '../img/outdoor_furniture/bx-book.svg';

export const PageWrap = styled.div`
  font-family: 'SF UI Display Light', sans-serif;
  display: flex;
  width: 100%;
  margin-top: 2px;
`;
export const Title = styled.h1`
  font-family: 'SF UI Display Medium', sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #003360;
  padding-top: 7px;
`;

export const Breadscrumbs = styled.div`
  margin: 2vw 0;
  font-size: 13px;
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
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const Section = styled.div`
  font-family: 'SF UI Display Light', sans-serif;
  width: 72%;
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
  margin-bottom: 3%;
`;

export const ContentWrap = styled.div`
  width: 94%;
  padding: 20px;
  display: flex;
`;

export const LeftBarStyled = styled.div`
  font-family: 'SF UI Display Light', sans-serif;
  border-right: 1px solid #d3dff0;
  background-color: #f5f7fa;
`;
