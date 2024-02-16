import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors';

type Props = {
  title: string;
  content?: string | number;
};

const UserDetailSection: React.FC<Props> = ({title, content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: Colors.darkGray,
  },
});

export default UserDetailSection;
