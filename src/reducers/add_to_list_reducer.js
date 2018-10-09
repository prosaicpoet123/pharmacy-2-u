import { ADD_TO_LIST } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
        case ADD_TO_LIST:
        Object.assign(action.payload, {selected: true});
        return [ ...state, action.payload ]

        // case REMOVE_FROM_LIST:
        // return action.payload
        
        default:
        return state;
      
	}
}