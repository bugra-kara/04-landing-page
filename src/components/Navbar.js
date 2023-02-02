import React, {useState} from 'react'
import Logo from '../assets/images/Logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {TfiFacebook} from 'react-icons/tfi'
import {SiTwitter} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <>
      {
        nav
        ?
        <div className='h-screen absolute w-full bg-blue flex flex-col py-10 space-y-7 place-items-center'>
          <div className='w-full flex justify-end pr-5 text-white'>
            <button onClick={()=> {handleClick()}}><AiOutlineClose/></button>
          </div>
          <div>
            <img className='h-12 w-48' src={Logo} alt="" />
          </div>
          <div className='pt-5'>
            <ul className='text-white space-y-3 text-xl'>
              <li>How it works</li>
              <li>Features</li>
              <li>FAQs</li>
            </ul>
          </div>
          <ul className='flex flex-row text-white space-x-9 pt-12'>
            <li><a href="http://twitter.com"><SiTwitter/></a></li>
            <li><a href="http://twitter.com"><FaTelegramPlane/></a></li>
            <li><a href="http://twitter.com"><AiFillYoutube/></a></li>
            <li><a href="http://twitter.com"><AiFillInstagram/></a></li>
            <li><a href="http://twitter.com"><TfiFacebook/></a></li>
          </ul>
        </div>
        :
        <nav className='h-24 w-full flex justify-center px-5 bg-blue place-items-center'>
          <div className='container grid grid-cols-2 sm:grid-cols-7 justify-items-center sm:justify-items-start gap-5 sm:px-4 md:px-8 lg:px-12 xl:px-48'>
            <div className='col-span-1 w-full sm:w-auto justify-center py-1.5'>
              <img src={Logo} alt="" />
            </div>
            <div className='hidden sm:block col-span-4 py-1.5'>
              <ul className='flex flex-row space-x-7 text-white sm:text-sm lg:text-base font-bold'>
                <li className=' border-b-2 border-transparent cursor-pointer
                hover:border-blue-v5 ease-in duration-200'>How it works</li>
                <li className=' border-b-2 border-transparent cursor-pointer
                hover:border-blue-v5 ease-in duration-200'>Features</li>
                <li className=' border-b-2 border-transparent cursor-pointer
                hover:border-blue-v5 ease-in duration-200'>FAQs</li>
              </ul>
            </div>
            <div className='col-span-2 hidden sm:flex flex-row justify-end w-full space-x-5'>
              <button className='text-sm lg:text-base font-bold text-white '>Sign in</button>
              <button className='font-medium bg-orange hover:bg-orange-v1 ease-in duration-200 rounded-3xl text-sm lg:text-base px-2 py-0.5 lg:px-4 lg:py-1.5'>Get Started</button>
            </div>
            <div className='col-span-1 flex sm:hidden justify-end w-full text-white place-items-center'>
              <button onClick={()=> {handleClick()}}><GiHamburgerMenu className='h-6 w-6'/></button>
            </div>
          </div>  
        </nav>
      }
    </>
  )
}

export default Navbar