import React from 'react'

export default function NavBar() {

  const BurgerClicked = ()=>{
    console.log('burgor clicked');
  }

  return (
    <div>
      <div>
        <div className='flex m-4 bg-primary p-2 rounded-xl text-sm md:text-lg cursor-pointer text-white justify-center items-center gap-6'>
          Free Courses 🌟 Sale Ends Soon, Get It Now 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
        <div className='flex mainMargin justify-between items-center mainPadding font-bold'>
          <ul className='flex justify-center items-center space-x-10'>
            <li><img src="logo.png" alt="logo" /></li>
            <li className='Hover hidden lg:block'>Home</li>
            <li className='Hover hidden lg:block'>Courses</li>
            <li className='Hover hidden lg:block'>About Us</li>
            <li className='Hover hidden lg:block'>Pricing</li>
            <li className='Hover hidden lg:block'>Contact</li>
          </ul>
          <div className='flex items-center gap-5'>
            <ul className='hidden xsm:flex justify-center items-center space-x-5'>
              <li className=' cursor-pointer'>Sign Up</li>
              <li className='bg-primary px-5 py-2 text-white rounded btn'>Login</li>
            </ul>
            <div className='lg:hidden cursor-pointer hidd' onClick={BurgerClicked}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
