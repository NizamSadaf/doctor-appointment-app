import React, { useState } from 'react'
import DoctorsList from './Doctors/DoctorsList'
import Testimonial from '../components/Testimonial/Testimonial'
import {doctors} from '../assets/data/doctors'
const Doctors = () => {
    const [doctorList,setDoctorList]=useState(doctors)
    const [doctorName, setDoctorName] = useState('')
    const searchDoctor = (e) => {
        e.preventDefault()
        const searchText = doctorName.toLowerCase()
        const newDoctorList=doctors.map((doctor) => {
            const dname = doctor.name.toLowerCase()
            if (dname.includes(searchText)) {
                return doctor
            }
        })
        
        setDoctorList(newDoctorList.filter((item) => item!==undefined))
            //setDoctorList(newDoctorList)
        // doctors = doctor
        
    }
    return (
        <>
            <section className='bg-[#fff9ea]'>
                <div className="container text-center">
                    <h2 className='heading'>Find a doctor</h2>
                    <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between' >
                        <input type="text" className='py-4 pl-4 pr-2 w-full bg-transparent  focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Doctor' onChange={(e)=>setDoctorName(e.target.value)}/>
                        <button type='submit' onClick={searchDoctor} className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <DoctorsList doctors={ doctorList } />
                    <Testimonial/>
                </div>
            </section>               
        </>
    
  )
}

export default Doctors