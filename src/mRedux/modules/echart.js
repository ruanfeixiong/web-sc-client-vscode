const FETCH_POSTS = 'echart/FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'echart/FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'echart/FETCH_POSTS_FAILURE';
const initialState = [10, 132, 101, 134, 90, 230, 210];
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_POSTS_SUCCESS:
    return [...payload];
  
  default:
    return state;
  }
}

export function fetchPosts(year=2016) {
  return async (dispatch) => {
    dispatch({
      type: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
      meta: {
        fetch: [`/accident/getAccidentByYear?year=2015`, {method: 'get'}]
      }
    });
  };
}