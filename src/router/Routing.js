import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import Images from '../pages/images';
import App from '../pages/App';
import Nav from '../components/nav';

export default function Routing() {
    return (
        <div>
            <Nav/>
            <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/images" component={Images}/>
            </Switch>
            </div>
        </div>
    )
}
