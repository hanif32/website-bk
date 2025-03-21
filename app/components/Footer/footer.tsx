import React from 'react'
import Image from 'next/image'
import logoFooter from "@/public/images/logo-footer.png"
import { FaArrowRightLong } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='font-roboto h-[1000px]'>
      <div className='pt-36 px-36'>
        <div className='flex items-center gap-x-3 border-b border-gray'>
          <Image src={logoFooter} alt='logo' />
          <div className='w-full'>
            <div className='flex justify-between items-center border-b border-black/50'>
              <h1>Believe Us As Counselor</h1>
              <div className='flex items-center gap-x-5 font-normal text-lg text-gray'>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className=" bg-primary text-white flex items-center justify-center space-x-3 w-[150px] rounded-lg px-3 py-2">
                <button className="font-normal text-base">Join Now</button>
                <FaArrowRightLong />
              </div>
              <div className='flex items-center gap-x-5 font-normal text-lg text-black/20'>
                <a href="#">Terms of use</a>
                <a href="#">Privacy Police</a>
                <a href="#">Cokkie Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p></p>
          <div>
            {/* icon */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer