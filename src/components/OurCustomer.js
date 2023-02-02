import React from 'react'
import HumanFlower from '../assets/images/human-flowers.svg'
import HumanCurly from '../assets/images/human-curly.svg'
import {ImQuotesRight} from 'react-icons/im'
const OurCustomer = () => {
  return (
    <div className='flex justify-center w-full h-full z-20 py-20 bg-white'>
      <div className='container w-full px-4 sm:px-4 md:px-8 lg:px-12 xl:px-48'>
        <div className='text-center space-y-4'>
          <div className='text-4xl font-bold'>
          Our customers says
          </div>
          <div className='text-sm'>
            Make your life easier with comprehensive integration support <br /> that allows financial planning to be more seamless.
          </div>
        </div>
        <div className='grid sm:grid-cols-8 gap-6 pt-10'>
          <div className='hidden sm:block col-span-3'>
            <img className='object-cover rounded-lg w-full h-96' src={HumanFlower} alt="" />
          </div>
          <div className='col-span-5 rounded-lg bg-blue-v6 space-y-6 px-8 py-10'>
            <div className='grid grid-cols-4'>
              <div className='col-span-2 text-2xl lg:text-4xl font-bold'>I have been using this service for the past year</div>
              <div className='col-span-2'></div>
            </div>
            <div className='pr-10'>
              Their team is extremely knowledgeable and always goes above and beyond to help me achieve my goals.
            </div>
            <div>
              <div className='font-bold'>Freeda Richarda</div>
              <div>3 years of using Raizze</div>
            </div>
          </div>
        </div>
        <div className='grid sm:grid-cols-8 gap-6 pt-10'>
          <div className='col-span-5 rounded-lg bg-orange-v4 bg-opacity-20 space-y-6 px-8 py-10'>
            <div className='grid grid-cols-4'>
              <div className='col-span-2 text-2xl lg:text-4xl font-bold'>I have been using this service for the past year</div>
              <div className='col-span-2'></div>
            </div>
            <div className='pr-10'>
              Their team is extremely knowledgeable and always goes above and beyond to help me achieve my goals.
            </div>
            <div>
              <div className='font-bold'>Freeda Richarda</div>
              <div>3 years of using Raizze</div>
            </div>
          </div>
          <div className='hidden sm:block col-span-3'>
            <img className='object-cover rounded-lg w-full h-96' src={HumanCurly} alt="" />
          </div>
        </div>
        <div className='flex justify-center pt-6 pb-16 space-x-6'>
          <button className='font-medium bg-orange hover:bg-orange-v1 ease-in duration-200 rounded-3xl text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-1.5'>Get Started</button>
          <button className="font-medium border border-black rounded-3xl text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-1.5">Watch Videos</button>
        </div>
      </div>
    </div>
  )
}

export default OurCustomer