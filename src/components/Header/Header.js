import React, {useState} from "react";
import "./header.css"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [valueArrow, setvalueArrow] = useState("")

    const toggle = () => {
        if(isOpen){
            setvalueArrow("scale(1, 1)")
        }else{
            setvalueArrow("scale(1, -1)")
        }
        setIsOpen(!isOpen);
    }
    console.log(valueArrow)

    const infoUser = (
        <div className="all_info_user">
            <p className="all_info_user_text">Полная информация</p>
            <p className="all_info_user_text">Выход</p>
        </div>)
    return (

        <header className="header">
            <div className="logo">
                <a href="/#" className="logo_img"><img src={require("../../img/logo.svg")} alt=""/></a>
            </div>
            <div className="menu">
                <a href="/#" className="menu_link">Продажи</a>
                <a href="/#" className="menu_link">Монтажи</a>
                <a href="/#" className="menu_link active ">Базы</a>
                <a href="/#" className="menu_link">Отчеты</a>
                <a href="/#" className="menu_link">Администрация</a>
            </div>
            <div className="profile">
         <span style={{marginRight: "20px", transform: "translate(6px, -2px)"}}>
             <p className="profile_name">Алексей иванов</p>
            <p className="profile_type">АДМИНИСТРАТОР</p>
         </span>
         <span className="img_profile" onClick={toggle}>
                    <img className="img_profile_photo"
                         src={require("../../img/bx-anchor.svg")} alt=""/>
                    <span className="arrowDown"  style={{transform: valueArrow}}>
                        {/*<img src={require("../../img/icons8-развернуть-16.png")}*/}
                        {/*  alt=""/>*/}
                    </span>
                    {isOpen && infoUser}
        </span>
            </div>
        </header>
    )
};

export default Header;
