import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import ChatPage from './ChatPage';
import '../styles/Main.css';

const App = () => (
    <Fragment>
        <Switch>
            <Route exact path='/' component={ChatPage}></Route>
        </Switch>
    </Fragment>
);

export default App