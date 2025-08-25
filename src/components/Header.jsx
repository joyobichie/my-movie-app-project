import SearchBar from './SearchBar'
import { useContext, useState } from 'react'
import {MovieContext} from '../MovieContext'
import 'remixicon/fonts/remixicon.css'
function Header() {
   const {query, setQuery, toggleTheme, theme} =  useContext(MovieContext)
   const [searchTerm, setSearchTerm] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(searchTerm)
  }
  return (
    <div className='container'>
        <h1 className='logo'>Movie App</h1>
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} placeholder="Search movie..." 
            onChange={(e)=> setSearchTerm(e.target.value)} />

            <button type='submit'>Search</button>
        </form>
        <div>
          <button onClick={toggleTheme}>
            {theme ?  <i className="ri-moon-line"></i>: <i className="ri-moon-fill"></i>}
            </button>
        </div>
    </div>
  )
}

export default Header