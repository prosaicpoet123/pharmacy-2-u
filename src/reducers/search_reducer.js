import { DISPATCH_SEARCH_RESULT, RESET_SEARCH } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case DISPATCH_SEARCH_RESULT:
        return action.payload

        case RESET_SEARCH:
        return state = {}
        
        default:
        return state;
      
	}
}