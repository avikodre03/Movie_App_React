
export const getMoviesLIst = async (setMoviesFromApi, category) => {
  console.log("category", category);
  fetch(
    `https://api.themoviedb.org/3/movie/${category ? category : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  ).then((res) => {
    return res.json()
  }).then((data) => {

    setMoviesFromApi(data.results)
  });


};
export const getMovieListByID = (id, setMoviesFromApi) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesFromApi(data);
    });
};
export const getMovieListByIDCast = (id, setMoviesCastFromApi) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5eafbd3ac98d48f8172fb4929b67f1a1`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesCastFromApi(data);
    });
};

export const searchMovies = (e, state, setstate, context) => {
  const arr = [
    ...context.popularMoviesFromApi,
    ...context.topRatedMoviesFromApi,
    ...context.upcomingMoviesFromApi
  ];
  const filteredarr = arr.filter((ele) => {
    if ((ele.original_title.toUpperCase()).includes(e.target.value.toUpperCase())) {
      return ele
    }
    return null
  })
  setstate(filteredarr)
}