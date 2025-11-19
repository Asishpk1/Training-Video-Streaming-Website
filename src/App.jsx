import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import StreamingPage from './Pages/StreamingPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Trending from './Pages/Trending'

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stream' element={<StreamingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
