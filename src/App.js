import React from 'react';
import './App.css';
import AllHeader from "./containers/AllHeader";
import Content from "./containers/Content";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <AllHeader/>
                </header>
                <Switch>
                    <Route path="" exact component={Content}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;
