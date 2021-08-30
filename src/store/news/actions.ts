import {
  NewsItem,
  GetNewsSuccessAction,
  GetNewsFailureAction,
  BaseAction,
} from './types';

export const GET_NEWS = 'NEWS::GET_NEWS';
export const GET_NEWS_REQUEST = 'NEWS::GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'NEWS::GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'NEWS::GET_NEWS_FAILURE';

export const getNews = (): BaseAction => ({
  type: GET_NEWS,
});

export const getNewsRequest = (): BaseAction => ({
  type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (items: NewsItem[]): GetNewsSuccessAction => ({
  type: GET_NEWS_SUCCESS,
  payload: items,
});

export const getNewsFailure = (error: string): GetNewsFailureAction => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});
