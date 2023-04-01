import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { globalData } from '../../App';
import { Link } from 'react-router-dom'
import './home.css'
import { AiFillStar } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import MovieList from '../../Components/movieList/MovieList';
const Home = () => {

    const context = useContext(globalData)
    // console.log("contextc", context);

    const [allMovies, setAllMovies] = useState(context)
    useEffect(() => {

        setAllMovies([
            ...context.popularMoviesFromApi,
            ...context.topRatedMoviesFromApi,
            ...context.upcomingMoviesFromApi,]);
    }, [context])

    return (
        <>
            {console.log("allMovies home", allMovies)}
            <div className='home'>
                <div className="poster">
                    {/* {console.log("hee", context.popularMoviesFromApi)} */}
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        transitionTime={3}
                        showStatus={false}
                    >
                        {
                            context.popularMoviesFromApi.map((ele,idx) => {
                                return (
                                    <>

                                        <Link to={`/movie/${ele.id}`}>

                                            <div className="posterImage" key={idx}>
                                                <img src={`https://image.tmdb.org/t/p/original/${ele && ele.backdrop_path}`} alt="" />
                                            </div>
                                            <div className="posterImage_overlay">
                                                <div className="posterImage_title">{ele && ele.original_title}</div>
                                                <div className="posterImage_release_date_rating">
                                                    <BiCalendar />{ele && ele.release_date}
                                                    <span>
                                                        <AiFillStar />
                                                        {ele && ele.vote_average}/10
                                                    </span>
                                                </div>
                                                <div className="posterImageDescription">
                                                    {ele && ele.overview
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                    <MovieList />

                </div>
            </div>
        </>
    )
}

export default Home