import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Nav from './component/Nav'
import Landing from './page/Landing'
import StudentPortal from './page/StudentPortal'
import ReportIssue from './Student/ReportIssue'
import StudentDash from './Student/StudentDash'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Residence from './Student/Residence'
import Partners from './component/Partners'
import Applications from './Student/Applications'
import Issues from './Student/Issues'
import StudProfile from './Student/StudProfile'
import Status from './Student/Status'
import StudentNav from './component/StudentNav'
import Application from './Student/ApplicationForm'

function App() {

  return (
    <>
  
      <BrowserRouter>
      <Routes>
            
      <Route path="/" element={<StudentPortal />} >
      <Route path="/" element={<StudentDash />} />
      <Route path="/profile" element={<StudProfile />} />
      <Route path="/settings" element={<Issues />} />
      <Route path="/settings/res" element={<ReportIssue />} />
      
      <Route path="/status" element={<Status />} />
      <Route path="/application" element={<Applications/>} />
      <Route path="/issues" element={<Issues />} />
      </Route>
    
      <Route path="/fdg" element={<Application/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}


export default App