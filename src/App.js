import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagePreview from "./components/page-preview";
import './App.css';

const ListOfGnomes = lazy(() => import('./modules/list-of-gnomes'));
const GnomesDetails = lazy(() => import('./modules/gnome-details'));

const App = () => (
  <Router className="App">
    <Suspense fallback={<PagePreview/>}>
      <Switch>
        <Route exact path="/" component={ListOfGnomes}/>
        <Route exact path="/gnomes/:id" component={GnomesDetails}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
