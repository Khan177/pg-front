import React, {useEffect} from "react";
import "./InfoTable.css"
import {Table} from "reactstrap";
import {fetchTableInfo} from "../../store/action";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const InfoTable = (props) => {
    let takeinfo =props.takeAllInfoTable
    useEffect(() => {
        takeinfo()
    }, [ ])
    let tableLink = Object.keys(props.tableInfo).map(infoTable => {
        const info = props.tableInfo[infoTable];
        return <tr className="table_record" key={infoTable}>
            <td scope="row">{info.model}</td>
            <td>{info.owner}</td>
            <td>{info.family}</td>
            <td>{info.nameSide}</td>
            <td>{info.advertisingSide}</td>
            <td className="button_pencil_style">
                <NavLink exact to={"/base/partner/info"}  className="button_pencil">
                    <img src={require("../../img/partners/bx-pencil.svg")} alt=""/>
                </NavLink>
            </td>
        </tr>
    })
    return (
        <div className="table" style={{border: "1px solid #dee2e6"}}>

            <div className="table_records">
                <Table className="table">
                    <thead>
                    <tr className="header_table">
                        <th className="link_table">Тип контрагента</th>
                        <th className="link_table">Контрагент</th>
                        <th className="link_table">Бренд</th>
                        <th className="link_table">Сектор деятельности</th>
                        <th className="link_table">Тип клиента</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableLink}
                    </tbody>
                </Table>
                <div className="footer_table_records">
                    <div className="show">
                        <p className="show_text">Показано 10 из 205</p>
                    </div>
                    <div className="pages">
                        <a href="/#"  className="pages_link"> <span> &#60; </span> Назад</a>
                        <a href="/#"  className="pages_link">1</a>
                        <a href="/#"  className="pages_link">2</a>
                        <a href="/#"  className="pages_link">3</a>
                        <a href="/#"  className="pages_link">4</a>
                        <a href="/#"  className="pages_link">5</a>
                        <a href="/#"  className="pages_link">6</a>
                        <a href="/#"  className="pages_link">7</a>
                        <a href="/#"  className="pages_link">Вперед
                            <span className="arrow_right"> &#62; </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
const mapStateToProps = state => {
    return {
        tableInfo: state.table.tableInfo,
        errorName: state.table.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        takeAllInfoTable: () => dispatch(fetchTableInfo())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoTable)
