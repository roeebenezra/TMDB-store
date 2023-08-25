// ApiConfig.js is a file that contains all the API endpoints that are used in the application.

export const API_KEY = 'c45d289a8e7381e528a2f7e50638ffc3';
export const API_PURCHASES_ADD = 'api/purchases/add';
export const SHOPPING_CART_GET = '/shopping-cart';
export const SHOPPING_CART_DELETE = '/shopping-cart/remove';
export const SHOPPING_CART_CLEAR = '/shopping-cart/clear';
export const SHOPPING_CART_ADD = '/shopping-cart/add';
export const SHOPPING_CART_SIZE = '/shopping-cart/size';
export const API_TMDB_BASE = 'https://api.themoviedb.org/3/';
export const API_MOVIE_SEARCH = `${API_TMDB_BASE}search/movie?&api_key=${API_KEY}&include_video=false&include_adult=false&query=`;
export const API_MOVIE_TREND = `${API_TMDB_BASE}trending/movie/day?api_key=${API_KEY}&include_video=false&include_adult=false&media_type=movie`;
export const API_TV_TREND = `${API_TMDB_BASE}trending/tv/day?api_key=${API_KEY}&include_adult=false&include_video=false&api_key=${API_KEY}&media_type=movie`;
export const API_MOVIE_GENRES_LIST = `${API_TMDB_BASE}genre/movie/list?api_key=${API_KEY}&include_adult=false&language=en-US`;
export const API_MOVIE_FILTER = `${API_TMDB_BASE}discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&release_date.lte=`;
export const API_TV_FILTER = `${API_TMDB_BASE}discover/tv?api_key=${API_KEY}&include_adult=false&include_video=false&release_date.lte=`;


