import React from 'react'

export default function Footer() {
  return (
    <div className='mainPadding mainMargin '>
      <div className='flex justify-between flex-wrap items-center gap-y-10'>
        <div>
          <img src="logo.png" alt="logo" />
          <div className='flex gap-2 mt-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            hello@skillbridge.com
          </div>
          <div className='flex gap-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            +1 234 567 890
          </div>
          <div className='flex gap-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            Somewhere in the World
          </div>
        </div> 
        
        <div>
          <ul>
            <li className='cursor-pointer font-bold'>Home</li>
            <li className='cursor-pointer Hover'>Benefits</li>
            <li className='cursor-pointer Hover'>Our Courses</li>
            <li className='cursor-pointer Hover'>Our Testimonials</li>
            <li className='cursor-pointer Hover'>Our FAQ</li>
          </ul>
        </div>

        <div>
          <ul>
              <li className='cursor-pointer font-bold'>About Us</li>
              <li className='cursor-pointer Hover'>Company</li>
              <li className='cursor-pointer Hover'>Achievements</li>
              <li className='cursor-pointer Hover'>Our Goals</li>
          </ul>
        </div>

        <div >
          <ul>
              <li className='cursor-pointer font-bold'>Social Profiles</li>
              <li className='cursor-pointer space-x-5'>
                <i className="ri-facebook-circle-fill text-lg"></i>
                <i className="ri-linkedin-box-fill text-lg"></i>
                <i className="ri-twitter-fill text-lg"></i>
              </li>
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center mt-10'>
        &copy; 2024 Skillbridge. All rights reserved.
      </div>
    </div>
  )
}
