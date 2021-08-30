import { NewsItem, NewsState, RequestStatus } from './types';

export const selectNews = (state: NewsState): NewsItem[] => state.items;
export const selectIsRequestPending = (state: NewsState): boolean =>
  state.request.status === RequestStatus.PENDING;
export const selectError = (state: NewsState): string | null =>
  state.request.error;
