import React, { useEffect } from 'react'
import { useAuth } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {LogOutUser}=useAuth()
    const navigate= useNavigate()
  return (
    useEffect(() => {
        LogOutUser()
        navigate("/login")
    }, [LogOutUser])
  )
}

export default Logout