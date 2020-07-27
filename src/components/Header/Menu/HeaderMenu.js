import React from "react";
import {BaseHoverBlock, BaseHoverBlockLink, HeaderMenuLink} from "../HeaderStyle";

const HeaderMenu = () => {
    return (<>
            <HeaderMenuLink to={"/"}>Продажи</HeaderMenuLink>
            <HeaderMenuLink to={"/"}>Монтажи</HeaderMenuLink>
            <HeaderMenuLink to={"/base"} >Базы
                <BaseHoverBlock>
                    <BaseHoverBlockLink to="/base/outdoor_furniture" >Уличная мебель</BaseHoverBlockLink>
                    <BaseHoverBlockLink to="/base/construction" >Конструкции</BaseHoverBlockLink>
                    <BaseHoverBlockLink to="/base/partners" >Контрагенты</BaseHoverBlockLink>
                </BaseHoverBlock>
            </HeaderMenuLink>
            <HeaderMenuLink to={"/"}>Отчеты</HeaderMenuLink>
            <HeaderMenuLink to={"/"}>Администрация</HeaderMenuLink>
        </>
    )
}

export default HeaderMenu
