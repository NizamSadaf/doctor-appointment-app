import React from 'react'
import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'
const Faq = () => {
  return (
    <div className='mt-[35px]'>
      {
        faqs.map((item, index) => <FaqItem item={ item } />)
      }
    </div>
  )
}

export default Faq