import { userActionType } from "./user.action"

const initialState = {
	isBusy: false,
	user: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case userActionType.GET: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case userActionType.GET_SUCCESS: {
			return Object.assign({}, state, {
				isBusy: false,
				user: action.payload
			});
		}

		case userActionType.GET_FAIL: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		default: {
			return state;
		}
	}
};