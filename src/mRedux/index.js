import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
//import DevTools from '../containers/DevTools';
import reducer from './modules/reducer';
let finalCreateStore;
if (process.env.NODE_ENV==='production') {
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware)
 )(createStore);
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   finalCreateStore = composeEnhancers(
   applyMiddleware.apply(this, middleware),
   // Provides support for DevTools:
 )(createStore);
}
const store = finalCreateStore(reducer);

 if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
export default store;