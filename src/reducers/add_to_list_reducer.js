import { ADD_TO_LIST, REMOVE_FROM_LIST } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
        case ADD_TO_LIST:
        Object.assign(action.payload, {selected: true});
        return [ ...state, action.payload ]

        case REMOVE_FROM_LIST:
        var arr = [...state];
        var index = action.payload
        arr.splice(index, 1)
        return arr
        
        default:
        return state;
      
	}
}