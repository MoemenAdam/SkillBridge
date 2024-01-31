import React from 'react'

export default function Benefit(props) {
  return (
    <div className="col-span-1 pt-10 pb-10 sm:p-10 flex flex-col justify-between">
      <div className='font-bold text-right text-4xl'>{props.num}</div>
      <div>
        <p className='font-bold mb-3 text-xl'>{props.p1}</p>
        <p>{props.p2}</p>
      </div>
      <div className='flex justify-end '>
        <svg className="cursor-pointer text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </div>
  )
}
