import React, {useState} from "react";
import { Form, FormGroup, Input} from "reactstrap";
import "./BlockSearchInput.css"

const BlockSearchInput = () => {
    const [isOpenBin, setisOpenBin] = useState(false);
    const [valueArrowBin, setvalueArrowBin] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [valueArrow, setvalueArrow] = useState("")

    const toggle = () => {
        if (isOpen) {
            setvalueArrow("scale(1, 1)")
        } else {
            setvalueArrow("scale(1, -1)")
        }
        setIsOpen(!isOpen);
    }
    const toggleTwo = () => {
        if (isOpenBin) {
            setvalueArrowBin("scale(1, 1)")
        } else {
            setvalueArrowBin("scale(1, -1)")
        }
        setisOpenBin(!isOpenBin);
    }
    let searchforSetting = (
        <div>
            <FormGroup  className="form-group">
                    <Input type="select"
                           className=" form-control input_search_all input_search"
                           placeholder="Контрагент">
                        <option className="form-control input_search_all input_search">Контрагент</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
            </FormGroup>
            <FormGroup >
                    <Input type="text"
                           className=" form-control input_search_all input_search"
                           placeholder="Бренд"/>
            </FormGroup>
            <FormGroup >
                    <Input type="text" name="select" id="exampleSelect"
                           placeholder="Рекламодатель"
                           className=" form-control input_search_all  input_search"
                    />
            </FormGroup>
            <FormGroup >
                    <Input type="text" name="selectMulti" id="exampleSelectMulti"
                           placeholder="Сектор деятельности "
                           className=" form-control input_search_all input_search"/>

            </FormGroup>
            <FormGroup>
                <input type="text"
                       placeholder="Сектор деятельности "
                       className=" form-control input_search_all input_search"/>
            </FormGroup>
        </div>
    )
    let dropDown=(
        <FormGroup>
            <input type="text"
                   placeholder=" Введите БИН "
                   className="form-control input_search_all input_search  setting"/>
        </FormGroup>
    )
    return (
        <div className="search">
            <span className="title_search"> Поиск</span>
            <div className="search_category">
                <div style={{borderBottom: "1px solid #d3dff0", padding: "20px"}}>
                    <Form action="">
                        <span   onClick={toggle}  style={{display: "flex"}}  >
                            <p className="search_params" >Поиск по параметрам</p>
                            <img src={require("../../../img/icons8-развернуть-16.png")}
                                 style={{transform: valueArrow}}
                                 className="arrowDownSecond"/>  </span>
                        {isOpen && searchforSetting}
                    </Form>
                </div>
                <div className="search_bin">
                    <Form>
                         <span   onClick={toggleTwo}  style={{display: "flex"}}  >
                            <p className="search_params" >Поиск по БИН</p>
                            <img src={require("../../../img/icons8-развернуть-16.png")}
                                 style={{transform: valueArrowBin,     paddingLeft: "104px"}}
                                 className="arrowDownSecond"/>  </span>
                        {isOpenBin && dropDown}
                    </Form>

                </div>
                <div className="searchButtons">
                    <a href="#" className="search_Button_clear">Очистить</a>
                    <a href="#" className="search_Button">Искать</a>
                </div>
            </div>
        </div>
    )
}

export default BlockSearchInput

