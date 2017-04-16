import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import counter from './counter';
import echart from './echart';
import scSurvey from './SafeCity/scSurvey';

export default combineReducers({
 counter,
 echart,
 scSurvey,
  routing: routerReducer
});