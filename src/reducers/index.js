import { combineReducers } from 'redux';
import { initialState } from '../selectors/selectors'

const rootReducer = combineReducers({
  shop: combineReducers({
    items: (state = initialState.shop) => state,
    basket: (state = initialState.basket) => state
  })
});

export default rootReducer;