import {useState, useEffect} from 'react'
import { fetchMovieDetail, POSTER, unavailable } from '../utils/api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()

    const loadMovie = async () => {
        const data = await fetchMovieDetail(id)
        // console.log(data);
        setMovie(data)
    }

    useEffect(() => {
        loadMovie() 
    }, [id])

    if(!movie) return <h1>loading...</h1>

    const trailerKey = movie.videos?.results.find((video)=> video.type === 'Trailer')?.key;

  return (
    <div className=''>
        <button className='btn' onClick={() => navigate(-1)}>back</button>
        <div className='movie-detail'>
            <div className='movie-detail-poster'>
                <img src={movie.poster_path ? `${POSTER}${movie.poster_path}` : unavailable} alt="" />

                
            </div>
            <div className='movie-info'>
                <h1 className='movie-title'>{movie.title}</h1>
                <p className='movie-overview'>{movie.overview}</p>
                <div className='trailer'>{trailerKey && (
                    <iframe src={`https://youtube.com/embed/${trailerKey}`} frameborder="0"></iframe>
                )}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail