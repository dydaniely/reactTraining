import React from 'react';
import StorePicker from "./StorePicker";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from "./App";
import NotFound from "./NotFound";
import Order from "./Order";
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={StorePicker}/>
            <Route path="/Store/:StoreId" component={App}/>
            <Route path ="/Order" component={Order} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Router;