import React from 'react'
import Phone from '../assets/images/phone.svg'
import HumanPhone from '../assets/images/human-phone.svg'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const HomeSection = () => {
  return (
    <div className='flex justify-center w-full h-full z-20 pt-20 bg-white'>
      <div className='container w-full px-4 sm:px-4 md:px-8 lg:px-12 xl:px-48'>
        <div className='grid grid-cols-1 sm:grid-cols-4 border-b-8 border-blue-v4 border-opacity-75'>
          <div className='col-span-2 flex flex-col space-y-3 sm:space-y-5'>
            <div className='text-xl sm:text-4xl font-bold'>
            App features that help manage <br /> money more organized
            </div>
            <div>
            Make your life easier with comprehensive integration support <br />
            that allows financial planning to be more seamless.
            </div>
            <div>
            <button className='font-medium bg-orange hover:bg-orange-v1 ease-in duration-200 rounded-3xl text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-1.5'>Get Started</button>
            </div>
          </div>
          <div className='col-span-2 flex justify-end'>
            <img className='h-96' src={Phone} alt="" />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 py-16'>
          <div className='col-span-2 grid grid-flow-row h-full'>
            <div className='bg-blue-v6 space-y-5 px-10 sm:px-12 py-6 rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none'>
              <div className='text-4xl font-bold'>Platforms help your money to be better</div>
              <div className='pr-8'>
              You no longer need to go home or go to the bank to do this. Only through this platform, all financial activities can be completed.
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 bg-blue-v2 text-white px-10 py-6 text-xs rounded-bl-2xl rounded-br-2xl sm:rounded-br-none'>
              <div className='flex flex-row items-center space-x-1'><AiOutlineCheckCircle/><span>Financial transactions become easier</span></div>
              <div className='flex flex-row items-center space-x-1'><AiOutlineCheckCircle/><span>Accelerating economic turnover</span></div>
              <div className='flex flex-row items-center space-x-1'><AiOutlineCheckCircle/><span>Supporting financial inclusio</span></div>
              <div className='flex flex-row items-center space-x-1'><AiOutlineCheckCircle/><span>Better funding access</span></div>
            </div>
          </div>
          <div className='col-span-1 h-full hidden sm:flex'>
            <img className='rounded-tr-2xl rounded-br-2xl object-cover' src={HumanPhone} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection