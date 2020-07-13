import React from 'react';
import './App.css';
import AllHeader from "./containers/AllHeader/AllHeader";
import Content from "./containers/PartnerTable/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PartnerEdit from "./containers/PartnerEdit/PartnerEdit";

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
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
