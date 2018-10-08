export const DISPATCH_SEARCH_RESULT = 'DISPATCH_SEARCH_RESULT';
export const RESET_SEARCH = 'RESET_SEARCH';
export const DISPATCH_SEARCH_TERM = 'DISPATCH_SEARCH_TERM';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';

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