import './App.css'
import { Routes,Route } from 'react-router-dom'

// Pages
import Landing from './Pages/landing'
import Home from './Pages/Home'

// React-Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
