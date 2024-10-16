import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Incidents from './components/Incidents'
import Activities from './components/activities'
import Location from './components/Location'
import Documents from './components/Documents'
import Cyper from './components/cyper'

function App() {


  return (
   
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/incidients" element={ <Incidents/> } />
        <Route path="/location" element={ <Location/> } />
        <Route path="/activities" element={ <Activities/> } />
        <Route path="/documents" element={ <Documents/> } />
        <Route path="/cyper" element={ <Cyper/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
