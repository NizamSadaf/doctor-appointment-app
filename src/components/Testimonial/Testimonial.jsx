import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
import { register } from 'swiper/element/bundle';
register();
const Testimonial = () => {
    return (
        <>
        <div className='mt-[30px] lg:mt-[55px]'>
          <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                  640: {
                      slidesPerView: 1,
                      spaceBetween:0
              },
                  768: {
                      slidesPerView: 2,
                      spaceBetween:20
              },
                  1024: {
                      slidesPerView: 3,
                      spaceBetween:30
              },
          }}>
              <SwiperSlide>
                  <div className='py-[30px] px-5 rounded-3'>
                      <div className='flex items-center gap-[13px]'>
                          <img src={patientAvatar} alt="" />
                          <div>
                              <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                  Nizam
                              </h4>
                              <div className='flex items-center gap-[2px]'>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                              </div>
                          </div>
                      </div>
                      <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                      </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='py-[30px] px-5 rounded-3'>
                      <div className='flex items-center gap-[13px]'>
                          <img src={patientAvatar} alt="" />
                          <div>
                              <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                  Nizam
                              </h4>
                              <div className='flex items-center gap-[2px]'>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                              </div>
                          </div>
                      </div>
                      <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                      </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='py-[30px] px-5 rounded-3'>
                      <div className='flex items-center gap-[13px]'>
                          <img src={patientAvatar} alt="" />
                          <div>
                              <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                  Nizam
                              </h4>
                              <div className='flex items-center gap-[2px]'>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                              </div>
                          </div>
                      </div>
                      <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                      </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='py-[30px] px-5 rounded-3'>
                      <div className='flex items-center gap-[13px]'>
                          <img src={patientAvatar} alt="" />
                          <div>
                              <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                  Nizam
                              </h4>
                              <div className='flex items-center gap-[2px]'>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                                  <HiStar className='text-yellowColor w-[18px] h-5'/>
                              </div>
                          </div>
                      </div>
                      <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                      </p>
                  </div>
              </SwiperSlide>
          </Swiper>
        </div>
            {/* <div className='mt-[30px] lg:mt-[55px] lg:px-9'>
                <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="50" slides-per-view="3">
                    <swiper-slide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                        Nizam
                                    </h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                            </p>
                        </div>        
                    </swiper-slide>
                    <swiper-slide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                        Nizam
                                    </h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                            </p>
                        </div>        
                    </swiper-slide>
                    <swiper-slide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                        Nizam
                                    </h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                            </p>
                        </div>        
                    </swiper-slide>
                    <swiper-slide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                        Nizam
                                    </h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda doloribus accusamus ipsa delectus iusto ab consequuntur expedita quibusdam sit.
                            </p>
                        </div>        
                    </swiper-slide>
                </swiper-container>
            </div> */}
      </>
    
  )
}

export default Testimonial