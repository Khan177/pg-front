import React, {useState} from "react";import {BlockBody, BlockTitle, BlockTitleText, Large} from "../../../../Styles/StyledBlocks"import {BtnSuccess} from "../../../../Styles/ButtonStyles"import ExtraRow from "./Extras/ExtraRow";export default function Sides() {    const initialList = [ExtraRow];    const [theList, setTheList] = useState(initialList);    const removeClickHandler = (e, index) => {        e.preventDefault()        let newList = [...theList];        if (index > -1) {            newList.splice(index, 1)        }        setTheList(newList);    };    const addClickHandler = (e) => {        e.preventDefault();        setTheList([...theList, ExtraRow]);    };    return (        <Large>            <BlockTitle style={{padding: "10px 26px 15px 24px"}}>                <BlockTitleText>Стороны конструкции</BlockTitleText>                <BtnSuccess                    onClick={addClickHandler}                >                    Добавить еще                </BtnSuccess>            </BlockTitle>            <BlockBody>                {theList.map((row, index) => {                    return <div                        key={index}                    >                        {<ExtraRow                            removeClickHandler={(e) => removeClickHandler(e, index)}                        />}                    </div>                })}            </BlockBody>        </Large>    )}