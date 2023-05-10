import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate()
    const isAuthenticated = !!localStorage.getItem('token')

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login')
      }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
      navigate('/login')
      return null
    }

    return <Component {...props} />
  }

  // Enforce displayName rule
  const componentName = Component.displayName || Component.name
  AuthenticatedComponent.displayName = `withAuth(${componentName})`

  return AuthenticatedComponent
}

export default withAuth
