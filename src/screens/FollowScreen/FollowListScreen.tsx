import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {User} from '../../types/commonTypes';
import {
  getFollowers,
  getFollowing,
  getUser,
} from '../../services/GithubServices';
import {FollowListProps} from '../../types/navigationTypes';
import EmptyComponent from '../../components/EmptyComponent';
import UserList from '../../components/ProfileComponent/UserList';
import {Colors} from '../../config/Colors';

interface Props extends FollowListProps {}

const FollowListScreen: React.FC<Props> = ({navigation, route}) => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [userProfileName, setUserProfileName] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Update the state when the route params change
    if (route.params?.userName && route.params?.isFollowing !== undefined) {
      setIsFollowing(route.params.isFollowing);
      setUserProfileName(route.params.userName);
      fetchData(route.params.isFollowing, route.params.userName);
    }
  }, [route.params]);

  const fetchData = async (isFromFollowing: boolean, userName: string) => {
    // Fetch followers or following users from the Github API
    try {
      const userData = isFromFollowing
        ? await getFollowing(userName)
        : await getFollowers(userName);

      setUserList(userData ?? []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    // Handle the pull-to-refresh gesture
    setRefreshing(true);

    try {
      await fetchData(isFollowing, userProfileName);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleUserPress = async (username: string) => {
    // Navigate to the user profile screen when a user is pressed
    try {
      const userData = await getUser(username);
      navigation.navigate('UserProfileViewScreen', {userData});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const renderUser = ({item}: {item: User}) => {
    // Render a single user in the list
    return <UserList user={item} onPressUserProfile={handleUserPress} />;
  };

  const renderEmptyList = () => {
    // Render an empty state when the list is empty
    return (
      <View style={styles.emptyList}>
        <EmptyComponent text="No results found" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={renderUser}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderEmptyList()}
        contentContainerStyle={userList.length === 0 ? styles.emptyList : null}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FollowListScreen;
