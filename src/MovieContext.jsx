import {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import {API_KEY, BASE_URL, POSTER, unavailable} from './utils/api'

export const MovieContext = createContext()

export const MovieProvider =({children}) =>{
    const [query, setQuery] = useState('')
    const [theme, setTheme] = useState(false)
    const [movies, setMovies] = useState([])

    const toggleTheme =()=>{
        setTheme(!theme)
    }

    const fetchMovies = async (query) =>{
    const endpoint = query ? `/search/movie?query=${query}`: '/movie/popular' 

    try{ 
        // https://api.themoviedb.org/3/movie/popular?api_key=778dcf02894f40ff2a5de48a0a87f49e

        // await axios.get(`${BASE_URL}${endpoint}`,{params:{api_key:API_KEY}})
// await axios.get(`${BASE_URL}${endpoint}`,{params:{api_key:API_KEY, query: query || undefined,}})
    //    const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
    const response = await axios.get(`${BASE_URL}${endpoint}`,{params:{api_key:API_KEY, query: query,}})
    //    console.log(response.data.results);
       setMovies(response.data.results || [])

    } catch(error){
        console.log('error fetching data',error);
        throw error
        setMovies([])
    }
}

useEffect(() => {
    fetchMovies(query)
},[query])
    return <MovieContext.Provider value={{query, setQuery, theme, movies, fetchMovies, toggleTheme}}>
        {children}
    </MovieContext.Provider>
}