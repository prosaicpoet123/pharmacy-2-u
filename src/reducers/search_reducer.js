import { DISPATCH_SEARCH } from '../actions/index';

export default function(state = {searchTerm: ''}, action) {
	switch(action.type) {
		case DISPATCH_SEARCH:
        return action.payload
        
        default:
        return state;
      
	}
}