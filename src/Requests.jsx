const key = 'a7f0ae9c9fe6317c620edef8bcd082cf';

const requests = {
  requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1`,
  requestsTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}language=en-US&page=1`,
  requestsTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=2`,
  requestsHorror: `https://api.themoviedb.org/3/search/movieapi_key=${key}query=horror&include_adult=false&language=en-US&page=1`,
  requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key${key}language=en-US&page=1`,
};


export default requests