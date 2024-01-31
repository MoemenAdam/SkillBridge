import React from 'react'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Brands from "../../components/Brands";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center mainMargin mainPadding tracking-wide'>
        <div className='flex flex-col w-full justify-between gap-10 sm:p-20'>
          <div className='font-bold text-center'> 
            <div className='flex justify-center items-center md:space-x-1'>
              <div className='bg-yellow-50 p-1 relative'>
                <div className='w-6 h-0.5 bg-black absolute rounded -top-4 -left-5 rotate-45'></div>
                <div className='w-3 h-0.5 bg-black absolute rounded -top-0 -left-5 rotate-12'></div>
                <div className='w-3 h-0.5 bg-black absolute rounded -top-6 -left-0 rotate-90'></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className='text-2xl md:text-4xl'>
                <span className='text-primary'>Unlock</span> Your Creative Potential
              </p>
            </div>
            <div className='text-2xl md:text-2xl mt-8 font-medium'>
              with Online Design and Development Courses.
            </div>
            <div className='mt-2 font-normal'>
              Learn from Industry Experts and Enhance Your Skills.
            </div>
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            <a className='px-4 py-3 text-white bg-primary rounded-lg btn' href="/">Explore Courses</a>
            <a className='px-4 py-3' href="/">View Pricing</a>
          </div>
          <Brands/>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <Footer />
    </div>
  )
}
