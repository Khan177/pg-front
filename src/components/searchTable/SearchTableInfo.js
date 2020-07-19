import React from "react";
import {NavLink} from "react-router-dom";
import "./SearchTableInfo.css"

const SearchTableInfo = () => {
    return (
        <div>
            <div className="titleCounterparty">
                <span className="title_Counterparty_text"> >> </span>
                <span className="title_Counterparty_text">Главная / </span>
                <span className="title_Counterparty_text"> <span className="db">Базы</span>  /</span>
                <span className="title_Counterparty_text">Контрагенты /</span>
            </div>
            <div className="counterparty_Header">
                <div className="counterparty_Header_logo">
                    <div style={{display: "flex", margin: "0", paddingTop: "5px"}}>
                    <span style={{
                        width: " 33px",
                        height: "32px",
                        borderRadius: " 4px",
                        background: "red"
                    }}>
                    <img src={require("../../img/outdoor_furniture/bx-book.svg")} alt=""
                         style={{width: "16px", margin: "8px"}}/>
                    </span>
                        <h1 className="logo_title_counterparty">Контрагенты</h1>
                    </div>
                    <div className="counterparty_Header_Buttons">
                        <NavLink to={"/partnerEdit"} className="counterparty_Header_Button">Создать
                            контрагента</NavLink>
                        <button className="counterparty_Header_Button">Создать договор</button>
                    </div>
                </div>
                <div className="search_counterparty_table">
                <span className="input_fast_search">
                    <input type="text" placeholder="Быстрый поиск" className="fast_search"/>
                    <a href="/#" className="input_fast_search_button">Найти</a>
                </span>

                    <a href="/#" className="button_setting">
                        <img src={require("../../img/print.png")} alt="" style={{padding: "8px"}}/>
                    </a>
                    <button className="export">Экспорт</button>
                    <a href="/#" className="button_setting">
                        <img src={require("../../img/bx-cog.svg")} alt="" style={{padding: "8px"}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SearchTableInfo
