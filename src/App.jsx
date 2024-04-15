import React from 'react'
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
export const MyContext = createContext({});

function App() {
  const { contextValue, updateContextValue } = useContext(MyContext);
  const storedContextData = localStorage.getItem('contextData');
  const initialContextData = storedContextData ? decryptData(storedContextData) : {};
  const userRole = initialContextData.role;

  return (
    <ResidenceApplication />
  )
}

export default App