import React from "react";
import "./InfoTable.css"
import {Table} from "reactstrap";

const InfoTable = () => {
    return (
        <div className="table" style={{border: "1px solid #dee2e6"}}>

            <div className="table_records">
                <Table className="table">
                    <thead>
                    <tr className="header_table">
                        <th   className="link_table">Тип контрагента</th>
                        <th  className="link_table">Контрагент</th>
                        <th  className="link_table">Бренд</th>
                        <th  className="link_table">Сектор деятельности</th>
                        <th  className="link_table">Тип клиента</th>
                        <th > </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table_record">
                        <td scope="row">Рекламное агентство</td>
                        <td>ТОО Юниверсал МакКэнн</td>
                        <td>Coca-Cola, Fuse Tea, Fanta, Sprite</td>
                        <td>Безалкогольные напитки</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td scope="row">Рекламное агентство</td>
                        <td>ТОО Optimum Market</td>
                        <td>Базис, Danone</td>
                        <td>Продукты питания, Другое</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td scope="row">Рекламное агентство</td>
                        <td>Публисис Групп Медиа Казахстан</td>
                        <td>KFC, Hardee's</td>
                        <td>Медиа</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО Эйр Астана</td>
                        <td>Air Astana</td>
                        <td>Отдых / Путешествия / Транспорт</td>
                        <td>ККК</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО Сбербанк ДБ</td>
                        <td>Сбербанк</td>
                        <td>Финансы</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>ТОО Жигалма</td>
                        <td>Буратино</td>
                        <td>Безалкогольные напитки</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО АТФ Банк</td>
                        <td>АТФ</td>
                        <td>Финансы</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО Кселл</td>
                        <td>Kcell, Activ</td>
                        <td>Связь</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламное агентство</td>
                        <td>ТОО Media Birds</td>
                        <td>БИПЭК Авто</td>
                        <td>Автомобили</td>
                        <td>ККК</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>ИП Smart School</td>
                        <td>Smart School</td>
                        <td>Другое</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>ТОО Aviata</td>
                        <td>Aviata</td>
                        <td>Отдых / Путешествия / Транспорт</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламное агентство</td>
                        <td>ТОО FIRST buying agency</td>
                        <td>Air Astana, Burger King</td>
                        <td>Ресторан, Отдых / Путешествия / Транспорт</td>
                        <td>ККК</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО АТФ Банк</td>
                        <td>АТФ</td>
                        <td>Финансы</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>АО Кселл</td>
                        <td>Kcell, Activ</td>
                        <td>Связь</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламное агентство</td>
                        <td>ТОО Media Birds</td>
                        <td>БИПЭК Авто</td>
                        <td>Автомобили</td>
                        <td>ККК</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>ИП Smart School</td>
                        <td>Smart School</td>
                        <td>Другое</td>
                        <td>Корпоративный</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>Рекламодатель</td>
                        <td>ТОО Aviata</td>
                        <td>Aviata</td>
                        <td>Отдых / Путешествия / Транспорт</td>
                        <td>По личным связям</td>
                        <td className="button_pencil_style"><a href="#"
                                                               className="button_pencil">
                            <img src={require("../../img/bx-pencil.svg")} alt=""/></a>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className="footer_table_records">
                    <div className="show">
                        <p className="show_text">Показано 10 из 205</p>
                    </div>
                    <div className="pages">
                        <a href="#" className="pages_link"> Назад</a>
                        <a href="#" className="pages_link"
                           style={{
                               color: "#656565",
                               paddingTop: "4px",
                               fontSize: "12px"
                           }}>1</a>
                        <a href="#" className="pages_link"
                           style={{color: "#656565", paddingTop: "4px", fontSize: "12px"}}>2</a>
                        <a href="#" className="pages_link"
                           style={{color: " #656565", paddingTop: "4px", fontSize: "12px"}}>3</a>
                        <a href="#" className="pages_link" style={{fontSize: "12px"}}>4</a>
                        <a href="#" className="pages_link"
                           style={{color: "#656565", paddingTop: "4px", fontSize: "12px"}}>5</a>
                        <a href="#" className="pages_link"
                           style={{color: "#656565", paddingTop: "4px", fontSize: "12px"}}>6</a>
                        <a href="#" className="pages_link"
                           style={{color: "#656565", paddingTop: "4px", fontSize: "12px"}}>7</a>
                        <a href="#" className="pages_link">Вперед <span className="arrow_right"> > </span> </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default InfoTable