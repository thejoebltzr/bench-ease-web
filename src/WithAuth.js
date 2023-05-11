import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [isUserNew, setIsUserNew] = useState(false)
    const isAuthenticated = !!localStorage.getItem('token')

    useEffect(() => {
      const getUser = async () => {
        try {
          const token = localStorage.getItem('token')
          const decodedToken = jwt_decode(token)
          console.log('DecodedToken: ', decodedToken)
          const userId = decodedToken.sub
          const endpoint = `https://brm.kierquebral.com/api/v1/users/${userId}`

          const response = await axios.get(endpoint, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          setUser(response.data && response.data.result)
          setIsUserNew(response.data && response.data.result && Boolean(response.data.result.attributes.is_new))
          setLoading(false)

          if (isUserNew) {
            // Navigate to the specified path if the user has the attribute
            navigate('/wizard')
          }
        } catch (error) {
          // Handle error or redirect to login if the API call fails
          console.error(error)
          setLoading(false)
        }
      }

      if (!isAuthenticated) {
        navigate('/login')
        setLoading(false)
      } else {
        getUser()
      }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
      navigate('/login')
      return null
    }

    if (loading) {
      // Optional: Show loading spinner or placeholder
      return <div>Loading...</div>
    }

    return <Component {...props} user={user} />
  }

  // Enforce displayName rule
  const componentName = Component.displayName || Component.name
  AuthenticatedComponent.displayName = `withAuth(${componentName})`

  return AuthenticatedComponent
}

export default withAuth
