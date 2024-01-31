import React from 'react'

export default function Benefit(props) {
  return (
    <div className="col-span-1 pt-10 pb-10 sm:p-10 flex flex-col justify-between">
      <div>{props.p1}</div>
      <div className='flex flex-col xsm2:flex-row gap-y-10 justify-between items-center p-5'>
        <div className='flex items-center gap-5'>
          <span><img className='w-10 h-10' src={props.img} alt="" /></span>
          <span className='font-bold'>{props.name}</span>
        </div>
        <div>
          <a className='Hover font-semibold' href="/">Read Full Story</a>
        </div>
      </div>
    </div>
  )
}
