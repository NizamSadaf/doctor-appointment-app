import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillYoutube, AiOutlineGithub,AiOutlineInstagram} from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import logo from '../../assets/images/logo.png'
const Footer = () => {
  const socialLinks = [
    {
      path: "#",
      icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
    },
    {
      path: "#",
      icon:<AiOutlineGithub className='group-hover:text-white w-4 h-5'/>
    },
    {
      path: "#",
      icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
    },
    {
      path: "#",
      icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
    },
  ]
  const quickLinks01 = [
    {
      path: '/',
      display:'Home'
    },
    {
      path: '/doctors',
      display:'Doctors'
    },
    {
      path: '/contact',
      display:'Contact'
    },
    {
      path: '/service',
      display:'Service'
    },
  ]
  const quickLinks02 = [
    {
      path: '#',
      display:'Find a location'
    },
    {
      path: '/doctors',
      display:'Find a Doctor'
    },
    {
      path: '#',
      display:'Request an appointment'
    },
    {
      path: '#',
      display:'Get an opinion'
    },
  ]
  const quickLinks03 = [
    {
      path: '#',
      display:'Donate'
    },
    {
      path: '#',
      display:'Contact Us'
    },
  ]
  const year= new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0'>
          <div className='flex flex-col items-center md:items-start gap-4 '>
            <div>
              <img src={logo} alt="" />
            </div>
            <p>Copyright @ { year } by Nizam</p>
            <div className='flex items-center gap-[20px]'>
              {
                socialLinks.map((social, index) =>
                  <Link to={social.path} key={index} className='p-[12px] md:p-[15px] border rounded-full  hover:bg-primaryColor'>{ social.icon }</Link>)
              }
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-4' >
            <h7 className='text-headingColor  font-[700] '>
              Quick Links
            </h7>
            <ul>
              {
                quickLinks01.map((link, index) =>
                <li className='mb-[5px]'>
                    <Link to={link.path} className='text-textColor'>
                      {link.display}
                    </Link>
                </li>
                )
              }
            </ul>
            </div>
            <div className='flex flex-col gap-4' >
            <h7 className='text-headingColor font-semibold font-[700] '>
              I want to:
            </h7>
            <ul>
              {
                quickLinks02.map((link, index) =>
                <li className='mb-[5px]'>
                    <Link to={link.path} className='text-textColor'>
                      {link.display}
                    </Link>
                </li>
                )
              }
            </ul>
            </div>
            <div className='flex flex-col gap-4' >
            <h7 className='text-headingColor font-semibold font-[700] '>
              Support
            </h7>
            <ul>
              {
                quickLinks03.map((link, index) =>
                <li className='mb-[5px]'>
                    <Link to={link.path} className='text-textColor'>
                      {link.display}
                    </Link>
                </li>
                )
              }
            </ul>
            </div>
          </div>
          
      </div>
      </div>
      
    </footer>
  )
}

export default Footer
