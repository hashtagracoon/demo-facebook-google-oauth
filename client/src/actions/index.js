import axios from 'axios';
import * as Types from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/auth/api/user')
      .then((res) => {
        console.log('axios get:', res);
        dispatch({ type: Types.FETCH_USER, payload: res });
      });
  }
};
