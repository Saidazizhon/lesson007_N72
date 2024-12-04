import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Hero from './pages/Hero'
import { useEffect } from 'react'
import Detail from './pages/Detail'
import Discover from './pages/Discover'

function App() {
  useEffect(()=>{
    const value = localStorage.getItem("theme")
    if(value){
      document.body.classList.add(value)
    }
  }, [])

  const darkMode = ()=>{
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
      localStorage.setItem("theme", "dark")
    }else{
      localStorage.setItem("theme", "")
    }
  }
  
  return (
    <div className='dark:bg-slate-950 dark:text-white duration-300'>
      <button onClick={darkMode}>Dark more</button>
      <br />
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/hero"}>Hero</Link>
      <Link to={"/discover"}>Discover</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/movie/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
