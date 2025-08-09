import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './pages/Layout';
import Sobre from './pages/Sobre';
import Home from './pages/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
