import { userService } from "./user.service";

const NAME = "[USER]"

export const userActionType = {
	GET: `${NAME} Get`,
	GET_SUCCESS: `${NAME} Get Success`,
	GET_FAIL: `${NAME} Get Fail`
}

export const userAction = {

	get: () => {
		return dispatch => {
			dispatch({
				type: userActionType.GET
			})

			return userService.get().then(
				response => {
					dispatch(userAction.getSuccess(response))
				},
				error => {
					dispatch(userAction.getFail(error))
				}
			)
		}
	},

	getSuccess: (user) => {
		return {
			type: userActionType.GET_SUCCESS,
			payload: user
		}
	},

	getFail: (err) => {
		return {
			type: userActionType.GET_FAIL,
			payload: err
		}
	}

}