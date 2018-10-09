import update from 'immutability-helper';
import { ADD_TO_LIST, REMOVE_FROM_LIST, TOGGLE_SELECTED } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_LIST:
            Object.assign(action.payload, { selected: true });
            return [...state, action.payload]

        case REMOVE_FROM_LIST:
            var arr = [...state];
            var index = action.payload
            arr.splice(index, 1)
            return arr

        case TOGGLE_SELECTED:
            var arr = [...state]
            var index = action.payload
            var currentValue = arr[index].selected
            if (currentValue) {
                var newArr = update(arr, { [index]: { selected: { $set: false } } })
            } else {
                var newArr = update(arr, { [index]: { selected: { $set: true } } })
            }
            return newArr

        default:
            return state;

    }
}