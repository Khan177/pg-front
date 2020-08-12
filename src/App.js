import React from "react";
import "./App.css";
import "./assets/fonts/sf-ui-display-cufonfonts-webfont/style.css";
import Partners from "./containers/Base/Partners/Partners";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Header from "./components/Header/Header";
import Construction from "./containers/Base/Construction/Construction";
import Locations from "./containers/Base/Locations/Locations";
import Location from "./containers/Base/Location/Location";
import PartnerGeneralInfo from "./containers/Base/Partners/TabPanelForm/PartnerGeneralInfo";
import cool from "./containers/cpop";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Switch>
          <Route path="/base/partners" exact component={Partners} />
          <Route
            path="/base/partners/info"
            exact
            component={PartnerGeneralInfo}
          />
          <Route path="/cool" exact component={cool} />
          <Route path="/base/construction" exact component={Construction} />
          <Route
            path="/base/outdoor_furniture"
            exact
            component={OutdoorFurniture}
          />
          <Route path="/base/locations" exact component={Locations} />
          <Route path="/base/locations/location" exact component={Location} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
