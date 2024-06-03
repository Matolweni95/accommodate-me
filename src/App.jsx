import React from 'react'
import { Router,Route, Routes, BrowserRouter} from 'react-router-dom'
import CompanyDashboard from './component/CompanyDashboard'
import ApplicationList from './component/ApplicationList'
import ApplicationView from './component/ApplicationView'
import RoomCheck from './component/RoomCheck'
import RoomAddition from './component/RoomAddition'
import Landing from './page/Landing'
import SearchPortal from './component/SearchPortal'
import ResidenceView from './component/ResidenceView'
import Accommodation from './component/Accommodation'
import TenantList from './component/TenantList'
import UserProfile from './component/UserProfile'
import CompanyProfile from './component/CompanyProfile'
import AdminIssueView from './component/AdminIssueView'
import Login from './component/Login';
import { createContext, useContext  } from 'react'
import ResidenceApplication from './component/Residenceapplication'
import AdminAnnouncements from './component/AdminAnnouncements'
export const MyContext = createContext({});

function App() {
  const { contextValue, updateContextValue } = useContext(MyContext);
  const storedContextData = localStorage.getItem('contextData');
  const initialContextData = storedContextData ? decryptData(storedContextData) : {};
  const userRole = initialContextData.role;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<CompanyDashboard />} />
        <Route path="/applications" element={<ApplicationList />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/rooms" element={<RoomCheck />} />
        <Route path="/search" element={<SearchPortal />} />
        <Route path="/tenant" element={<TenantList />} />
        <Route path="/view" element={<ApplicationView />} />
        <Route path="/issues" element={<AdminIssueView />} />
        <Route path="/application" element={<ResidenceApplication />} />
        <Route path="/announcements" element={<AdminAnnouncements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App