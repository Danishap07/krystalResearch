import React from 'react'
import Link from 'next/link'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })
function Footer() {
  return (
    <div className='bg-[#5E5E5E] text-center pt-4 md:text-left  md:px-40 md:pt-10'>
      
      <div className='md:flex justify-between '>
        <div className=''>
        <h3 className='text-3xl font-light text-neutral-50 mb-5 uppercase md:text-left' style={rubik.style}><span className='font-medium'>Krystal</span>Research</h3>
          <Link href="/about-us" className='text-lg font-semibold text-neutral-50 leading-normal'><h6>About Us</h6></Link>
          <Link href="/what-we-offer" className='text-lg font-semibold text-neutral-50 leading-normal'><h6>What We Offer</h6></Link>
          <Link href="/contact-us" className='text-lg font-semibold text-neutral-50 leading-normal'><h6>Contact Us</h6></Link>
          {/* <a href="/aboutus">About Us</a> */}
        </div>
        <div>
          {/* <h5 className='text-xl font-semibold text-neutral-50 pt-10 md:pt-0'>APAC</h5> */}
          <div className='mt-2'>
            <h6 className='text-neutral-50 font-semibold'>Krystal Research Solutions</h6>
            <p className='text-neutral-50 font-semibold'>1st floor, Civil Hospital Road, Fort Area Dharwad</p>
            <p className='text-neutral-50 font-semibold'>Karnataka - 580008</p>
            <p className='text-neutral-50 font-semibold'>
              PH: +919886911825
            </p>
            <a href="mailto:pavan.k@krystalresearch.com" className='text-neutral-50 font-semibold'>pavan.k@krystalresearch.com</a>
          </div>
        </div>
      </div>
      <p className='font-normal text-neutral-50 py-5'>Copyright © KrystalResearch. All Rights Reserved.</p>
    </div>
  )
}

export default Footer