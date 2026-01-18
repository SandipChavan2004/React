import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womans from './pages/Womans'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/about/:courseId' element={ <CourseDetails /> }/>
        <Route path='/Contact' element={ <Contact /> }>
          <Route path='Mens' element={ <Mens /> }/>
          <Route path='Womens' element={ <Womans /> }/>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
