import React, { useCallback } from 'react';
import { FlatList, Text } from 'react-native';

import { NewsListProps } from './types';
import { NewsListItem } from '../NewsListItem';
import { styles } from './styles';
import { ItemSeparator } from '../ItemSeparator';

export const NewsList = ({
  items,
  onRefresh,
  onOpenLink,
  isLoading,
  error,
}: NewsListProps) => {
  const renderItem = useCallback(
    ({ item }) => <NewsListItem item={item} onOpenLink={onOpenLink} />,
    [onOpenLink],
  );

  const renderError = useCallback(
    () =>
      isLoading ? null : (
        <Text style={styles.error}>{error || 'No news available'}</Text>
      ),
    [isLoading, error],
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      refreshing={isLoading}
      onRefresh={onRefresh}
      contentContainerStyle={styles.list}
      ListEmptyComponent={renderError}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};
