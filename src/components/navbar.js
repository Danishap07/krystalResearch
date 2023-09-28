import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav>
            <div className=' max-w-screen mx-auto bg-white'>
                <div className='hidden md:flex justify-end px-32 space-x-4'>
                <Link href='/'><h5 className='py-4 px-4  font-sans font-medium text-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2' >Home</h5></Link>
                <Link href='/what-we-offer'><h5 className='py-4 px-4 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>What We Offer</h5></Link>
                <Link href='/about-us'><h5 className='py-4 px-4 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>About Us</h5></Link>
                <Link href='/contact-us'><h5 className='py-4 px-4 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>Contact Us</h5></Link>
                </div>
                {/* mobile buttongoes here */}
                <div className='md:hidden flex justify-end'>

                </div>
                <div className='md:hidden flex justify-center'>
                <Link href='/'><h5 className='py-4 px-2  font-sans font-medium text-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2' >Home</h5></Link>
                <Link href='/what-we-offer'><h5 className='py-4 px-2 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>What We Offer</h5></Link>
                <Link href='/about-us'><h5 className='py-4 px-2 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>About Us</h5></Link>
                <Link href='/contact-us'><h5 className='py-4 px-2 font-sans font-medium text-[#5bdcdc]  hover:underline hover:underline-offset-8 decoration-2'>Contact Us</h5></Link> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar