import React from 'react'
import Plan from './Plan'
export default function Pricing() {
  return (
    <div>
      <div className='mainMargin mainPadding flex flex-col sm:flex-row gap-y-10 justify-center sm:justify-between text-left items-center'>
          <div className='w-3/4'>
          <h1 className='h1'>Our Pricing</h1>
          <p>Welcome to SkillBridge's Pricing Plan page,
             where we offer two comprehensive options to cater to 
             your needs: Free and Pro. We believe in providing 
             flexible and affordable pricing options for our services.
              Whether you're an individual looking to enhance your 
              skills or a business seeking professional development solutions, we have a 
            plan that suits you. Explore our pricing options 
            below and choose the one that best fits your requirements..</p>
          </div>
          <div>
            <ul className='flex justify-center items-center space-x-5'>
              <li className='bg-primary px-5 py-2 text-white rounded btn'>Monthly</li>
              <li className='cursor-pointer'>Yearly</li>
            </ul>
          </div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-x-20'>
        <Plan type="Free Plan" cost="0"
          p1="Access to selected free courses." p1_t="t"
          p2="Limited course materials and resources." p2_t="t"
          p3="Basic community support." p3_t="t"
          p4="No certification upon completion." p4_t="t"
          p5="Ad-supported platform." p5_t="t"
          p6="Access to exclusive Pro Plan community forums." p6_t="f"
          p7="Early access to new courses and updates." p7_t="f"
        />
        <Plan type="Pro Plan" cost="79"
          p1="Unlimited access to all courses." p1_t="t"
          p2="Unlimited course materials and resources." p2_t="t"
          p3="Priority support from instructors." p3_t="t"
          p4="Course completion certificates." p4_t="t"
          p5="Ad-free experience." p5_t="t"
          p6="Access to exclusive Pro Plan community forums." p6_t="t"
          p7="Early access to new courses and updates." p7_t="t"/>
      </div>
    </div>
  )
}
