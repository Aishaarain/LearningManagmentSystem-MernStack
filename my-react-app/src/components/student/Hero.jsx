import React from 'react'
import {assets} from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 '>

      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold
      text-gray-800 max-w-3xl mx-auto'>Empower your future with the courses designed to <span className='text-blue-600'>fit your choice</span> <img src={assets.sketch} alt="" 
      className='md:block hidden absolute -bottom-7 right-0'/> </h1>

      <p className='md:block text-gray-500 hidden max-w-2xl mx-auto'> We provide a wide range of courses to help you achieve your goals.
         Bring together your passions and interests to create a personalized 
         learning experience that drives you forward.</p>

          <p className='md:block text-gray-500 hidden max-w-2xl mx-auto'> we bring world-class tutors to help you succeed. </p>
          <SearchBar/>
    </div>
  )
}

export default Hero