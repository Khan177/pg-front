import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import Partners from "./containers/Base/Partners/Partners";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Header from "./components/Header/Header";
import Construction from "./containers/Base/Construction/Construction"
import PartnerGeneralInfo from "./containers/Base/Partners/TabPanelForm/PartnerGeneralInfo";

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route path="/base/partners" exact component={Partners}/>
                    <Route path="/base/partners/info" exact component={PartnerGeneralInfo}/>
                    <Route path="/base/construction" exact component={Construction}/>
                    <Route path="/base/outdoor_furniture" exact component={OutdoorFurniture}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
