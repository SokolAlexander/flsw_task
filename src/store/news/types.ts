export type StoryItem = {
  by: string;
  title: string;
  time: number;
  url: string;
  score: number;
  id: string;
};

export type NewsItem = {
  title: string;
  url: string;
  time: string;
  rating: number;
  authorId: string;
  authorRating: number;
};

export enum RequestStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type NewsState = {
  items: NewsItem[];
  request: {
    status: RequestStatus;
    error: string | null;
  };
};

export interface BaseAction {
  type: string;
}

export interface GetNewsSuccessAction extends BaseAction {
  payload: NewsItem[];
}

export interface GetNewsFailureAction extends BaseAction {
  payload: string;
}

export type CommonAction =
  | BaseAction
  | GetNewsSuccessAction
  | GetNewsFailureAction;
