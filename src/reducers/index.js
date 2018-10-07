import { combineReducers } from 'redux';
import { initialState } from '../selectors/selectors'

const rootReducer = combineReducers({
  shop: combineReducers({
    items: (state = initialState.items) => state,
    basket: (state = initialState.basket) => state
  })
});

export default rootReducer;