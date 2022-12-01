import React from 'react'
import MovieList from '../components/MovieList'


const MoviesPage = ({ data}) => {
  return (      
      <MovieList data={data} />
  )
}

export default MoviesPage