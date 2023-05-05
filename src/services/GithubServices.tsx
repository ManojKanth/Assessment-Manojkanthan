import {User} from '../types/commonTypes';
import {get} from './ApiServices';

/**
 * Retrieves a user's data from the GitHub API
 * @param {string} username - The username of the user to fetch
 * @returns {Promise<User|null>} A promise that resolves with the user's data or null if the user is not found
 */
export const getUser = async (username: string): Promise<User | null> => {
  try {
    const response = await get(`/users/${username}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching user: ${error}`);
    return null;
  }
};

/**
 * Retrieves the list of followers for a given user from the GitHub API
 * @param {string} userName - The username of the user to fetch the followers for
 * @returns {Promise<User[]|null>} A promise that resolves with the list of followers or null if the user is not found
 */
export const getFollowers = async (
  userName: string,
): Promise<User[] | null> => {
  try {
    const response = await get(`users/${userName}/followers`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching followers: ${error}`);
    return null;
  }
};

/**
 * Retrieves the list of users that a given user is following from the GitHub API
 * @param {string} userName - The username of the user to fetch the followings for
 * @returns {Promise<User[]|null>} A promise that resolves with the list of followings or null if the user is not found
 */
export const getFollowing = async (
  userName: string,
): Promise<User[] | null> => {
  try {
    const response = await get(`users/${userName}/following`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching following: ${error}`);
    return null;
  }
};
