import React from 'react'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App