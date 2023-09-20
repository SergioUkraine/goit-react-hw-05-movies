import axios from 'axios';
import * as auth from './authentication';

// Base URL for The Movie Database (TMDb) API.
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Authorization header for API requests (with API Read Access Token).
const AUTHORIZATION_HEADER = `Bearer ${auth.ACCESS_TOKEN}`;

// Default parameters for requests.
const defaultParams = {
  language: 'uk', //'en-US',
};

/**
 * Creates an Axios instance with configured parameters.
 * @returns {AxiosInstance} - Axios instance.
 */
const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: TMDB_BASE_URL,
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      accept: 'application/json',
    },
  });
  return instance;
};

/**
 * Handles request errors and throws an exception.
 * @param {Error} error - Axios error.
 * @throws {Error} - Error with detailed message.
 */
const handleError = error => {
  console.error('An error occurred while fetching data: ', error);
  throw error;
};

/**
 * Sends an HTTP request to The Movie Database (TMDb) API.
 * @param {string} url - API resource path.
 * @param {Object} params - Request parameters.
 * @returns {Promise} - Promise resolved with data from the API response.
 * @throws {Error} - Error when making an API request.
 */
const sendRequest = async (url, params) => {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Retrieves a list of popular movies for the current day.
 * @param {number} currentPage - The current page (default is 1).
 * @returns {Promise} - A Promise that resolves with data about popular movies.
 */
export const getTrending = async (currentPage = 1) => {
  const page =
    currentPage > 1 && currentPage < 501 ? { page: currentPage } : {};
  const params = { ...defaultParams, ...page };
  return sendRequest('/trending/movie/week', params);
};

/**
 * Searches for movies by name.
 *
 * @param {string} searchQuery - The name of the movie to search for.
 * @param {number} currentPage - The current page (default is 1).
 * @param {boolean} includeAdult - Whether to include adult content (default is false).
 * @returns {Promise} - A Promise that resolves with search results for the specified movie name.
 */
export const getSearchMovieByName = async (
  searchQuery,
  currentPage = 1,
  include_adult = false
) => {
  const page =
    currentPage > 1 && currentPage < 501 ? { page: currentPage } : {};
  const query = searchQuery ? { query: searchQuery } : {};
  const params = {
    ...defaultParams,
    ...page,
    ...{ include_adult },
    ...query,
  };
  return sendRequest('/search/movie', params);
};

/**
 * Fetches movie details by ID.
 *
 * @param {number} id - The ID of the movie to retrieve details for.
 * @returns {Promise} - A Promise that resolves with details of the movie.
 */
export const getDetailsById = async id => {
  return sendRequest(`/movie/${id}`, defaultParams);
};

/**
 * Fetches movie credits by ID.
 *
 * @param {number} id - The ID of the movie to retrieve credits for.
 * @returns {Promise} - A Promise that resolves with credits information for the movie.
 */
export const getMovieCreditsById = async id => {
  return sendRequest(`/movie/${id}/credits`, defaultParams);
};

/**
 * Fetches movie reviews by ID.
 *
 * @param {number} id - The ID of the movie to retrieve reviews for.
 * @returns {Promise} - A Promise that resolves with reviews for the movie.
 */
export const getMovieReviewsById = async id => {
  return sendRequest(`/movie/${id}/reviews`, defaultParams);
};
