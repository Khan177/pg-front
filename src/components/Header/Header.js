import React from "react";
import HeaderMenu from "./Menu/HeaderMenu";
import UserForm from "./UserMenu/UserMenu";
import { FormUser, HeaderLogo, HeaderMenus, HeaderStyle } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLogo>
        <a href="/#">
          <img src={require("../../img/partners/logo.svg")} alt="" />
        </a>
      </HeaderLogo>
      <HeaderMenus>
        <HeaderMenu />
      </HeaderMenus>
      <FormUser>
        <UserForm
          name="Алексей"
          surname="Иванов"
          position="Администратор"
          avatar="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png"
        />
      </FormUser>
    </HeaderStyle>
  );
};

export default Header;
