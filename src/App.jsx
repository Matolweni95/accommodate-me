import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'

import StudentPortal from './page/StudentPortal'
import ReportIssue from './Student/ReportIssue'
import StudentDash from './Student/StudentDash'
import Announcement from './Student/Announcement'
import News from './Student/Paragraph'
import Issues from './Student/Issues'
import StudProfile from './Student/StudProfile'
import Status from './Student/Status'
import StudentNav from './component/StudentNav'
import Application from './Student/ApplicationForm'
import Landing from './page/Landing'

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
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/status" element={<Status />} />
    
      <Route path="/issues" element={<Issues />} />
      <Route path="/issues/report" element={<ReportIssue />} />
      </Route>
      <Route path="/land" element={<Landing/>} />
      <Route path="/apply" element={<Application/>} />
      <Route path="/ap" element={<News/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}


export default App