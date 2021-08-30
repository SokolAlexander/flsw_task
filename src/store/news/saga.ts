import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_NEWS,
  getNewsRequest,
  getNewsFailure,
  getNewsSuccess,
} from './actions';
import { api } from '../../utils/api';
import { getRandomItems } from '../../utils/getRandomItems';
import { NewsItem, StoryItem } from './types';
import { formatDate } from '../../utils/formatDate';

function getStoriesByIds(storiesIds: number[]) {
  const promises = storiesIds.map(id => api.getStoryItem(`${id}`));

  return Promise.all(promises);
}

async function getAuthorsByIds(ids: string[]) {
  const promises = ids.map(async id => {
    const karma = await api.getUserInfo(id);

    return {
      karma,
      id,
    };
  });

  const authors = await Promise.all(promises);
  return authors.reduce<{ [key: string]: number }>((acc, auth) => {
    acc[auth.id] = auth.karma;
    return acc;
  }, {});
}

function getNewsItemsFromStories<S extends StoryItem>(
  stories: S[],
  authors: { [key: string]: number },
): NewsItem[] {
  return stories.map(story => ({
    id: story.id,
    rating: story.score,
    title: story.title,
    url: story.url,
    time: formatDate(story.time * 1000),
    authorId: story.by,
    authorRating: authors[story.by],
  }));
}

function getUniqueAuthorsFromStories<T extends StoryItem>(stories: T[]) {
  return Array.from(new Set(stories.map(({ by }) => by)));
}

function* onGetNews() {
  yield put(getNewsRequest());

  try {
    const topStoriesIds: number[] = yield call(api.getTopStories);
    const shuffledStoriesIds: number[] = yield call(
      getRandomItems,
      topStoriesIds,
    );

    const stories: StoryItem[] = yield call(
      getStoriesByIds,
      shuffledStoriesIds,
    );
    const authorsIds = getUniqueAuthorsFromStories(stories);
    const authors: { [key: string]: number } = yield call(
      getAuthorsByIds,
      authorsIds,
    );

    const newsItems = getNewsItemsFromStories(stories, authors);
    const sortedNews = newsItems.sort((a, b) => b.rating - a.rating);

    yield put(getNewsSuccess(sortedNews));
  } catch (e) {
    yield put(getNewsFailure(e?.message || 'Unknown error'));
  }
}

export function* newsSaga() {
  yield takeLatest(GET_NEWS, onGetNews);
}
