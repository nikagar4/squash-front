import { sitemapActionType } from "./sitemap.action"

const initialState = {
	isBusy: false,
	items: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case sitemapActionType.GET: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case sitemapActionType.GET_SUCCESS: {
			return Object.assign({}, state, {
				isBusy: false,
				items: action.payload
			});
		}

		case sitemapActionType.GET_FAIL: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		default: {
			return state;
		}
	}
};