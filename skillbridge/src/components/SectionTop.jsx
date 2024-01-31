import React from 'react'

export default function SectionTop(props) {
  return (
    <div className='sm:mt-10 flex flex-col xsm:flex-row gap-y-10 justify-center text-center xsm:text-left xsm:justify-between items-center'>
        <div className='w-3/4'>
        <h1 className='h1'>{props.title}</h1>
        <p>{props.desc}</p>
        </div>
        <div>
        <a href="/" className='Hover'>View All</a>
      </div>
    </div>
  )
}
