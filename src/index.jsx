import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import {  hashHistory} from 'react-router';
import Root from './Root';
import store from './mRedux';

const history = syncHistoryWithStore(hashHistory, store);
const rootEl = document.getElementById('root');

render(
    <Root store={store} history={history}/>,
    rootEl
);