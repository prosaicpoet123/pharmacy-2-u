export const DISPATCH_SEARCH_RESULT = 'DISPATCH_SEARCH_RESULT';
export const RESET_SEARCH = 'RESET_SEARCH';
export const DISPATCH_SEARCH_TERM = 'DISPATCH_SEARCH_TERM';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED';

export function dispatchSearchResult(searchResult) {
	return {
		type: DISPATCH_SEARCH_RESULT,
		payload: searchResult
	};
}

export function resetSearch(search) {
	return {
		type: RESET_SEARCH,
		payload: search
	};
}

export function dispatchSearchTerm(searchTerm) {
	return {
		type: DISPATCH_SEARCH_TERM,
		payload: searchTerm
	};
}

export function resetSearchTerm(searchTerm) {
	return {
		type: RESET_SEARCH_TERM,
		payload: searchTerm
	};
}

export function addToList(selection) {
	return {
		type: ADD_TO_LIST,
		payload: selection
	};
}

export function removeFromList(selection) {
	return {
		type: REMOVE_FROM_LIST,
		payload: selection
	}
}

export function toggleSelected(selection) {
	return {
		type: TOGGLE_SELECTED,
		payload: selection
	}
}