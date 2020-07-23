import React from "react";
import {NavLink} from "react-router-dom";

const  HeaderMenu =()=>{
    return(<>
            <a href="/#" className="menu_link">Продажи</a>
            <a href="/#" className="menu_link">Монтажи</a>
            <NavLink to={"/base"} className="menu_link  base_hover ">Базы
                <div className="base_hover_info">
                    <NavLink to="/base/outdoor_furniture" className="base_hover_info_text">Конструкции</NavLink>
                    <NavLink to="/base/partners" className="base_hover_info_text">Контрагенты</NavLink>
                </div>
            </NavLink>
            <a href="/#" className="menu_link">Отчеты</a>
            <a href="/#" className="menu_link">Администрация</a>
        </>
    )
}

export default HeaderMenu
