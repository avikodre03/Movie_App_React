import React from 'react'
import "./moviesCard.css"
import { AiFillStar } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const MoviesCard = ({ allMovies }) => {
  // console.log("moviesCard", allMovies)
  return <div className='mainCardContainer'>

    {typeof allMovies != "object" || allMovies.length !== 0 ? (
      <>
        {allMovies.map((ele,idx) => {
          return (
            <>
              <Link to={`/movie/${ele.id}`} key={idx}>

                <>
                  <div className="card">
                    <img className='cardImg'
                      src={`https://image.tmdb.org/t/p/original/${ele && ele.poster_path}`} alt=""
                    />
                    <div className="cardOverlay">
                      <div className="cardTitel">
                        {ele && ele.original_title}
                      </div>
                      <div className="posterImage_release_date_rating">
                        <BiCalendar /> {ele && ele.release_date}
                        <span>
                          <AiFillStar />
                          {ele && ele.vote_average}/10
                        </span>
                      </div>

                    </div>
                  </div>
                </>
              </Link>

            </>
          )
        })}
      </>
    ) : null}

  </div>

}

export default MoviesCard