import NewAndAllBlockInput from "./NewAndAllBlockInput/NewAndAllBlockInput";
import TableContent from "./TableContent/TableContent";
import RelatedBrands from "./RelatedBrands/RelatedBrands";
import RelatedAdvertisers from "./relatedAdvertisers/relatedAdvertisers";
import "./PartnerEdit.css"

import React from "react";
import {
    BtnExport,
    BtnPrint,
    BtnSettings,
    TableControl,
    TableToolbar
} from "../../../../components/Table/TableStyles/TableStyles";
import styled from 'styled-components';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import print_icon from "../../../../img/outdoor_furniture/table_icons/print.svg";
import export_icon from "../../../../img/outdoor_furniture/table_icons/export_icon.svg";
import settings_icon from "../../../../img/outdoor_furniture/table_icons/setting.svg";
import {BreadCrumbs, ListTitle, Section, TitleLogo} from "../PartnersList/PartnersStyles";
import {Link} from "react-router-dom";
import breadcrumbs from "../../../../img/outdoor_furniture/bx-breadcrumbs.svg";

const Container = styled.div`
margin: 20px;
`;

const STabs = styled(Tabs)`
  font-family: "SF UI Display Light", sans-serif;
  font-size: 12px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding:0;
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-transform: uppercase;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  height: 32px;
  padding: 0 18px;
  //user-select: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 12px;

  &.is-selected {
    color: #FFFFFF;
    background: #2C5DE5;
  }

  &:focus {
    outline: none;
    //box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  //border: 1px solid black;
  //padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;


STabPanel.tabsRole = 'TabPanel';

const GreenButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
        width: 123px;
        height: 40px;
        left: calc(50% - 123px/2);
        top: calc(50% - 40px/2);
        background: #008556;
        border-radius: 4px;
        //font-family: SFUIDisplay;
        font-size: 14px;
        line-height: 14px;
        color: #FFFFFF;
        border: none;
        `;

const RedButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
        width: 157px;
        height: 40px;
        background: #D42D11;
        border-radius: 4px;
        //font-family: SFUIDisplay;
        font-size: 14px;
        line-height: 14px;
        color: #FFFFFF;
        border: none;
        `;

const BlueBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
        width: 165px;
        height: 40px;
        //font-family: SFUIDisplay;
        font-size: 14px;
        line-height: 14px;
        text-align: right;
        color: #FFFFFF;
        background: #2C5DE5;
        border-radius: 4px;
        border: none;
`

const Controls = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
`

const ButtonGroup = styled.div`
        font-family: "SF UI Display Medium", sans-serif;
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;

`
const JobTitle = styled.h1`
        font-family: "SF UI Display Medium", sans-serif;
        font-size: 24px;
        line-height: 28px;
        color: #003360;
        display:flex;
