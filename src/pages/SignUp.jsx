import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.png'
const SignUp = () => {
 const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password:'',
    photo:'',
    role:'patient',
    gender:'',
  })
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleFileInputChange = (e) => {
    const file = e.target.files
    console.log(file)
  }
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <section className='px-5 xl:px-0 '>
      <div className="container">
        <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg}  alt="" className='w-full rounded-l-lg'/>
            </figure>
          </div>
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bol;d mb-10'>
              Create an <span className='text-primaryColor'>account</span>
            </h3>
            <form action="" onSubmit={submitHandler}>
              <div className='mb-5'>
                <input type="text" placeholder='Fullname' name='fullname' value={formData.fullname} onChange={handleInputChange} className='w-full px-3 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required/>
              </div>
              <div className='mb-5'>
                <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full px-3 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required/>
              </div>
              <div className='mb-5'>
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full px-3 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required/>
              </div>
              <div className='mb-5 flex items-center justify-between'>
                 <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select name="role" className='text-textColor font-semibold text-[15px] leading-6 px-4 py-4 focus:outline-none' id="">
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                  </select>
                </label>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select name="gender" className='text-textColor font-semibold text-[15px] leading-6 px-4 py-4 focus:outline-none' id="">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={avatar} alt="" className='w-full rounded-full' />
                </figure>
                <div className='relative w-[130px] h-[50px]'>
                    <input type="file"
                      name="photo"
                      id='customFile'
                      accept='.jpg, .png'
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                      onClick={handleFileInputChange}
                    />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.975rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className='mt-7'>
                <button type="submit" className='w-full bg-primaryColor text-white py-3 rounded-md font-[600] text-[18px] hover:bg-blue-700'>Sign Up</button>
              </div>
              <div className='mt-8'>
                <p className='text-center text-[18px] hover:text-blue-700'><Link to='/login'>Have an account? </Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div> 
   </section>
  )
}

export default SignUp