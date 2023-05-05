import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {User} from '../types/commonTypes';
import {Colors} from '../config/Colors';
type Props = {
  userData: User;
  onPressFollowers: (username: string) => void;
  onPressFollowings: (username: string) => void;
};

const GithubProfileDisplay = ({
  userData,
  onPressFollowers,
  onPressFollowings,
}: Props) => {
  const handlePressFollowers = () => {
    onPressFollowers(userData.login);
  };

  const handlePressFollowings = () => {
    onPressFollowings(userData.login);
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{uri: userData.avatar_url}} />
      </View>
      <Text style={styles.username}>{userData.login}</Text>
      {userData.name && <Text style={styles.name}>{userData.name}</Text>}
      {userData.bio && <Text style={styles.description}>{userData.bio}</Text>}
      <View style={styles.countContainer}>
        <TouchableOpacity
          style={styles.countBox}
          onPress={handlePressFollowers}>
          <Text style={styles.count}>{userData.followers}</Text>
          <Text style={styles.countLabel}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.countBox}
          onPress={handlePressFollowings}>
          <Text style={styles.count}>{userData.following}</Text>
          <Text style={styles.countLabel}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: Colors.lightShadGrey,
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkShadGrey,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: Colors.darkGray,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.darkGray,
    marginBottom: 20,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  countBox: {
    alignItems: 'center',
  },
  count: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkShadGrey,
    marginBottom: 5,
  },
  countLabel: {
    fontSize: 18,
    color: Colors.darkGray,
    textAlign: 'center',
  },
});

export default GithubProfileDisplay;
