import { menuActionType } from './menu.action';

const initialState = {
  isBusy: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case menuActionType.GET: {
      return Object.assign({}, state, {
        isBusy: true,
      });
    }

    case menuActionType.GET_SUCCESS: {
      return Object.assign({}, state, {
        isBusy: false,
        items: action.payload,
      });
    }

    case menuActionType.GET_FAIL: {
      return Object.assign({}, state, {
        isBusy: false,
      });
    }

    default: {
      return state;
    }
  }
};
