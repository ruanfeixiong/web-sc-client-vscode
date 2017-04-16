import 'babel-polyfill';
import './uitls/qpidHelper';
import  './styles/global/normalize.css';
import React, { Component } from 'react';
import {
    Router, Route, IndexRoute, Redirect, hashHistory
} from 'react-router';

import { Provider } from 'react-redux';
import { resizeView } from './uitls/viewHelper';
import store from './mRedux';
import App from './views/App.jsx';
import MainView from './views/MainView.jsx';
import SafeCity from './views/SafeCity.jsx';
import Corporation from './views/Corporation.jsx';
 


//resizeView(3630, 1928);
resizeView(3840, 2160);

class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={MainView} />
                        <Route path="/mainview" component={MainView} />
                        <Route path="/safecity" component={SafeCity} />
                        <Route path="/corporation" component={Corporation} />
                        <Redirect from='*' to='/' />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Root;