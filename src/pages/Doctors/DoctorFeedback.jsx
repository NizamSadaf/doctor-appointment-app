import React, { useState } from 'react'
import avatarIcon from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate.js'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from '../../components/Feedback/FeedbackForm'
const DoctorFeedback = () => {
  const [showFeedbackForm,setShowFeedbackForm]=useState(false)
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All Reviews (272)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatarIcon} alt="" />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Nizam
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formateDate("09-02-2023")}
              </p>
              <p className='text__para mt-3 font-medium text-[15px]'>
                Good Service
              </p>
            </div>
          </div>
          <div className='flex gap-1'>
            {
              [...Array(5).keys()].map(() =>
                <AiFillStar  color='#0067FF'/>
              )
            }
          </div>
        </div>
      </div>
      {!showFeedbackForm && 
        <div className='text-center' onClick={() => setShowFeedbackForm(true)}>
          <button className='btn'>Give Feedback</button>
      </div>
      }
      {
        showFeedbackForm && <FeedbackForm/>
      }
    </div>
  )
}

export default DoctorFeedback