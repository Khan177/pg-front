import React from "react";


const TableContent = () => {
    return (
        <div className="tables tabcontent table_link">
            <div className="table_records">
                <table className="table">
                    <thead>
                    <tr className="header_table">
                        <th scope="col" className="link_table">Код</th>
                        <th scope="col" className="link_table">Название</th>
                        <th scope="col" className="link_table">Бренд</th>
                        <th scope="col" className="link_table">Клиент</th>
                        <th scope="col" className="link_table">Агенская коммисия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table_record">
                        <td>#2020.00053</td>
                        <td>Coca-Cola 2020 годовой проект</td>
                        <td>Coca-Cola</td>
                        <td>Кока-Кола Алматы Боттлерс</td>
                        <td>
                            <label className="checkbox">
                                <input type="checkbox" checked/>
                                <p>да</p>
                            </label>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>#2020.00055</td>
                        <td>Fanta и Sprite летняя акция</td>
                        <td>Fanta</td>
                        <td>Кока-Кола Алматы Боттлерс</td>
                        <td>
                            <label className="checkbox">
                                <input type="checkbox" checked/>
                                <p>да</p>
                            </label>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>#2020.00101</td>
                        <td>Fuse осень 2020</td>
                        <td>Fuse Tea</td>
                        <td>Кока-Кола Алматы Боттлерс</td>
                        <td>
                            <label className="checkbox">
                                <input type="checkbox" checked/>
                                <p>да</p>
                            </label>
                        </td>
                    </tr>
                    <tr className="table_record">
                        <td>#2020.00213</td>
                        <td>Дед Мороз с Coca-Cola декабрь</td>
                        <td>Coca-Cola Xmas</td>
                        <td>Кока-Кола Алматы Боттлерс</td>
                        <td>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                <p>нет</p>
                            </label>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <div className="footer_table_records">
                    <div className="show">
                        <h5 className="show_text">Показано 10 из 205</h5>
                    </div>
                    <div className="pages">
                        <button className="pages_link"><span className="arrow_left">  </span> Назад</button>
                        <button className="pages_link">1</button>
                        <button className="pages_link">2</button>
                        <button className="pages_link">3</button>
                        <button className="pages_link">4</button>
                        <button className="pages_link">5</button>
                        <button className="pages_link">6</button>
                        <button className="pages_link">7</button>
                        <button className="pages_link">Вперед <span className="arrow_right"> > </span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TableContent