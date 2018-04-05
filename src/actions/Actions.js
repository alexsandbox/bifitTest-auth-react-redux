import * as actionTypes from '../constants/ActionTypes';

export const loginProgress = () => ({
  type: actionTypes.LOGIN_PROGRESS,
});

export const loginChangeUser = user => ({
  type: actionTypes.LOGIN_CHANGE_USER,
  user,
});

export const loginError = errors => ({
  type: actionTypes.LOGIN_ERROR,
  errors,
});

export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const loginClear = () => ({
  type: actionTypes.LOGIN_CLEAR,
});

function requestPosts(subreddit) {
  return {
    type: actionTypes.REQUEST_POSTS,
    subreddit,
  };
}

function receivePosts(subreddit, json) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now(),
  };
}

export function fetchPosts(subreddit, url, params, withCredentails = false) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    const data = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: params,
    };

    if (withCredentails) {
      data.credentials = 'include';
    }

    return fetch(url, data).then(
      response => response.text(),
      (error) => { throw new Error(error); },
    ).then(json => dispatch(receivePosts(subreddit, json)));
  };
}
