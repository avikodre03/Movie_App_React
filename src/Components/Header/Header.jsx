import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import { BiSearch } from 'react-icons/bi';
import { searchMovies } from '../../Functions/getMoviesList';
import { useContext } from 'react';
import { globalData } from '../../App';
import logo from '../../Assets/hollywood.png'
const Header = () => {
  const context = useContext(globalData)
  console.log("con from header", context.setstate);

  return (
    <>
      <div className="header">

        <div className="headerLeft">
        <div className="logo">
  <img src={logo} alt="hollywood" />
</div>
          <Link to="/" className='headerIcon'>
            Movie app
          </Link>
          <div className="navBar">

            <Link to="/movies/Populer">Populer</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
          </div>
          <div className="searchDiv">

            <input onChange={(e) => {
              searchMovies(e, context.state, context.setstate, context)
              // { console.log("state", context.state); }
            }} type="search" placeholder='Search Here' />
            <BiSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header