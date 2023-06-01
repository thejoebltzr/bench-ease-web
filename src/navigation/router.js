import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Skills from '../pages/Skills/Skills'
import Settings from '../pages/Settings/Settings'
import UserProfile from '../pages/UserProfile/UserProfile'
import Wizard from '../pages/Wizard/Wizard'
import Login from '../pages/Login/Login'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/skills', element: <Skills /> },
  { path: '/settings', element: <Settings /> },
  { path: '/user-profile', element: <UserProfile /> },
  { path: '/wizard', element: <Wizard /> }
])

export default router
