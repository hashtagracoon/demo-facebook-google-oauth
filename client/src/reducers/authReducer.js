import * as Types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case Types.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
