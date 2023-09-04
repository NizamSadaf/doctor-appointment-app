import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Got a technical issue? Let us know
        </p>
        <form action="" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__labe'>
              Your Email
            </label>
            <input type="text" id='email' placeholder='example@gmail.com' className='form__input mt-1'/>
          </div> 
          <div>
            <label htmlFor="subject" className='form__labe'>
              Subject
            </label>
            <input type="email" id='subject' placeholder='Your Query' className='form__input mt-1'/>
          </div> 
          <div>
            <label htmlFor="message" className='form__labe'>
              Message
            </label>
            <textarea type="text" id='message' placeholder='Leave a comment...' className='form__input mt-1' rows={5}/>
          </div>
          <div className='mt-7'>
            <button type="submit" className='w-full bg-primaryColor text-white py-3 rounded-md font-[600] text-[18px] hover:bg-blue-700'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact