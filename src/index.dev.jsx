import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import {  hashHistory} from 'react-router';
import Root from './Root';
import store from './mRedux';

const history = syncHistoryWithStore(hashHistory, store);
const rootEl = document.getElementById('root');

render((
    <AppContainer >
        <Root store={store} history={history}/>
    </AppContainer>
), rootEl);



if (module.hot) {
    module.hot.accept('./Root', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
       const NextApp = require('./Root').default;
        render(
            <AppContainer>
                <NextApp store={store} history={history}/>
            </AppContainer>,
            rootEl
        );
    });
}