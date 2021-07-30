import React from 'react'

import Home from './home/Home';
import Aboutus from './aboutus/Aboutus'
import Travells from './travellers/Galarry'
import ErrorPage from './error/ErrorPage'
import { Route, Switch } from "react-router-dom"




function Routes() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={Aboutus} />
                <Route path="/galarry" component={Travells} />
                <Route component={ErrorPage} />
            </Switch>
        </main>
    )
}


export default Routes;