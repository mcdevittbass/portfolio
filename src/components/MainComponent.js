import React from 'react';
import Intro from './IntroComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { InfoPage } from './InfoComponent';

const  Main = (props) => {
    return (
        <Switch>
            <Route path='/home'><Intro /></Route>
            <Route path='/info'><InfoPage /></Route>
            <Redirect to='/home' />
        </Switch>
    );
}

export default Main;