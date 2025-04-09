"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logoFooter from "@/public/logoFooter.svg"
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { TiMediaEject } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BsGithub } from 'react-icons/bs'



const Footer = () => {
  const [logos, setLogos] = useState(false);

  const handleLogos = () => {
    setLogos(!logos)
  }
  return (
    <section className='py-16 px-6 mt-24 bg-gradient-to-r from-[#D9D9D9] via-#D9D9D9 to-white h-[300px] rounded-t-full font-roboto relative '>
      <footer className='max-w-7xl mx-auto '>
        <div className='flex items-center gap-x-3 border-b border-[#C9C9C9] pb-4'>
          <Image src={logoFooter} alt='logo' />
          <div className='w-full'>
            <div className='flex justify-between items-center'>
              <h1 className='font-semibold text-xl lg:text-2xl text-black'>Believe Us As Counselor</h1>
              <div className='flex items-center gap-x-5 font-normal text-base lg:text-lg text-black'>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Home</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Services</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>About Us</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Contact</Link>
              </div>
            </div>
            <div className='border-b-2 border-[#A5A5A5] my-4'>{''}</div>
            <div className='flex justify-between items-center'>
              <div className=" bg-primary text-white flex items-center justify-center space-x-4 rounded-lg px-8 py-2">
                <button className="font-normal text-base">Join Now</button>
                <FaArrowRightLong />
              </div>
              <div className='flex items-center gap-x-5 font-normal  text-base lg:text-lg text-[#7D7D7D]'>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Terms of use</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Privacy Police</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Cookie Police</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between py-4'>
          <p className='text-sm font-normal text-black'>Copyright &copy; 2024 Malang, All rights reserved. Design Website By <span className='bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold'>Abim</span> <span className='text-primary'>&</span> <span className='bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold'>Hanif</span></p>
          <div className='text-primary'>
            <button onClick={handleLogos} className='text-xl'>
              {logos ? <IoMdClose /> : <TiMediaEject className='rotate-180' />}
            </button>
          </div>
        </div>
        {logos && (
          <div className='absolute bg-white shadow-lg shadow-black p-5 rounded-lg lg:top-0 lg:right-1/3'>
              <h1 className='text-primary font-roboto font-semibold'>Lets Connect 🔗</h1>
              <div className='gap-y-4 text-black'>
                <h2 className='py-4 bg-gradient-to-r from-red-600 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold'>Fanani Akbar Abimanyu</h2>
                <div className='flex space-x-4'>
                  <Link href='https://github.com/Abimanyuoke' target='_blank'><BsGithub /></Link>
                  <Link href='https://www.instagram.com/fanani_abimanyu/' target='_blank'><FaInstagram /></Link>
                  <Link href='https://web.facebook.com/abim.manyu.3914207' target='_blank'><FaFacebookF /></Link>
                  <Link href='https://www.linkedin.com/in/fanani-akbar-abimanyu-978a03298/' target='_blank'><FaLinkedin /></Link>
                </div>
              </div>
              <div className='gap-y-4 text-black'>
                <h2 className='py-4 bg-gradient-to-r from-red-600 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold '>Hanif Dzakwan Rabbani</h2>
                <div className='flex space-x-4'>
                  <Link href=''><FaInstagram /></Link>
                  <Link href=''><FaFacebookF /></Link>
                  <Link href=''><FaLinkedin /></Link>
                </div>
              </div>
            </div>
        )}
      </footer>
    </section>
  )
}

export default Footer