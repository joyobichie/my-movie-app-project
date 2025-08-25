import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'
import { useContext, useState } from 'react'
import {MovieContext} from './MovieContext'

function App() {
  const {theme, toggleTheme} = useContext(MovieContext)
  return (
   <div className={theme ? 'dark': 'light'}>
       <Router>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/movie/:id' element={< MovieDetail />} />
        </Routes>

    </Router>
   </div>
  )
}

export default App