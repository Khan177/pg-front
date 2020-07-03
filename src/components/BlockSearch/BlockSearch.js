import React from "react";
import "./BlockSeach.css"


const BlockSearch =()=> {
    return(
        <div style={{display:"flex"}}>
            <div style={{borderBottom: "2px solid #d7e2f1",  width: "70px", background: "#f5f7fa", paddingTop:"10vh"}}>
                <img src={require("../../img/bx-search.svg")} className="search_img" alt=""/>
                <p className="info_search">Поиск</p>

                <span className="search_border_bottom"/>
            </div>
        </div>

    )
}
export default BlockSearch