`

export default function CreateNew() {

    return (
        <Container>
            <BreadCrumbs aria-label="breadcrumb"
                         style={{color: '#8aa1c1', fontSize: 13}}
            >
                <Link
                    to="/"
                >
                    <img src={breadcrumbs} alt=""/>
                </Link>
                <Link to="/"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Главная
                </Link>
                <Link to="/installation/"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Базы
                </Link>

                <Link to="/outdoor_furniture"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Контрагенты
                </Link>
            </BreadCrumbs>
            <form>
                <Controls>

                    <JobTitle>
                        <TitleLogo/>
                        Контрагент Юниверсал ТОО
                    </JobTitle>
                    <ButtonGroup>
                        <GreenButton>
                            Сохранить
                        </GreenButton>
                        <BlueBtn>
                            Создать сторону
                        </BlueBtn>
                        <RedButton>
                            Демонтировать
                        </RedButton>
                    </ButtonGroup>

                </Controls>
                <div>
                    <STabs
                        selectedTabClassName='is-selected'
                        selectedTabPanelClassName='is-selected'
                    >
                        <TableToolbar position="static">
                            <STabList>
                                <STab>
                                    ОБЩАЯ ИНФОРМАЦИЯ
                                </STab>
                                <STab>СВЯЗАННЫЕ ПРОЕКТЫ</STab>
                                <STab>СВЯЗАННЫЕ БРЕНДЫ</STab>
                                <STab>СВЯЗАННЫЕ РЕКЛАМОДАТЕЛИ</STab>
                            </STabList>
                            {/*<GlobalFilter*/}
                            {/*    // preGlobalFilteredRows={preGlobalFilteredRows}*/}
                            {/*    // globalFilter={state.globalFilter}*/}
                            {/*    // setGlobalFilter={setGlobalFilter}*/}
                            {/*/>*/}

                            <TableControl>
                                <BtnPrint>
                                    <img src={print_icon} alt=""/>
                                </BtnPrint>
                                <BtnExport
                                    // onClick={exportBtnHandler}
                                >
                                    <img src={export_icon} alt=""/>
                                    Экспорт
                                </BtnExport>
                                <BtnSettings>
                                    <img src={settings_icon} alt=""/>
                                </BtnSettings>
                            </TableControl>
                        </TableToolbar>

                        <STabPanel>
                            <NewAndAllBlockInput/>
                        </STabPanel>
                        <STabPanel>
                            <TableContent/>
                        </STabPanel>
                        <STabPanel>
                            <RelatedBrands/>
                        </STabPanel>
                        <STabPanel>
                            <RelatedAdvertisers/>
                        </STabPanel>
                    </STabs>
                </div>
            </form>
        </Container>
    );
}


// function TabPanel(props) {
//     const {children, value, index} = props;
//
//     return (
//         <div>
//             <div
//                 id={`simple-tabpanel-${index}`}
//                 // aria-labelledby={`simple-tab-${index}`}
//             >
//                 {value === index && (
//                     <Box p={2} style={{width: "100%"}}>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//         </div>
//     );
// }
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };
//
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//     };
// }
//
// const SimpleTabs = (props) => {
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue)
//         return {
//             class: "active",
//         }
//
//     };
//     let fastSearch =
//         <span className="input_fast_search" id="input_fast_search">
//             <input type="text" placeholder="Быстрый поиск" className="fast_search"/>
//             <a href="/#" className="input_fast_search_button">Найти</a>
//         </span>
//     let tieBrand = <button className="brand" id="brand">Привязать бренд</button>
//     const PageWrap = styled.div`
//       display: flex;
// `;
//
//     return (
//             <PageWrap>
//                 <SearchBar/>
//                 <div className="counterparty_Header">
//                     <div className="counterparty_Header_logo">
//                         <div style={{display: "flex", margin: "0", paddingTop: "5px"}}>
//                                 <span style={{
//                                     width: "33px",
//                                     height: "32px",
//                                     borderRadius: "4px",
//                                     background: "red"
//                                 }}>
//                     <img src={require("../../../../img/outdoor_furniture/bx-book.svg")} alt=""
//                          style={{width: "16px", margin: "8px"}}/>
//                     </span>
//                             <h1 className="logo_title_counterparty">Контрагенты</h1>
//                         </div>
//                         <div className="counterparty_Header_Buttons">
//                             <button className="counterparty_Header_Button"
//                                     onClick={() => props.postInfo(props.infoForm)}
//                                     style={{padding: " 0 22px"}}>Сохранить
//                             </button>
//                             <button className="counterparty_Header_Button">Удалить</button>
//                             <button className="counterparty_Header_Button">Создать договор</button>
//                         </div>
//                     </div>
//                     <div className="search_counterparty">
//                         <div className="tab">
//                             <Tabs value={value} onChange={handleChange}>
//                                 <Tab className="tablinks" label="ОБЩАЯ ИНФОРМАЦИЯ " {...a11yProps(0)} />
//                                 <Tab className="tablinks" label="СВЯЗАННЫЕ ПРОЕКТЫ" {...a11yProps(1)} />
//                                 <Tab className="tablinks" label="СВЯЗАННЫЕ БРЕНДЫ" {...a11yProps(2)} />
//                                 <Tab className="tablinks" label="СВЯЗАННЫЕ РЕКЛАМОДАТЕЛИ" {...a11yProps(3)} />
//                             </Tabs>
//                         </div>
//                         <span style={{display: "flex"}}>
//                         {(value === 2) ? tieBrand : null}
//                             {(value === 1) ? fastSearch : null}
//                             <a href="/#" className="button_setting">
//                             <img src={require("../../../../img/partners/print.png")} alt="" style={{padding: "8px"}}/>
//                         </a>
//                         <button className="export">Экспорт</button>
//                         <a href="/#" className="button_setting">
//                             <img src={require("../../../../img/partners/bx-cog.svg")} alt="" style={{padding: "8px"}}/>
//                         </a>
//                  </span>
//                     </div>
//
//                 </div>
//                 <TabPanel value={value} index={0} className="search_counterparty">
//                     <NewAndAllBlockInput/>
//                 </TabPanel>
//                 <TabPanel value={value} index={1} className="search_counterparty">
//                     <TableContent/>
//                 </TabPanel>
//                 <TabPanel value={value} index={2} className="search_counterparty">
//                     <RelatedBrands/>
//                 </TabPanel>
//                 <TabPanel value={value} index={3} className="search_counterparty">
//                     <RelatedAdvertisers/>
//                 </TabPanel>
//             </PageWrap>
//     );
// }
//
// const mapStateToProps = state => {
//     return {
//         infoForm: state.table.infoForm
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         postInfo: (info) => dispatch(PostInfoInput(info))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SimpleTabs)
