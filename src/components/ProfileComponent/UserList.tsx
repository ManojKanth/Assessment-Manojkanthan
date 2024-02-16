import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {User} from '../../types/commonTypes';
import {Colors} from '../../config/Colors';

type UserListProps = {
  user: User;
  onPressUserProfile: (userName: string) => void;
};

const UserList = ({user, onPressUserProfile}: UserListProps) => {
  return (
    <TouchableOpacity
      style={styles.resultContainer}
      onPress={() => onPressUserProfile(user.login)}>
      <Image style={styles.avatar} source={{uri: user.avatar_url}} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.login}</Text>
        {user.bio && <Text style={styles.bio}>{user.bio}</Text>}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  bio: {
    color: Colors.mediumGray,
    fontSize: 14,
  },
});
export default UserList;
