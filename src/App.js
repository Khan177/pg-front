import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import AllHeader from "./containers/AllHeader/AllHeader";
import Content from "./containers/PartnerTable/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PartnerEdit from "./containers/PartnerEdit/PartnerEdit";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";

import Best from "./containers/Base/OutdoorFurniture/OutdoorFurnitureList/Table/DataTable/Best"

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <AllHeader/>
                </header>
                <Switch>
                    <Route path="/" exact component={Content}/>
                    {/*<Route path="" exact component={Content}/>*/}
                    <Route path="/partnerEdit" exact component={PartnerEdit}/>
                    <Route path="/outdoor_furniture" exact component={OutdoorFurniture}/>
                    <Route path="/test" exact component={Best}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
