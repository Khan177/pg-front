import React, {useEffect} from "react";
import "./InfoTable.css"
import {Table} from "reactstrap";
import {fetchTableInfo} from "../../store/action";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const InfoTable = (props) => {
    useEffect(() => {
        props.takeAllInfoTable()
    }, [ ])
    let tableLink = Object.keys(props.tableInfo).map(infoTable => {
        const info = props.tableInfo[infoTable];
        return <tr className="table_record" key={infoTable}>
            {/* eslint-disable-next-line jsx-a11y/scope */}
            <td scope="row">{info.model}</td>
            <td>{info.owner}</td>
            <td>{info.family}</td>
            <td>{info.nameSide}</td>
            <td>{info.advertisingSide}</td>
            <td className="button_pencil_style">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink exact to={"/partnerEdit"}  className="button_pencil">
                    <img src={require("../../img/bx-pencil.svg")} alt=""/>
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
                        <a  className="pages_link"> <span> &#60; </span> Назад</a>
                        <a  className="pages_link">1</a>
                        <a  className="pages_link">2</a>
                        <a  className="pages_link">3</a>
                        <a  className="pages_link">4</a>
                        <a  className="pages_link">5</a>
                        <a  className="pages_link">6</a>
                        <a  className="pages_link">7</a>
                        <a  className="pages_link">Вперед
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