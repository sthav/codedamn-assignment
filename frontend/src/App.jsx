import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile';
import Socials from "./pages/socials/Socials";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />}></Route>
        <Route path='/socials' element={<Socials />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App