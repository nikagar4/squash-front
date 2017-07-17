import { productsActionType } from "./products.action"

const initialState = {
	isBusy: false,
	products: [],
	favorites: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case productsActionType.GET_ALL: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case productsActionType.GET_ALL_SUCCESS: {
			return Object.assign({}, state, {
				isBusy: false,
				products: action.payload
			});
		}

		case productsActionType.GET_ALL_FAIL: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		case productsActionType.GET_FAVORITES: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case productsActionType.GET_FAVORITES_SUCCESS: {
			return Object.assign({}, state, {
				isBusy: false,
				favorites: action.payload
			});
		}

		case productsActionType.GET_FAVORITES_FAIL: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		default: {
			return state;
		}
	}
};