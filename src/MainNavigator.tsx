import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import UserProfileViewScreen from './screens/User/UserProfileViewScreen';
import FollowListScreen from './screens/FollowScreen/FollowListScreen';
import CustomButton from './components/BaseComponent/Button';
import {Colors} from './config/Colors';
import {User} from './types/commonTypes';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.black,
            },
            headerTintColor: Colors.white,
            title: 'Github Explorer',
          }}
        />
        <Stack.Screen
          name="FollowListScreen"
          component={FollowListScreen}
          initialParams={{userData: null}}
          options={({route, navigation}) => {
            const {isFollowing} = route.params as {isFollowing: boolean};
            const title = isFollowing ? 'Following' : 'Followers';
            return {
              headerStyle: {
                backgroundColor: Colors.black,
              },
              headerTintColor: Colors.white,
              headerTitle: title,
              headerLeft: () => (
                <CustomButton
                  onButtonPress={() => navigation.goBack()}
                  title="Back"
                />
              ),
            };
          }}
        />

        <Stack.Screen
          name="UserProfileViewScreen"
          component={UserProfileViewScreen}
          initialParams={{userData: null}}
          options={({route, navigation}) => {
            const {userData} = route.params as {userData: User};
            const title = userData.name || userData.login;
            return {
              headerStyle: {
                backgroundColor: Colors.black,
              },
              headerTitle: title,
              headerTintColor: Colors.white,
              headerLeft: () => (
                <CustomButton
                  onButtonPress={() => navigation.goBack()}
                  title="Back"
                />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
