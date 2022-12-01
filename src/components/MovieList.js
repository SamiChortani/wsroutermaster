import React from 'react'
import MovieCard from './MovieCard'
import {useSelector} from "react-redux"

const MovieList = () => {
  const movies = useSelector((state)=>state.movies)
  return (
    <div className="container">
      <div className="wrapper">
        {movies.map(el => <MovieCard el={el} key={el._id} />)}
      </div>
    </div>
  )
}

export default MovieList