import './App.css'
import { Routes,Route } from 'react-router-dom'

// Pages
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home'

// React-Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
