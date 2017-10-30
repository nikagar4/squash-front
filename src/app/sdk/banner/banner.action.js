import { bannerService } from './banner.service';

const NAME = '[BANNER]';

export const bannerActionType = {
  GET: `${NAME} Get`,
  GET_SUCCESS: `${NAME} Get Success`,
  GET_FAIL: `${NAME} Get Fail`,
};

export const bannerAction = {
  get: () => {
    return dispatch => {
      dispatch({
        type: bannerActionType.GET,
      });

      return bannerService.get().then(
        response => {
          dispatch(bannerAction.getSuccess(response));
        },
        error => {
          dispatch(bannerAction.getFail(error));
        },
      );
    };
  },

  getSuccess: banners => {
    return {
      type: bannerActionType.GET_SUCCESS,
      payload: banners,
    };
  },

  getFail: err => {
    return {
      type: bannerActionType.GET_FAIL,
      payload: err,
    };
  },
};
