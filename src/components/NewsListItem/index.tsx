import React from 'react';
import { View, Text } from 'react-native';

import { NewsListItemProps } from './types';
import { styles } from './styles';

export const NewsListItem = ({ item, onOpenLink }: NewsListItemProps) => {
  const handlePress = () => onOpenLink(item.url);

  return (
    <View style={styles.story}>
      <Text style={styles.title}>{item.title}</Text>
      {!!item.url && <Text onPress={handlePress}>{item.url}</Text>}
      <View style={styles.row}>
        <Text style={styles.authorName}>{item.authorId}</Text>
        <Text>Karma: {item.authorRating}</Text>
      </View>
      <View style={styles.row}>
        <Text>{item.time}</Text>
        <Text>Raiting: {item.rating}</Text>
      </View>
    </View>
  );
};
