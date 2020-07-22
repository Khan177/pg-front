import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import Content from "./containers/PartnerTable/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PartnerEdit from "./containers/PartnerEdit/PartnerEdit";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Header from "./components/Header/Header";
import CreateNew from "./containers/Base/OutdoorFurniture/CreateNew/CreateNew"

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route path="/base/partners" exact component={Content}/>
                    {/*<Route path="" exact component={newFilter}/>*/}
                    <Route path="/base/partner/info" exact component={PartnerEdit}/>
                    <Route path="/outdoor_furniture" exact component={OutdoorFurniture}/>
                    <Route path="/base/outdoor_furniture/new" exact component={CreateNew}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
