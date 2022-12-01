import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import {useDispatch} from "react-redux"
import { deleteMovie } from '../Actions/actions'

const MovieCard = ({ el }) => {

  const dispatch=useDispatch()
  return (
    
      <>
    <Link to={`/movies/${el._id}`}>
      <div className="card">
        <img src={el.ImageURL} alt="" />
        <div className="descriptions">
          <h1>{el.Title}</h1>
          <p>{el.Description} </p>
          <h4 style={{ color: 'green' }}>{el.Genre.Name}</h4>

          <StarRatings
            rating={el.Rating}
            // changeRating={}
            starRatedColor="yellow"
            numberOfStars={5}
            name='rating'
            starDimension='30px'
          />
        </div>

        


      </div>
      
      
      </Link>

      <button onClick={()=> dispatch(deleteMovie(el._id))} >Delete</button>
      </>
      
      
      
      
      

  )
}

export default MovieCard