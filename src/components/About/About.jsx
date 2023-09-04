import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-4'>
              <div className='relative'>
                  <img src={aboutImg} alt="" />
                  <div className='absolute top-[70%] left-[30%]'>
                      <img src={aboutCardImg} className='' alt="" />
                  </div>
              </div>      
              <div className='flex flex-col gap-7 mt-[3rem] md:mt-[0] md:gap-4'>
                  <h2 className='heading'>
                      Proud to be one of the nation best
                  </h2>
                  <p className='text__para'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum alias consequatur laudantium dolorem vel, commodi aperiam harum repellendus corporis libero aliquam accusantium repellat qui earum illo deleniti dolorum mollitia illum nobis nihil sapiente. Quas eligendi dolor placeat fuga impedit corrupti quaerat totam temporibus provident odit commodi nesciunt, a modi.
                  </p>
                  <p className='text__para'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cum repudiandae iste beatae sequi voluptatum error minus debitis, eum doloremque numquam rem ducimus, aperiam impedit quidem perspiciatis hic deleniti mollitia.
                  </p>
                  <Link className='btn w-[10rem] mx-auto md:mx-0'>
                      Learn More
                  </Link>
              </div>      
        </div>      
    </div>
  )
}

export default About