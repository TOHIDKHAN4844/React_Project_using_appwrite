import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button
      className='px-5 py-2 font-medium text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300'
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
