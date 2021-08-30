import React, { useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getNews } from '../../store/news/actions';
import { styles } from './styles';
import { NewsList } from '../../components/NewsList';
import { NewsHeader } from '../../components/NewsHeader';
import {
  selectNews,
  selectIsRequestPending,
  selectError,
} from '../../store/news/selectors';

export const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsRequestPending);
  const error = useSelector(selectError);

  const refresh = useCallback(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    refresh();
  }, []);

  const handleOpenLink = useCallback(async (link: string) => {
    if (await Linking.canOpenURL(link)) {
      Linking.openURL(link);
    }
  }, []);

  return (
    <>
      <SafeAreaView edges={['bottom', 'top']} style={styles.root}>
        <NewsHeader />
        <NewsList
          items={news}
          isLoading={isLoading}
          onOpenLink={handleOpenLink}
          onRefresh={refresh}
          error={error}
        />
      </SafeAreaView>
    </>
  );
};
