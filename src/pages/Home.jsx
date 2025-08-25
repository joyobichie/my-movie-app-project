import {useState, useEffect} from 'react'
import {useContext} from 'react'
import Header from '../components/Header'
// import { fetchMovies } from '../utils/api'
import MovieCard from '../components/MovieCard'
import { MovieContext } from '../MovieContext'

function Home() {
   //  const [movies, setMovies] = useState([])
   const {movies} = useContext(MovieContext)

  return (
    <div>
        <Header />
       <div className='movie-list'>
            {movies && movies.length > 0 ? movies.map((movie) => {
            return <MovieCard key={movie.id} movieContent={movie} />
            }) : (<p>No movie</p>)}
       </div>
        
    </div>
  )
}

export default Home