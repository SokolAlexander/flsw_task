import axios from 'axios';

import { TOP_API_URL, USER_API_URL, STORY_API_URL } from './constants';

const getTopStories = async () => {
  const { data } = await axios.get(TOP_API_URL);

  return data;
};

const getUserInfo = async (userId: string) => {
  const { data } = await axios.get(`${USER_API_URL}${userId}/karma.json`);

  return data;
};

const getStoryItem = async (itemId: string) => {
  const { data } = await axios.get(`${STORY_API_URL}${itemId}.json`);

  return data;
};

export const api = {
  getStoryItem,
  getUserInfo,
  getTopStories,
};
