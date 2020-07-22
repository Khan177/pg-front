import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import Partners from "./containers/Base/Partners/Partners";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Header from "./components/Header/Header";
import PartnerSearchBlock from "./containers/Base/Partners/PartnersSearchBlock/PartnerSearchBlock";

function App() {
    return (
        <>

            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route path="/base/partners" exact component={Partners}/>
                    {/*<Route path="" exact component={newFilter}/>*/}
                    <Route path="/base/partner/info" exact component={PartnerSearchBlock}/>
                    <Route path="/outdoor_furniture" exact component={OutdoorFurniture}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
