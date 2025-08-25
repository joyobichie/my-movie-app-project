import axios from 'axios';

export const API_KEY = '778dcf02894f40ff2a5de48a0a87f49e'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const POSTER = 'https://image.tmdb.org/t/p/w500'
export const unavailable = 'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg'

export const fetchMovieDetail = async (id) =>{
//    const response =  await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)

try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`,{
        params:{
            api_key:API_KEY,
            // append Videos, similar and credits 
            append_to_response:'videos,similar'
        },
    })
return response.data
} catch (error) {
    console.log('error fetching data',error);
    throw error
}
}

// export const fetchMovies = async (query='') =>{
//     const endpoint = query ? `/search/movie?query=${query}`: '/movie/popular' 

//     try{ 
//         // https://api.themoviedb.org/3/movie/popular?api_key=778dcf02894f40ff2a5de48a0a87f49e

//         // await axios.get(`${BASE_URL}${endpoint}`,{params:{api_key:API_KEY}})

//        const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
//     //    console.log(response.data.results);
//        return response.data.results

//     } catch(error){
//         console.log('error fetching data',error);
//         throw error
        
//     }
// }

