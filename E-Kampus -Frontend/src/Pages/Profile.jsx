import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Profile = () => {
  const { navigate } = useContext(ShopContext)
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    isLoggedIn: false
  })

  useEffect(() => {
    // Check if user is logged in and get user info
    const token = localStorage.getItem('token')
    const storedUsername = localStorage.getItem('username')
    const storedEmail = localStorage.getItem('email')
    
    if (token && storedUsername) {
      setUserInfo({
        username: storedUsername,
        email: storedEmail || 'Email not available',
        isLoggedIn: true
      })
    } else {
      // Redirect to login if not authenticated
      navigate('/Login')
    }
  }, [navigate])

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    
    // Reset user info state
    setUserInfo({
      username: '',
      email: '',
      isLoggedIn: false
    })
    
    // Navigate to home page
    navigate('/')
  }

  if (!userInfo.isLoggedIn) {
    return (
      <div className='text-center py-20'>
        <p className='text-gray-500'>Loading...</p>
      </div>
    )
  }

  return (
    <div className='border-t pt-16'>
      <Title text1={'MY'} text2={'PROFILE'} />
      
      <div className='flex flex-col items-center max-w-md mx-auto mt-10'>
        {/* Profile Image */}
        <div className='mb-8'>
          <img 
            src={assets.profile_icon} 
            alt="Profile" 
            className='w-24 h-24 rounded-full border-2 border-gray-300 p-2 bg-gray-50'
          />
        </div>

        {/* User Information */}
        <div className='w-full space-y-4'>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <label className='block text-sm font-medium text-gray-600 mb-1'>
              Username
            </label>
            <p className='text-lg font-semibold text-gray-800'>
              {userInfo.username}
            </p>
          </div>

          <div className='bg-gray-50 p-4 rounded-lg'>
            <label className='block text-sm font-medium text-gray-600 mb-1'>
              Email
            </label>
            <p className='text-lg font-semibold text-gray-800'>
              {userInfo.email}
            </p>
          </div>

          <div className='bg-gray-50 p-4 rounded-lg'>
            <label className='block text-sm font-medium text-gray-600 mb-1'>
              Account Status
            </label>
            <p className='text-lg font-semibold text-green-600'>
              Active
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='w-full space-y-3 mt-8'>
          <button 
            onClick={() => navigate('/orders')}
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
            View My Orders
          </button>
          
          <button 
            onClick={() => navigate('/cart')}
            className='w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors'
          >
            View Cart
          </button>
          
          <button 
            onClick={handleLogout}
            className='w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors'
          >
            Logout
          </button>
        </div>

        {/* Additional Info */}
        <div className='mt-8 text-center text-sm text-gray-500'>
          <p>E-Kampus Student Portal</p>
          <p>University of Zimbabwe</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
