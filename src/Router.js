import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './componets/RouteHandler';
import Home from './pages/Home';
import DetailsCounter from './pages/DetailsCounter';
import DetailsTable from './pages/DetailsTable';
import Payment from './pages/Payment';

export default () => {
    return(
        <Switch>
            <RouteHandler exact path='/'>
                <Home/>
            </RouteHandler>
            <RouteHandler exact path='/DetailsCounter'>
                <DetailsCounter/>
            </RouteHandler>
            <RouteHandler exact path='/DetailsTable'>
                <DetailsTable/>
            </RouteHandler>
            <RouteHandler exact path='/Payment'>
                <Payment/>
            </RouteHandler>
        </Switch>
    )
}