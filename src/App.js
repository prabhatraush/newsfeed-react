import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/Header';
import Home from './NewsHeadline/Home';
import NationNews from './NewsHeadline/NationNews';
import InternationalNews from './NewsHeadline/InternationalNews';
import SportsNews from './NewsHeadline/SportsNews';
import EntertainmentNews from './NewsHeadline/EntertainmentNews';
import CareersNews from './NewsHeadline/CareersNews';

function App() {
  return (
    <>
    <Header/>
    <Switch>
        <Route exact path="/home" >
            <Redirect to="/"/> 
        </Route>
        <Route exact path="/" component={Home} />
        <Route path="/nation" component={NationNews} />
        <Route path="/international" component={InternationalNews} />
        <Route path="/sports" component={SportsNews} />
        <Route path="/entertainment" component={EntertainmentNews} />
        <Route path="/careers" component={CareersNews} />

    </Switch>
    </>
  );
}

export default App;
