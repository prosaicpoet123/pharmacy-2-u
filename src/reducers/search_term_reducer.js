import { DISPATCH_SEARCH_TERM, RESET_SEARCH_TERM } from '../actions';

export default function(state = '', action) {
	switch(action.type) {
		case DISPATCH_SEARCH_TERM:
        return action.payload

        case RESET_SEARCH_TERM:
        return ''
        
        default:
        return state;
      
	}
}