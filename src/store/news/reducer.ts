import {
  NewsState,
  RequestStatus,
  CommonAction,
  GetNewsFailureAction,
  GetNewsSuccessAction,
} from './types';
import {
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS,
} from './actions';

const initialState = {
  items: [],
  request: {
    status: RequestStatus.IDLE,
    error: null,
  },
};

export const newsReducer = (
  state: NewsState = initialState,
  action: CommonAction,
): NewsState => {
  switch (action.type) {
    case GET_NEWS_REQUEST: {
      return {
        ...state,
        request: {
          status: RequestStatus.PENDING,
          error: null,
        },
      };
    }
    case GET_NEWS_FAILURE: {
      return {
        ...state,
        request: {
          status: RequestStatus.FAILURE,
          error: (action as GetNewsFailureAction).payload,
        },
      };
    }
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        items: (action as GetNewsSuccessAction).payload,
        request: {
          ...state.request,
          status: RequestStatus.SUCCESS,
        },
      };
    }
    default:
      return state;
  }
};
