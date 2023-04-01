import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieListByID, getMovieListByIDCast } from '../../Functions/getMoviesList'
import './movieDetails.css'

const MovieDetails = () => {
  const { id } = useParams()
  const [Movies, setMoviesFromApi] = useState(null)
  const [MoviesCast, setMoviesCastFromApi] = useState(null)

  useEffect(() => {
    getMovieListByID(id, setMoviesFromApi)
    getMovieListByIDCast(id, setMoviesCastFromApi)
  }, [id])

  return (
    <>
      <div className='movieDetails'>
        <div className="movie">
          <div className="overLay"></div>
          <img src={`https://image.tmdb.org/t/p/original/${Movies && Movies.backdrop_path}`} alt="" />
        </div>
        <div className="movieMoreDetails">
          <div className="movieMoreDetailsLeft">
            <img src={`https://image.tmdb.org/t/p/original/${Movies && Movies.poster_path}`} alt="" className="moviePoster" />
          </div>
          <div className="movieMoreDetailsRight">
            <div className="movieName">
              {Movies && Movies.original_title}
            </div>
            <div className="movieTagLine">{Movies && Movies.tagline}</div>
            <div className="rating">
              <p>{Movies && (Movies.vote_average * 10).toFixed(1)} %</p>

              <span className="voteCount">{Movies && Movies.vote_count} votes</span>
            </div>
            <div className="runtime">
              {Movies && Movies.runtime} mins
            </div>
            <div className="releaseDate">
              release date : {Movies && Movies.release_date}
            </div>
            <div className="genres">
              {Movies && Movies.genres.map((ele) => {
                return <>
                  <span>{ele.name}</span>
                </>
              })}
            </div>
          </div>
        </div>
        {console.log("Movies", Movies)}
        {console.log("MoviesCast", MoviesCast)}
      </div>

      <div className="castcontanier">
        <div className="plot">
          <h1>Plot</h1>
          <hr />
          <p>{Movies && Movies.overview}</p>
        </div>
        <div id="cast" className="cast">
          <h1>Cast</h1>
          <hr />
          {MoviesCast && MoviesCast.cast.map((ele, idx) => {
            return (
              idx < 5 ? (<div class="castdetails">
                <img src={`https://image.tmdb.org/t/p/w45${ele.profile_path}`} alt={ele.name} />
                <p>{ele.name}</p></div>) : (<>
                </>)


            )
          })
          }
          <button className='castbtn'>See more...</button>
        </div>
      </div>
    </>

  )
}

export default MovieDetails