import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UserDetailSection from '../../components/ProfileComponent/UserDetailsSection';
import {UserProfileScreenProps} from '../../types/navigationTypes';
import {Colors} from '../../config/Colors';

const UserProfileViewScreen: React.FC<UserProfileScreenProps> = ({route}) => {
  const {userData = null} = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: userData?.avatar_url}} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{userData?.name}</Text>
          <Text style={styles.username}>@{userData?.login}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <UserDetailSection title="Bio" content={userData?.bio} />
        <UserDetailSection title="Location" content={userData?.location} />
        <UserDetailSection title="Email" content={userData?.email} />
        <UserDetailSection title="Followers" content={userData?.followers} />
        <UserDetailSection title="Following" content={userData?.following} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  details: {
    marginTop: 20,
  },
});

export default UserProfileViewScreen;
