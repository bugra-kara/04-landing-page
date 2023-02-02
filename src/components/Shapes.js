import React from 'react'
import Human1 from '../assets/images/human1.png'
import Human2 from '../assets/images/human2.png'
import Human3 from '../assets/images/human3.png'
import Human4 from '../assets/images/human4.png'
const Shapes = () => {
  return (
    <>
        {/* Background shapes */}
        <div className="hidden lg:block bg-blue-v4 -z-10 absolute bg-opacity-5 skew-x-12 skew-y-12 -rotate-60 h-5/6 w-36 top-80 left-96"></div>
        <div className="hidden lg:block bg-blue-v4 absolute bg-opacity-5 skew-x-12 skew-y-12 -rotate-60 h-5/6 w-36 -top-64 lg:left-32 xl:left-40 2xl:left-60"></div>
        <div className="hidden lg:block bg-blue-v4 absolute bg-opacity-5 skew-x-12 skew-y-12 -rotate-60 h-5/6 w-36 -top-64 lg:right-52 xl:right-72 2xl:right-96"></div>
        <div className="hidden xl:block bg-blue-v4 absolute bg-opacity-5 skew-x-12 skew-y-12 -rotate-60 h-5/6 w-36 top-40 right-96"></div>
        {/* Background people */}
        <div className="hidden lg:block absolute opacity-60 border-4 border-blue-v3 rounded-full lg:right-20 xl:right-52 2xl:right-80 top-80">
          <img src={Human1} className="p-1" alt="" />
        </div>
        <div className="hidden lg:block absolute opacity-60 border-4 border-blue-v3 rounded-full lg:right-3 xl:right-32 2xl:right-90">
          <img src={Human2} className="p-1" alt="" />
        </div>
        <div className="hidden lg:block absolute opacity-60 border-4 border-blue-v3 rounded-full lg:left-4 xl:left-32 left-90 top-36">
          <img src={Human4} className="p-1" alt="" />
        </div>
        <div className="hidden lg:block absolute opacity-60 border-4 border-blue-v3 rounded-full lg:left-16 xl:left-48 left-108 top-80">
          <img src={Human3} className="p-1" alt="" />
        </div>
    </>
  )
}

export default Shapes