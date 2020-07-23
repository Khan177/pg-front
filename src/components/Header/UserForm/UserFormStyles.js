import styled from "styled-components";


export const User = styled.div`
    display: flex;
    width: 28%;
    justify-content: flex-end;
    align-items: center;
`;

export const BlockUser = styled.div`
       display: flex;
       justify-content: flex-end;
       align-items: center;
       width: 100%;
       padding: 0 5%;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10%;
    justify-content: center;
`;

export const UserName = styled.h4`
    margin: 0;
    color: #003360;
    white-space: nowrap;
    font-weight: 600;
`;

export const Law = styled.p`
      margin: 0;
      font-size: 0.6em;
      color: #8aa1c1;
      text-transform: uppercase;
      letter-spacing: 1px;
`;

export const UserAvatar = styled.div`
       width: 65px;
       height: 65px;
`;
export const AvatarImg = styled.img`
        width: 65px;
       height: 65px;
`