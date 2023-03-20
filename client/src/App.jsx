import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Home, CreatePost } from './pages'

const App = () => {

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#E6EBF4]">
        <Home />
        <CreatePost />
      </header>
    </BrowserRouter>
  )
}

export default App
