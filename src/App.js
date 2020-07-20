import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import AllHeader from "./containers/AllHeader/AllHeader";
import Content from "./containers/PartnerTable/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PartnerEdit from "./containers/PartnerEdit/PartnerEdit";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Res from "./containers/Base/OutdoorFurniture/OutdoorFurnitureList/Table/res";
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
                    <Route path="/test" exact component={Res}/>
                    <Route path="/outdoor_furniture" exact component={OutdoorFurniture}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
