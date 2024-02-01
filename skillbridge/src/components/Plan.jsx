import React from 'react'

export default function Plan(props) {

  const testType = (type)=>{
    if(type==='t'){
      return(
        <svg className='bg-yellow-50 w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      );
    }else{
      return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      )
    }
  }

  return (
    <div className='mainPadding mainMargin md:p-0'>
      <p className='text-center font-semibold text-lg mt-10 mb-10 border-4 border-yellow-50'>{props.type}</p>
      <div className='text-center'>
        <span className='font-bold text-5xl'>${props.cost}</span>
        <span>/month</span>
      </div>
      <p className='text-center font-semibold text-lg mt-10 mb-5'>Available Features</p>
    

      <div className='space-y-10'>
        <div className='flex gap-5'>
          <span>{testType(props.p1_t)}</span>
          <p>{props.p1}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p2_t)}</span>
          <p>{props.p2}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p3_t)}</span>
          <p>{props.p3}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p4_t)}</span>
          <p>{props.p4}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p5_t)}</span>
          <p>{props.p5}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p6_t)}</span>
          <p>{props.p6}</p>
        </div>
        <div className='flex gap-5'>
          <span>{testType(props.p7_t)}</span>
          <p>{props.p7}</p>
        </div>
        <div>
          <ul>
            <li className='bg-primary px-5 py-2 text-center text-white rounded-lg rounded-t-none btn'>
              Get Started
            </li>  
          </ul>
        </div>
      </div>
    </div>
  )
}
