import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const NewsHeader = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Hacker News</Text>
    </View>
  );
};
