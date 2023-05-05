import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../config/Colors';

interface Props {
  text: string;
}

const EmptyComponent = ({text}: Props) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
});

export default EmptyComponent;
