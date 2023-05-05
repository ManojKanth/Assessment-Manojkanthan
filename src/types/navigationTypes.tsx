import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {User} from './commonTypes';

export type HomeProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

export type FollowListProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'FollowListScreen'> & {
    params?: {
      userName?: string;
      isFollowing?: boolean;
    };
  };
};

export type UserProfileScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'UserProfileViewScreen'> & {
    params?: {
      userData?: User;
    };
  };
};
