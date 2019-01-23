import axios from 'axios';
import to from '../util/to';
import * as Types from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    const [err, res] = await to(axios.get('/auth/api/user'));
    if(err) {
      console.log('axios get user error:', err);
      dispatch({ type: Types.FETCH_USER, payload: null });
    }
    else {
      console.log('axios get user:', res.data);
      dispatch({ type: Types.FETCH_USER, payload: res.data });
    }
  }
};
