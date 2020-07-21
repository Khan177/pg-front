import React from 'react';
import './App.css';
import './assets/fonts/sf-ui-display-cufonfonts-webfont/style.css'
import AllHeader from "./containers/AllHeader/AllHeader";
import Content from "./containers/PartnerTable/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PartnerEdit from "./containers/PartnerEdit/PartnerEdit";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <AllHeader/>
                </header>
                <Switch>
                    <Route path="/base/partners" exact component={Content}/>
                    {/*<Route path="" exact component={newFilter}/>*/}
                    <Route path="/partnerEdit" exact component={PartnerEdit}/>
                    <Route path="/outdoor_furniture" exact component={OutdoorFurniture}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
