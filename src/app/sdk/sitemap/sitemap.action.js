import { sitemapService } from './sitemap.service';

const NAME = '[SITEMAP]';

export const sitemapActionType = {
  GET: `${NAME} Get`,
  GET_SUCCESS: `${NAME} Get Success`,
  GET_FAIL: `${NAME} Get Fail`,
};

export const sitemapAction = {
  get: () => {
    return dispatch => {
      dispatch({
        type: sitemapActionType.GET,
      });

      return sitemapService.get().then(
        response => {
          dispatch(sitemapAction.getSuccess(response));
        },
        error => {
          dispatch(sitemapAction.getFail(error));
        },
      );
    };
  },

  getSuccess: items => {
    return {
      type: sitemapActionType.GET_SUCCESS,
      payload: items,
    };
  },

  getFail: err => {
    return {
      type: sitemapActionType.GET_FAIL,
      payload: err,
    };
  },
};
