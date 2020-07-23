import React from "react";
import "./header.css"
import HeaderMenu from "./Menu/HeaderMenu";
import UserForm from "./UserForm/UserForm";


const Header = () => {

    return (

        <header className="header">
            <div className="logo">
                <a href="/#" className="logo_img"><img src={require("../../img/partners/logo.svg")} alt=""/></a>
            </div>
            <div className="menu">
                <HeaderMenu/>
            </div>
            <div className="profile">
                <UserForm
                    name="Алексей"
                    surname="Иванов"
                    position="Администратор"
                    avatar="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png"
                />
            </div>
        </header>
    )
};

export default Header;
