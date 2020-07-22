import React, {useEffect} from "react";
import {fetchTableInfo} from "../../../../../store/action";
import {connect} from "react-redux";

const RelatedAdvertisers = (props) => {
    useEffect(() => {
        props.takeAllInfoTable()
    }, [])
    let tableLink = Object.keys(props.tableInfo).map(infoTable => {
        const info = props.tableInfo[infoTable];
        return <tr className="table_record" key={infoTable}>
            <td scope="row">{info.model}</td>
            <td>{info.owner}</td>
            <td>{info.family}</td>
            <td>{info.nameSide}</td>
        </tr>
    })
    return (
        <div className="table_records tables tabcontent table_link">
            <table className="table">
                <thead>
                <tr className="header_table">
                    <th scope="col" className="link_table">Код</th>
                    <th scope="col" className="link_table">Рекламодатель</th>
                    <th scope="col" className="link_table">Сектор деятельности</th>
                    <th scope="col" className="link_table">Привязано</th>
                </tr>
                </thead>
                <tbody>
                {tableLink}
                </tbody>
            </table>
            <div className="footer_table_records">
                <div className="show">
                    <p className="show_text">Показано 10 из 205</p>
                </div>
                <div className="pages">
                    <button className="pages_link"> <span className="arrow_left"> &#60;  </span> Назад</button>
                    <button className="pages_link">1</button>
                    <button className="pages_link">2</button>
                    <button className="pages_link">3</button>
                    <button className="pages_link">4</button>
                    <button className="pages_link">5</button>
                    <button className="pages_link">6</button>
                    <button className="pages_link">7</button>
                    <button className="pages_link">Вперед <span className="arrow_right"> &#62; </span> </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(RelatedAdvertisers)

