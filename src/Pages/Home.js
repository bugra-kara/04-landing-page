import { Outlet } from "react-router-dom"
import { HomeSection, OurCustomer, Shapes } from '../components'
const Home = () => {

  return (
    <>
      <div className="flex relative h-full pb-20 sm:pb-0 sm:h-106 xl:h-112 -z-20 justify-center px-5 bg-blue w-full pt-10">
        {/* Caption */}
        <div className="container flex flex-col space-y-5 w-full place-items-center">
          <div className="text-white text-6xl sm:text-8xl xl:text-9xl font-bold text-center">
            Investment <br /> for <span className="text-blue-v4">everyone</span>
          </div>
          <div className="text-white font-normal text-center leading-8">
          Investing is about more than just stocks and cryptocurrencies. <br />
          It’s about you and the future you want to create for yourself and your family.
          </div>
          <div className="flex flex-row space-x-5">
          <button className='font-medium bg-orange hover:bg-orange-v1 ease-in duration-200 rounded-3xl text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-1.5'>Get Started</button>
          <button className="font-medium border border-white rounded-3xl text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-1.5 text-white">Learn More</button>
          </div>
        </div>
        <Shapes/>
      </div>
      <HomeSection/>
      <OurCustomer/>
      <Outlet/>
    </>
  )
}

export default Home