import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Incidents from './components/Incidents'
import Activities from './components/Activities'
import Location from './components/Location'
import Documents from './components/Documents'
import Cyper from './components/Cyper'
import GetStarted from './components/GetStarted'
import Describe from './components/Describe'
import Incidenttitle from './components/Incidenttitle'

function App() {


  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/incidients" element={ <Incidents/> } />
        <Route path="/location" element={ <Location/> } />
        <Route path="/activities" element={ <Activities/> } />
        <Route path="/documents" element={ <Documents/> } />
        <Route path="/cyper" element={ <Cyper/> } />
        <Route path='/getstarted' element={ <GetStarted/> } />
        <Route path='/describeincidents' element={ <Describe/> } />
        <Route path='/incidenttitle' element={ <Incidenttitle/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
