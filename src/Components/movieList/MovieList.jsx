
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { globalData } from '../../App'
import MoviesCard from '../moviesCard/MoviesCard'
import './movieList.css'

const MovieList = () => {

  const context = useContext(globalData)
  const { category } = useParams()
  // console.log("contex from movie list", context);

  return (
    <>

      <div className='movieList'>
        <h2>{(category && category)}</h2>
        <div className="movie_list">



          <MoviesCard allMovies={
            category === "popular"
              ? context.popularMoviesFromApi
              : category === "top_rated"
                ? context.topRatedMoviesFromApi
                : category === "upcoming"
                  ? context.upcomingMoviesFromApi
                  : context.state.length !== 0 ? [...context.state] : [...context.popularMoviesFromApi,
                  ...context.topRatedMoviesFromApi,
                  ...context.upcomingMoviesFromApi]
          } />
        </div>
      </div>
    </>
  )
}

export default MovieList