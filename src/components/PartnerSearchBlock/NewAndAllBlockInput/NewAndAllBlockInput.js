import React from "react";
import {Form, Label} from "reactstrap";


const NewAndAllBlockInput = () => {
    return (
        <Form action="" className="form_all_input start_link " id="all_info">
            <div style={{display: "flex"}}>
                <div className="form_action form_info">
                    <Label className="title_info">Общая информация</Label>
                    <div className="form-groups">
                        <div className="title_boom_input" style={{display: "flex"}}>
                            <div>
                                <Label className="search_params">Наименование контрагента</Label>
                                <label className="search_params_input">
                                    <input type="email"
                                           className="
                                           input_search_img
                                           input_search_case
                                           form-control
                                           input_icon"
                                           placeholder="Юниверсал ТОО"
                                           aria-describedby="emailHelp"/>
                                </label>
                                <Label className="search_params">Сектор деятельности
                                    <select type="email" //asd
                                            className="
                                            form-control
                                            input_search_img
                                            input_search_anchor
                                            input_icon"
                                    >
                                        <option value="#">Производство напитков</option>
                                    </select>
                                </Label>
                            </div>
                            <Label className=" search_params_textarea search_params">
                                Комментарий
                                <textarea name="" id="" cols="20" rows="6"
                                          className="
                                          input_search_img
                                          textArea_width
                                          text_area_search_params">
                                        ...
                                    </textarea>
                            </Label>
                        </div>
                        <div className="form_group_input">
                            <Label className="search_params">
                                Тип контрагента
                                <select
                                    className="
                                    form-control
                                    input_search_img
                                    input_search_anchor
                                    search_params_input
                                    input_icon"
                                >
                                    <option> Рекламодатель</option>
                                    <option> Рекламное агентсво</option>
                                    <option> Поставщик</option>
                                </select>
                            </Label>
                            <div className="search_params_textarea boom_input">
                                <label className=" search_params search_params_input">
                                    Тип клиента
                                    <input type="email"
                                           className="
                                           input_search_img
                                           input_search_anchor
                                           form-control
                                           input_icon"
                                           placeholder="По личным связям"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_action form_address">
                    <Label className="title_info">Адрес</Label>
                    <div className="form-groups-address">
                        <label className=" search_params search_params_input">
                            Город
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_globe
                                   form-control
                                   input_icon"
                                   placeholder="Алматы"
                            />
                        </label>
                        <div className="input_block">
                            <label className=" search_params search_params_input">
                                Район
                                <input type="email"
                                       className="
                                       input_search_img
                                       input_search_directions
                                       form-control
                                       more_width_input"
                                       placeholder="Медеуский р-н."
                                />
                            </label>
                            <label className="
                            search_params
                            search_params_input
                            postCode">Почтовый индек
                                <select type="email"
                                        className="
                                        form-group
                                        input_search_img
                                        input_search_envelope
                                        form-control more_width_input"
                                >
                                    <option value="#">1254789</option>

                                </select>
                            </label>
                        </div>
                        <label className=" search_params search_params_input">
                            Юридический адрес
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_house
                                   form-control input_icon"
                                   placeholder="пр.Достык 25, офис 52"
                            />
                        </label>
                        <label className=" search_params search_params_input">
                            Фактический адрес
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_house
                                   form-control input_icon"
                                   placeholder="пр.Достык 25, офис 52"
                            />
                        </label>
                    </div>

                </div>
                <div className="form_action form_bank" style={{width: "19.8%"}}>
                    <label className="title_info">Бансковский счет</label>
                    <div className="form-groups-bank">
                        <label className=" search_params search_params_input">
                            Банк получателя
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="АО «Банк получателя» "
                            />
                        </label>
                        <label className="  search_params search_params_input">
                            ИИК
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="KZ 1578964523000215648"
                            />
                        </label>
                        <label className=" search_params search_params_input">
                            БИК
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="SROMYTRS"
                            />
                        </label>
                        <label className="search_params search_params_input">
                            КБЕ
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="SROMYTRS"
                            />
                        </label>
                    </div>

                </div>
            </div>
            <div className="
            form_action
            form_info_contact_face">
                <div className="contact_face_title">
                    <label className="
                    title_info
                     contact_face_title_text">Контактное лицо</label>
                    <button className="
                    counterparty_Header_Button_edit
                    button_contact_face">Добавить еще
                    </button>
                </div>
                <div className="
                    form-groups-contact-face
                    agent_style"
                >
                    <label className="agent_form">
                        <label className="
                        contact_face_inputs
                        search_params
                        search_params_input">
                            ФИО
                            <input type="email"
                                   className="
                                   input_search_img
                                    input_search_anchor
                                     form-control input_icon"
                                   placeholder="Гордеев Амровский "
                            />
                        </label>
                        <label className="
                                contact_face_inputs
                                search_params
                                search_params_input">
                            Телефон
                            <input type="email"
                                   className="
                                           input_search_img
                                           input_search_anchor
                                           form-control input_icon"
                                   placeholder="+7-(745)-523-65-48"
                            />
                        </label>

                        <label className="
                                    contact_face_inputs
                                    search_params
                                    search_params_input">
                            Email
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control
                                   input_icon"
                                   placeholder="hello@mail.kz"
                            />
                        </label>
                        <label className="
                        contact_face_inputs
                        label_button_trash">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="button_trash">
                                <img src={require("../../../img/bx-trash.svg")} alt=""/>
                            </a>
                        </label>
                    </label>
                    <label className="agent_form">
                        <label className="
                        contact_face_inputs
                         search_params
                         search_params_input">
                            ФИО
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="Гордеев Амровский "
                            />
                        </label>
                        <label className="
                                 contact_face_inputs
                                 search_params
                                 search_params_input">
                            Телефон
                            <input type="email"
                                   className="
                                    input_search_img
                                    input_search_anchor
                                    form-control input_icon"
                                   placeholder="+7-(745)-523-65-48"
                            />
                        </label>
                        <label className="
                        contact_face_inputs
                        search_params
                        search_params_input">
                            Email
                            <input type="email"
                                   className="
                                   input_search_img
                                   input_search_anchor
                                   form-control input_icon"
                                   placeholder="hello@mail.kz"
                            />
                        </label>
                        <label className="
                        contact_face_inputs
                        label_button_trash">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="button_trash">
                                <img src={require("../../../img/bx-trash.svg")} alt=""/>
                            </a>
                        </label>

                    </label>
                </div>
            </div>
            <label className="
            form_action
            form_info_contact_face
            form_typeAk
            ">
                <label className="
                contact_face_title
                title_info
                contact_face_title_text">Агентская коммисия </label>
                <label className="
                form-group-contact-face
                agent_style
                agent_commission
                ">
                    <label className="
                        contact_face_inputs
                        search_params ">Тип АК
                        <select type="email"
                                className="
                                     form-group
                                      input_search_img
                                      input_search_anchor
                                      form-control"
                        >
                            <option value="#">В процентах</option>

                        </select>
                    </label>
                    <label className="
                        contact_face_inputs
                         search_params
                         search_params_input">
                        Агентская коммисия
                        <input type="email"
                               className="
                                   input_search_img
                                   input_search_anchor
                                    form-control"
                               placeholder="10"
                        />
                    </label>
                    <label className="
                        contact_face_inputs
                        search_params
                        search_params_input">
                        Ак распространяется
                        <input type="email"
                               className="
                                   input_search_img
                                   input_search_anchor
                                   form-control"
                               placeholder="На сумму без НДС"
                        />
                    </label>
                    <label className="contact_face_inputs search_params"
                           style={{marginRight: "11px"}}>
                        На какие услуги рассматриваются АК
                        <select type="email"
                                className="
                                    form-group
                                    input_search_img
                                    input_search_anchor
                                    form-control"
                        >
                            <option value="#">Печать монтаж</option>
                        </select>
                    </label>
                </label>
            </label>
        </Form>

    )
}

export default NewAndAllBlockInput