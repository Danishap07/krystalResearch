import React from 'react'
import Link from 'next/link'
import { MenuButton } from './menu-button'

function Navbar() {
    return (
        <nav>
            <div className='max-w-screen mx-auto bg-[#002147]'>
                <div className='hidden md:flex justify-end px-32 space-x-4'>
                <Link href='/'><MenuButton>Home</MenuButton></Link>
                <Link href='/what-we-offer'><MenuButton>What We Offer</MenuButton></Link>
                <Link href='/about-us'><MenuButton>About Us</MenuButton></Link>
                <Link href='/contact-us'><MenuButton>Contact Us</MenuButton></Link>
                </div>
                {/* mobile buttongoes here */}
                <div className='md:hidden flex justify-end'>

                </div>
                <div className='md:hidden flex justify-center'>
                <Link href='/'><h5 className='py-4 px-2  font-sans font-medium text-white hover:underline hover:underline-offset-8 decoration-2' >Home</h5></Link>
                <Link href='/what-we-offer'><h5 className='py-4 px-2 font-sans font-medium text-white hover:underline hover:underline-offset-8 decoration-2'>What We Offer</h5></Link>
                <Link href='/about-us'><h5 className='py-4 px-2 font-sans font-medium text-white hover:underline hover:underline-offset-8 decoration-2'>About Us</h5></Link>
                <Link href='/contact-us'><h5 className='py-4 px-2 font-sans font-medium text-white hover:underline hover:underline-offset-8 decoration-2'>Contact Us</h5></Link> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar