import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import {getUser} from '../../services/GithubServices';
import {User} from '../../types/commonTypes';
import GithubUserProfileComponent from '../../components/ProfileComponent/GithubUserProfileComponent';
import {HomeProps} from '../../types/navigationTypes';
import EmptyComponent from '../../components/EmptyComponent';
import {Colors} from '../../config/Colors';

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const [user, setUser] = useState<User | null>(null);

  // This function is responsible for handling the search event
  const handleSearch = async (username: string) => {
    const userData = await getUser(username);
    console.log('userData', userData);
    if (!userData) {
      setUser(null);
    } else {
      setUser(userData);
    }
  };

  // This function is responsible for navigating to the Followers screen
  const onPressFollowers = async (userName: string) => {
    navigation.navigate('FollowListScreen', {
      userName: userName,
      isFollowing: false,
    });
  };

  // This function is responsible for navigating to the Followings screen
  const onPressFollowings = async (userName: string) => {
    navigation.navigate('FollowListScreen', {
      userName: userName,
      isFollowing: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* SearchBar component */}
      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>

      {/* User profile or empty component */}
      {user ? (
        <GithubUserProfileComponent
          userData={user}
          onPressFollowers={onPressFollowers}
          onPressFollowings={onPressFollowings}
        />
      ) : (
        <EmptyComponent text="No results found" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.shadeGrey,
    margin: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
