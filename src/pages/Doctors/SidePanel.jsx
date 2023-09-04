import React from 'react'

const SidePanel = () => {
  return (
      <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
          <div className='flex items-center justify-between'>
              <p className='text__para mt-0 font-semibold'>Ticket Price</p>
              <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                  500 BDT
              </span>
          </div>
          <div className='mt-[30px]'>
              <p className='text__para mt-0 font-semibold text-headingColor'>
                  Available Time Slots:
              </p>
              <ul className='mt-0'>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Sunday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          4:00 PM - 9:30 PM
                      </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Monday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          5:00 PM - 8:30 PM
                      </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Tuesday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          11:00 AM - 2:30 PM
                      </p>
                  </li>    
              </ul>
          </div>
          <div className='flex items-center justify-center mt-10'>
              <button className='p-4 bg-primaryColor rounded-[10px] text-white text-semibold w-full font-[600]'>Book Appointment</button>
          </div>
    </div>
  )
}

export default SidePanel