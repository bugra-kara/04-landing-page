import React from 'react'
import Logo from '../assets/images/Logo.svg'
import {TfiFacebook} from 'react-icons/tfi'
import {SiTwitter} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col justify-center w-full z-20 pt-20 pb-10 bg-blue'>
      <div className='container self-center w-full grid grid-rows-3 sm:grid-rows-none grid-cols-2 sm:grid-cols-5 sm:gap-5 gap-y-5 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-48 text-sm'>
        <div className='row-span-1 col-span-2 sm:col-span-2 flex flex-col space-y-5 text-white items-center sm:items-start'>
          <div><img src={Logo} alt="" /></div>
          <div>Stay connected with us</div>
          <ul className='flex flex-row text-white space-x-9'>
            <li><a href="http://twitter.com"><SiTwitter/></a></li>
            <li><a href="http://twitter.com"><FaTelegramPlane/></a></li>
            <li><a href="http://twitter.com"><AiFillYoutube/></a></li>
            <li><a href="http://twitter.com"><AiFillInstagram/></a></li>
            <li><a href="http://twitter.com"><TfiFacebook/></a></li>
          </ul>
        </div>
        <div className='row-span-1 sm:col-span-1 text-white sm:justify-end grid'>
          <div className='pb-4 font-bold'>Legal</div>
          <ul className='space-y-2'>
            <li>About us</li>
            <li>Term of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='row-span-1 sm:col-span-1 text-white sm:justify-end grid'>
          <div className='pb-4 font-bold'>Learn</div>
          <ul className='space-y-2'>
            <li>Financial Education</li>
            <li>Teachers</li>
            <li>Academy</li>
            <li>Crypto</li>
          </ul>
        </div>
        <div className='row-span-1 sm:col-span-1 text-white sm:justify-end grid'>
          <div className='pb-4 font-bold'>Navigation</div>
          <ul className='space-y-2'>
            <li>How it works</li>
            <li>Features</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className='container self-center w-full pt-10 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-48 text-xs sm:text-sm'>
        <div className='justify-start text-white w-full'>Copyright 2022. All right reserved.</div>
      </div>
    </div>
    </>
  )
}

export default Footer