import { bannerActionType } from "./banner.action"

const initialState = {
	isBusy: false,
	items: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case bannerActionType.GET: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case bannerActionType.GET_SUCCESS: {
			return Object.assign({}, state, {
				isBusy: false,
				items: action.payload
			});
		}

		case bannerActionType.GET_FAIL: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		default: {
			return state;
		}
	}
};