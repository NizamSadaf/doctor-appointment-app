import React from 'react'
import DoctorListDetails from './DoctorListDetails'
//import {doctors} from '../../assets/data/doctors'
const DoctorsList = ({doctors}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {
        doctors.map((doctor) =>
          <DoctorListDetails key={doctor.id} doctor={ doctor } />
        )
      }
    </div>
  )
}

export default DoctorsList