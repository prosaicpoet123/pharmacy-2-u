import { combineReducers } from 'redux';
import { initialState } from '../selectors/selectors'
import { reducer as searchReducer} from 'redux-search'

const rootReducer = combineReducers({
  shop: combineReducers({
    items: (state = initialState.items) => state,
    basket: (state = initialState.basket) => state
  })
});

export default rootReducer;