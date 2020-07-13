import React from "react";
import "./PartnerEdit.css"
import "../../components/searchTable/SearchTableInfo.css"
import PartnerSearchBlock from "../../components/PartnerSearchBlock/PartnerSearchBlock";
import BlockSearch from "../../components/BlockSearch/BlockSearch";


const PartnerEdit = () => {
    return (
        <div style={{display:"flex"}}>
            <BlockSearch/>
            <div className="Counterparties">
                <div className="titleCounterparty">
                    <span className="title_Counterparty_text"> >> </span>
                    <span className="title_Counterparty_text">Главная / </span>
                    <span className="title_Counterparty_text"> <span className="db">Базы</span>  /</span>
                    <span className="title_Counterparty_text">Контрагенты /</span>
                </div>
                <PartnerSearchBlock/>
            </div>
        </div>

    )
}
export default PartnerEdit
