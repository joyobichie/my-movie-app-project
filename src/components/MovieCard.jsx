import React from 'react'
import { POSTER, unavailable } from '../utils/api'
import {Link} from 'react-router-dom'

function MovieCard({movieContent}) {
    const posterUrl = movieContent.poster_path ? `${POSTER}${movieContent.poster_path}`: {unavailable}
  return (
    <div className='movie-card'>
       <Link to = {`/movie/${movieContent.id}`}>
          <img src= {posterUrl}  className='movie-poster' alt="" />
          { <span className='rating'>{movieContent.vote_average.toFixed(1)}</span> }
       </Link>
    </div>
  )
}

export default MovieCard