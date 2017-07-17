import { menuService } from "./menu.service";

const NAME = "[MENU]"

export const menuActionType = {
	GET: `${NAME} Get`,
	GET_SUCCESS: `${NAME} Get Success`,
	GET_FAIL: `${NAME} Get Fail`
}

export const menuAction = {

	get: () => {
		return dispatch => {
			dispatch({
				type: menuActionType.GET
			})

			return menuService.get().then(
				response => {
					// this should be done in separate middleware and not in actions
					dispatch(menuAction.getSuccess(response))
				},
				error => {
					dispatch(menuAction.getFail(error))
				}
			)
		}
	},

	getSuccess: (items) => {
		return {
			type: menuActionType.GET_SUCCESS,
			payload: items
		}
	},

	getFail: (err) => {
		return {
			type: menuActionType.GET_FAIL,
			payload: err
		}
	}

}