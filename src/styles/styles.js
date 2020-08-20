import styled from 'styled-components';

export const LeftBar = styled.div`
  border-right: 1px solid #d3dff0;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  width: 5vw;
`;

export const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'grey'};
  padding: 1vw 2vw;
  border-radius: 4px;
  margin: 0 0 0 40px;
  white-space: nowrap;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  border: none;
`;
