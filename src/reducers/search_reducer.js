import { DISPATCH_SEARCH } from '../actions/index';

export default function(state = {searchTerm: ''}, action) {
    console.log(action.payload)
	switch(action.type) {
		case DISPATCH_SEARCH:
        return {searchTerm: action.payload}
        
        default:
        return state;
      
	}
}