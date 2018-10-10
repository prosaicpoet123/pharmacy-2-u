import { DISPATCH_UPDATE_MINI_BASKET_STATUS } from '../actions';

export default function(state = {active: false}, action) {
	switch(action.type) {
        case DISPATCH_UPDATE_MINI_BASKET_STATUS:
        return {active: action.payload}
        
        default:
        return state;
      
	}
}