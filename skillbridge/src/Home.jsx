import React from 'react'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import Benefit from "./components/Benefit";
import SectionTop from "./components/SectionTop";
import Courses from "./components/Courses";
import Testimonial from "./components/Testimonial";
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* first section */}
      <section className='flex justify-center items-center mainMargin mainPadding tracking-wide'>
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
            <p className='px-4 py-3 text-white bg-primary rounded-lg btn'>Explore Courses</p>
            <p className='px-4 py-3 cursor-pointer'>View Pricing</p>
          </div>
          <Brands/>
        </div>
      </section>

      {/* second section (image and Benefits) */}
      <section>
        <div className='flex mainMargin mainPadding brightness-75'>
          <img className='w-full h-full' src="img1.png" alt="" />
        </div>
        <div className='flex flex-col justify-between mainMargin mainPadding'>
          <SectionTop title='Benefits' desc='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'/>
          <div className='lg2:grid lg2:grid-cols-3'>
            <Benefit num='01' p1='Flexible Learning Schedule' p2='Fit your coursework around your existing commitments and obligations.'/>
            <Benefit num='02' p1='Expert Instruction' p2='Learn from industry experts who have hands-on experience in design and development.'/>
            <Benefit num='03' p1='Diverse Course Offerings' p2='Explore a wide range of design and development courses covering various topics.'/>
            <Benefit num='04' p1='Updated Curriculum' p2='Access courses with up-to-date content reflecting the latest trends and industry practices.'/>
            <Benefit num='05' p1='Practical Projects and Assignments' p2='Develop a portfolio showcasing your skills and abilities to potential employers.'/>
            <Benefit num='06' p1='Interactive Learning Environment' p2='Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.'/>
          </div>
        </div>
      </section>
      {/* Our Courses */}
      <section>
        <div className='flex flex-col justify-between mainMargin mainPadding'>
          <SectionTop title='Our Courses' desc='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'/>
          <div className='lg:grid lg:grid-cols-2'>
            <Courses img='2.png' p1='4 Weeks' p2='Beginner' p3='By John Smith' p4='Web Design Fundamentals' p5='Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.'/>
            <Courses img='3.png' p1='6 Weeks' p2='Intermediate' p3='By Emily Johnson' p4='UI/UX Design' p5='Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'/>
            <Courses img='4.png' p1='8 Weeks' p2='Intermediate' p3='By David Brown' p4='Mobile App Development' p5='Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.'/>
            <Courses img='5.png' p1='10 Weeks' p2='Beginner' p3='By Sarah Thompson' p4='Graphic Design for Beginners' p5='Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.'/>
            <Courses img='6.png' p1='10 Weeks' p2='Intermediate' p3='By Michael Adams' p4='Front-End Web Development' p5='Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.'/>
            <Courses img='7.png' p1='6 Weeks' p2='Advance' p3='By Jennifer Wilson' p4='Advanced JavaScript' p5='Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.'/>
          </div>
        </div>
      </section>
      {/* Our Testimonials */}
      <section>
        <div className='flex flex-col justify-between mainMargin mainPadding'>
          <SectionTop title='Our Testimonials' desc='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'/>
          <div className='lg:grid lg:grid-cols-2'>
            <Testimonial img='2.png' name='Sarah L' p1='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!'/>
            <Testimonial img='3.png' name='Jason M' p1='The UI/UX design course exceeded my expectations. The instructors expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!'/>
            <Testimonial img='4.png' name='Emily R' p1='The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. Im now building my own app. Great course!'/>
            <Testimonial img='5.png' name='Michael K' p1='I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructors guidance and feedback improved my design abilities significantly. Im grateful for this course!'/>
          </div>
        </div>
      </section>
      {/* Our Pricing */}
      <section>
        <Pricing />
      </section>
      <Footer />
    </div>
  )
}
