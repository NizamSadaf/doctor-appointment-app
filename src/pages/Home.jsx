import React from 'react'
import { Link } from 'react-router-dom'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import fagImg from '../assets/images/faq-img.png'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorsList from './Doctors/DoctorsList'
import Faq from '../components/Faq/Faq'
import Testimonial from '../components/Testimonial/Testimonial'
import {doctors} from '../assets/data/doctors'
const Home = () => {
  return (
    <>
      {/* =========hero section========== */}
      <section className='hero__section container pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            
          <div>
            <div className='lg:w-[570px] flex flex-col'>
              <h1 className='text-[36px] leadiing-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                We help paitents live a healthy, longer life
              </h1>
              <p className='text__para'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ut dolorum molestias necessitatibus possimus placeat expedita beatae numquam, libero repellendus provident ratione voluptatibus quibusdam cupiditate rerum, aperiam nulla fugiat incidunt debitis vel corporis voluptatum dicta quidem! Perferendis quibusdam voluptatem cupiditate a in minus, dolorum earum? Reiciendis doloremque temporibus obcaecati odit.
              </p>
              <button className='btn mx-auto md:mx-0 md:w-[20rem]'>Request an Appointment</button>
              </div>
              {/* =========hero counter=========== */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div> 
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Locations</p>
                </div> 
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Paitent Satisfaction</p>
                </div> 
              </div>
          </div>
            
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt="" className='w-full' />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[50px]' />
                <img src={heroImg03} alt="" className='w-full' />
              </div>
            </div>
        </div>
      </div>
      </section>
      {/* ==========hero section end========= */}
      
      {/* ==========how it works section========= */}

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'> 
            <h2 className="heading text-center">
              Providing the medical services
            </h2>
            <p className='text__para text-center'>
              World class care for evryone. Our health System offers unmatched,edxpert health care
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link to={'/docotrs'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center  hover:bg-[#01B5C5] hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Location</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link to={'/docotrs'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center  hover:bg-[#9771FF] hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link to={'/docotrs'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center  hover:bg-[#FEB60D] hover:border-none'>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </div> 
        </div>
      </section>
      {/* ==========how it works section end========= */}
      
      {/* ==========about section start========= */}
      <section>
        <About/>
      </section>
      {/* ==========about section end========= */}

      {/* ==========service section start========= */}

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our Medical Services
            </h2>
            <p className='text__para text-center'>
              World-class care for evryone. Our health System offers unmatched, expert health care
            </p>
          </div>
          <ServiceList/>
        </div>
      </section>

      {/* ==========service section end========= */}
      {/* ==========Feature section Start======== */}
      <section>
        <div className="container">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[5rem]'>
            <div className=''>
              <h2 className='heading'>Get virtual treatment anytime</h2>
              <ul className='flex flex-col gap-3 mt-3'>
                <li className='text-textColor'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, ipsa.</li>
                <li className='text-textColor'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, ipsa.</li>
                <li className='text-textColor'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, ipsa.</li>
                <li className='text-textColor'>4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, ipsa.</li>
              </ul>
              <div className='btn w-[10rem] mx-auto lg:mx-0'>
                <Link>Learn More</Link>
              </div>
            </div>
            <div className='flex items-center justify-center relative'>
              <img src={featureImg} alt="" />
              <div className='absolute h-[10rem] md:h-[13rem] sm:h-[13rem] w-[18rem] bg-white top-[80%] md:top-[60%] lg:top-[60%] right-[0] md:left-[-5%] lg:left-[-5%] rounded-[10px] flex flex-col px-0'>
                <div className='mt-5 flex gap-[6rem]'>
                  <p className='text-textColor'><span className='font-bold font-[700]'>Tue,24</span> 10:00AM</p>
                  <img src={videoIcon} className='p-[5px] md:p-1 lg:p-1 bg-yellowColor' alt="" />
                </div>
                <div className='flex items-center justify-center w-[10rem] rounded-full p-2  bg-teal-500 text-white mt-5'>
                  Counsultation
                </div>
                <div className='flex gap-2 mt-5'>
                  <img src={avatarIcon} alt="" />
                  <p>Make Collins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Feature section end======== */}

      {/* ==========doctor section start======== */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto mt-[2rem] lg:mt-0'>
            <h2 className='heading text-center'>
              Our Great Docotrs
            </h2>
            <p className='text__para text-center'>
              World-class care for evryone. Our health System offers unmatched, expert health care
            </p>
          </div>
          <DoctorsList doctors={doctors} />
        </div>
      </section>
      {/* ==========Feature section end======== */}

      {/* ==========Faq section start======== */}
      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={fagImg} alt=""/>
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most questions by our beloved paitents</h2>
              <Faq/>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Faq section end======== */}

      {/* ==========testimonial section start======== */}
      <section>
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our Medical Services
            </h2>
            <p className='text__para text-center'>
              World-class care for evryone. Our health System offers unmatched, expert health care
            </p>
        </div>
        <Testimonial/>
      </section>
      {/* ==========testimonial section end======== */}
    </>
  )
}

export default Home