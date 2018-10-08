export const DISPATCH_SEARCH = 'DISPATCH_SEARCH';

export function dispatchSearch(search) {
	return {
		type: DISPATCH_SEARCH,
		payload: search
	};
}