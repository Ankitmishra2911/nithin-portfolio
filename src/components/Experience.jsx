import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';


const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
       
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date='May 2024 - July 2024'
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href='https://cipherbytetechnologies.netlify.app/' target='_blank'>
                <img
                  src='https://cipherbytetechnologies.netlify.app/images/logo.png'
                  alt='CipherByte Technologies'
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>Full Stack Web Developer</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                CipherByte Technologies
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
             
                <li
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                ><p>
                  Developed a website EventPlanner360 - An all-in-one event management platform for planning, organising, and overseeing events like conferences, weddings, and parties.
                  </p>
                </li>
                <li
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                ><p>
                  Developed a responsive UI with React.js for personalized event pages, invitations, and RSVP tracking
                  </p>
                </li>
                <li
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                ><p>
                  Implemented back-end services using Node.js and Express.js for efficient data handling.
                  </p>
                </li><li
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                ><p>
                  Managed PostgreSQL databases for guest list management, budget tracking, and vendor coordination
                  </p>
                </li>
            </ul>
          </VerticalTimelineElement>
      </VerticalTimeline>
      <Footer/>
    </div>
  )
}

export default Experience;