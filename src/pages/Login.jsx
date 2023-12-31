import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const lOGIN = () => {
  const [formData, setFormData] = useState({
    email: '',
    password:''
  })
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello! <span className='text-primaryColor'>Welcome</span> Back</h3>
        <form action="" className='py-4 md:py-0'>
        <div className='mb-5'>
          <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full px-3 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required/>
        </div>
        <div className='mb-5'>
          <input type="password" placeholder='Enter Your Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full px-3 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required/>
          </div>
          <div className='mt-7'>
            <button type="submit" className='w-full bg-primaryColor text-white py-3 rounded-md font-[600] text-[18px] hover:bg-blue-700'>Login</button>
          </div>
        </form>
        <div className='mt-8'>
          <p className='text-center text-[18px] hover:text-blue-700'><Link to='/register'>Don't have an account? </Link></p>
        </div>
      </div>
      
    </section>
  )
}

export default lOGIN