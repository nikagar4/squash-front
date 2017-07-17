import { productsService } from "./products.service";

const NAME = "[PRODUCTS]"

export const productsActionType = {
	GET_ALL: `${NAME} Get All`,
	GET_ALL_SUCCESS: `${NAME} Get All Success`,
	GET_ALL_FAIL: `${NAME} Get All Fail`,
	GET_FAVORITES: `${NAME} Get Favorites`,
	GET_FAVORITES_SUCCESS: `${NAME} Get Favorites Success`,
	GET_FAVORITES_FAIL: `${NAME} Get Favorites Fail`
}

export const productsAction = {

	getAll: () => {
		return dispatch => {
			dispatch({
				type: productsActionType.GET_ALL
			})

			return productsService.getAll().then(
				response => {
					dispatch(productsAction.getAllSuccess(response))
				},
				error => {
					dispatch(productsAction.getAllFail(error))
				}
			)
		}
	},

	getAllSuccess: (products) => {
		return {
			type: productsActionType.GET_ALL_SUCCESS,
			payload: products
		}
	},

	getAllFail: (err) => {
		return {
			type: productsActionType.GET_ALL_FAIL,
			payload: err
		}
	},

	getFavorites: () => {
		return dispatch => {
			dispatch({
				type: productsActionType.GET_FAVORITES
			})

			return productsService.getFavorites().then(
				response => {
					dispatch(productsAction.getFavoritesSuccess(response))
				},
				error => {
					dispatch(productsAction.getFavoritesFail(error))
				}
			)
		}
	},

	getFavoritesSuccess: (products) => {
		return {
			type: productsActionType.GET_FAVORITES_SUCCESS,
			payload: products
		}
	},

	getFavoritesFail: (err) => {
		return {
			type: productsActionType.GET_FAVORITES_FAIL,
			payload: err
		}
	}

}