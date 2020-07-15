import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NewAndAllBlockInput from "./NewAndAllBlockInput/NewAndAllBlockInput";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div className="search_counterparty">
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(event)
        console.log(newValue)
        setValue(newValue);
    };

    return (
        <>
            <div className="counterparty_Header">
                <div className="counterparty_Header_logo">
                    <div style={{display: "flex", margin: "0", paddingTop: "5px"}}>
                                <span style={{
                                    width: "33px",
                                    height: "32px",
                                    borderRadius: "4px",
                                    background: "red"
                                }}>
                    <img src={require("../../img/outdoor_furniture/bx-book.svg")} alt="" style={{width: "16px", margin: "8px"}}/>
                    </span>
                        <h1 className="logo_title_counterparty">Контрагенты</h1>
                    </div>
                    <div className="counterparty_Header_Buttons">
                        <button className="counterparty_Header_Button"
                                style={{padding: " 0 22px"}}>Сохранить
                        </button>
                        <button className="counterparty_Header_Button">Удалить</button>
                        <button className="counterparty_Header_Button">Создать договор</button>
                    </div>
                </div>
                <div className="search_counterparty">
                    <div className="tab">
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange}>
                                <Tab className="tablinks" label="Item One" {...a11yProps(0)} />
                                <Tab className="tablinks" label="Item Two" {...a11yProps(1)} />
                                <Tab className="tablinks" label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>

                    </div>
                    <span style={{display: "flex"}}>
                             <button className="brand" id="brand">Привязать бренд</button>
                                 <span className="input_fast_search" id="input_fast_search">
                                     <input type="text" placeholder="Быстрый поиск" className="fast_search"/>
                                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                     <a href="#" className="input_fast_search_button">Найти</a>
                                 </span>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="" className="button_setting">
                                         <img src={require("../../img/print.png")} alt="" style={{padding: "8px"}}/>
                                     </a>
                                     <button className="export">Экспорт</button>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="" className="button_setting">
                                        <img src={require("../../img/bx-cog.svg")} alt="" style={{padding: "8px"}}/>
                                     </a>
                 </span>
                </div>


            </div>
            <TabPanel value={value} index={0}>
                <NewAndAllBlockInput/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </>
    );
}
