import { combineReducers } from 'redux';
import { initialState } from '../selectors/selectors'

// Reducers
import searchReducer from './search_reducer'
import searchTermReducer from './search_term_reducer'

const rootReducer = combineReducers({
  shop: combineReducers({
    items: (state = initialState.items) => state,
    basket: (state = initialState.basket) => state,
    search: combineReducers({
      searchResult: searchReducer,
      searchTerm: searchTermReducer
    })
    })
});

export default rootReducer;