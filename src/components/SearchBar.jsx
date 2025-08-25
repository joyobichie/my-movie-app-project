import {useContext} from 'react'
import { MovieContext } from '../MovieContext';

function SearchBar() {
  const{query, setQuery}= useContext(MovieContext)
  // const[query, setQuery] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(query);
    onSearch
    
  }
  return (
    <div>
        <form action="" className='search-bar' onSubmit={handleSubmit}>
            <input type="text" value={query} placeholder='Search movie...' onChange={(e)=> setQuery(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar