const FETCH_POSTS = 'scity/FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'scity/FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'scity/FETCH_POSTS_FAILURE';

const initModel = {
  citySafetyIndex: 100,
  bayonetSpotNum: 210,
  videoOnOffLineModel: {totalNum: 1200, onLineNum: 53, offLineNum: 1223},
  bayonetDeviceOnOffLineModel:
      {totalNum: 230, onLineNum: 220, offLineNum: 101}
};
export default function reducer(state = initModel, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return [...payload];
    default:
      return state;
  }
}


export function initData(year = 2016) {
  return async(dispatch) => {
    dispatch({
      type: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
      meta: {fetch: ['safecity', 'survey', {year: year}]}
    });
  };
}