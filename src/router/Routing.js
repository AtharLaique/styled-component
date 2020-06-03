import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import GettingStarted from '../pages/GettingStarted';
import App from '../pages/App';
import Nav from '../components/nav';
import Components from '../pages/Components';

export default function Routing() {
    return (
        <div>
            <Nav/>
            <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/getting-started" component={GettingStarted}/>
                <Route path="/components" component={Components}/>
            </Switch>
            </div>
        </div>
    )
}
