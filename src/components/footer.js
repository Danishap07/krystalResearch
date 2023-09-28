import React from 'react'
import Link from 'next/link'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets:['latin']})
function Footer() {
  return (
    <div className='bg-[#5E5E5E] text-center md:text-left  md:px-40 md:pt-20'>
        <h3 className='text-3xl font-light text-neutral-200 py-5 mb-10 uppercase md:text-left' style={rubik.style}><span className='font-medium'>Krystal</span>Research</h3>
        <div className='md:flex justify-between'>
        <div className=''>
        <Link href="/about-us" className='text-lg font-semibold text-neutral-200 leading-normal'><h6>About Us</h6></Link>
        <Link href="/what-we-offer" className='text-lg font-semibold text-neutral-200 leading-normal'><h6>What We Offer</h6></Link>
        <Link href="/contact-us" className='text-lg font-semibold text-neutral-200 leading-normal'><h6>Contact Us</h6></Link>
        {/* <a href="/aboutus">About Us</a> */}
        </div>
        <div>
            <h5 className='text-xl font-semibold text-neutral-200 pt-10 md:pt-0'>APAC</h5>
            <div className='mt-4'>
            <h6 className='text-neutral-200'>Krystal Research Solutions</h6>
            <p className='text-neutral-200'>1st floor, Civil Hospital Road, Fort Area Dharwad</p>
            <p className='text-neutral-200'>Karnataka - 580008</p>
            <p className='text-neutral-200'>
                PH: +919886911825
            </p>
            <a href="mailto:pavan.k@krystalresearch.com" className='text-neutral-200'>pavan.k@krystalresearch.com</a>
            </div>
            </div>
        </div>
        <p className='font-normal text-neutral-200 py-5'>Copyright © KrystalResearch. All Rights Reserved.</p>
    </div>
  )
}

export default Footer