import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PixelartHeader from './components/PixelartHeader'
import SkillList from './components/SkillList'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Overview from './components/Overview'
import Experience from './components/Experience'

function App() {

  return (
    <BrowserRouter>
      <div className='h-[100vh] overflow-y-auto overflow-x-hidden perspective-1 z-0 scroll-smooth'>
        {/* {import.meta.env.PROD && 
          <div className='absolute flex h-lvh w-lvw text-[50vh] justify-center items-center text-white text-opacity-30' inert='true'>
            WIP
          </div>
        } */}
        <PixelartHeader />
        <div className='sticky top-0 z-20'>
          <Navbar/>
          <img className='w-full disable-anti-aliasing min-w-[576px]' src='src/assets/pixelart/header-bottom.png' inert='true' />
        </div>
          <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/skills' element={<SkillList/>}/>
            <Route path='/experience' element={<Experience/>}/>
          </Routes>
        <img className='w-full disable-anti-aliasing min-w-[576px] -scale-y-100' src='src/assets/pixelart/header-bottom.png' inert='true' />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
