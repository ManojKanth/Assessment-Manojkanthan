import axios, {AxiosResponse} from 'axios';

// Define the base URL for the GitHub API
const GITHUB_API_BASE_URL = 'https://api.github.com/';

// Create an instance of the Axios HTTP client with the base URL
const httpClient = axios.create({
  baseURL: GITHUB_API_BASE_URL,
});

/**
 * Makes an HTTP request to the GitHub API.
 * @param method The HTTP method to use (e.g. 'get', 'post', etc.).
 * @param url The URL to make the request to.
 * @param data Optional data to include in the request body (for POST requests).
 * @returns The response from the server or an error object if the request fails.
 */
const makeApiRequest = async (
  method: string,
  url: string,
  data?: any,
): Promise<any> => {
  try {
    const response: AxiosResponse = await httpClient({
      method,
      url,
      data: data,
    });
    return response;
  } catch (error: any) {
    // Return the error response from the server
    return error.response.data;
  }
};

/**
 * Makes an HTTP POST request to the GitHub API.
 * @param url The URL to make the request to.
 * @param data The data to include in the request body.
 * @returns The response from the server or an error object if the request fails.
 */
export const post = async (url: string, data: any): Promise<any> => {
  return await makeApiRequest('post', url, data);
};

/**
 * Makes an HTTP GET request to the GitHub API.
 * @param url The URL to make the request to.
 * @returns The response from the server or an error object if the request fails.
 */
export const get = async (url: string): Promise<any> => {
  return await makeApiRequest('get', url);
};
