import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import "./assets/fonts/sf-ui-display-cufonfonts-webfont/style.css";

import Partners from "./containers/Base/Partners/Partners";
import OutdoorFurniture from "./containers/Base/OutdoorFurniture/OudoorFurniture";
import Header from "./components/Header/Header";
import Construction from "./containers/Base/Construction/Construction";
import Locations from "./containers/Base/Locations/Locations";
import Location from "./containers/Base/Location/Location";
import PartnerGeneralInfo from "./containers/Base/Partners/TabPanelForm/PartnerGeneralInfo";
import Agreements from "./containers/Base/Documents/Agreements/Agreements";

import Design from './containers/Installations/Design/Design';
import BatchPlacement from "./containers/Sales/BatchPlacement/BatchPlacement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Switch>
          <Route path='/sales/batch_placement' component={BatchPlacement} />
          <Route path='/installations/design' component={Design} />
          <Route path="/base/partners" exact component={Partners} />
          <Route
            path="/base/partners/info/:id?"
            exact
            component={PartnerGeneralInfo}
          />
          <Route path="/base/construction/:id?" exact component={Construction} />
          <Route
            path="/base/outdoor_furniture"
            exact
            component={OutdoorFurniture}
          />
          <Route path="/base/locations" exact component={Locations} />
          <Route path="/base/locations/location/:id?" exact component={Location} />
          <Route path="/base/documents/agreements" exact component={Agreements} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
