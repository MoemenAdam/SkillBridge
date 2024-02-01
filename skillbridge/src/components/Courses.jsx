import React from 'react'

export default function Courses(props) {
  return (
    <div className="col-span-1 pt-10 pb-10 sm:p-10 flex flex-col justify-between">
      <div className='font-bold text-right text-4xl'>
        <img className='w-full h-full rounded-lg' src={props.img} alt="" />
      </div>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center p-5'>
        <div className='flex space-x-5'>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
        </div>
        <div>
          <p className='font-bold'>{props.p3}</p>
        </div>
      </div>
      <div>
        <p className='font-bold text-2xl'>{props.p4}</p>
        <p>{props.p5}</p>
      </div>
      <div className='mt-10 text-center'>
        <p className='Hover'>Get it Now</p>
      </div>
    </div>
  )
}
