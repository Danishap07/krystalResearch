import React from 'react'
import Head from 'next/head';
import Image from 'next/image';

function Contactus() {
  return (
    <>
      <Head>
        <title>KrystalReseach || Contact-Us</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className='w-full relative'>
        <div className='absolute py-2 lg:py-8'>
          <div className="md:mx-[14%] mx-4 text-center sm:py-10">
            {/* <p>hello guys</p> */}
            <h3 className='text-[#5bdcdc] lg:text-5xl sm:text-3xl text-xl font-bold'>CONTACT US:</h3>
            <h2 className='mx-4 pt-4 lg:text-5xl sm:text-3xl text-xl tracking-wide text-[#616663] font-bold leading-tight'>Need an expert you are more than welcomed to leave your contact info and we will be in touch shortly.</h2>
          </div>

        </div>
        <Image src='/assets/contactimg.png' width={1350} height={300} />
        <div className='md:flex mx-8 justify-between md:mx-32'>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
          <div className='flex justify-center'>
            <Image className='w-20 h-20 py-5 px-4' src='/assets/mail_icon.png' width={40} height={35} />
            </div>
              <h4 className='text-2xl font-bold'>CONTACT US</h4>
              <p className='text-white px-8 pt-2 pb-3 font-semibold'>pavan.k@krystalresearch.com</p>
          </div>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
          <div className='flex justify-center'>
              <Image className='w-20 h-20 py-5 px-4' src='/assets/call_icon.png' width={40} height={35} />
              </div>
              <h4 className='text-2xl font-bold'>CALL US</h4>
              <p className='text-white px-8 pt-2 pb-3 font-semibold'>PH: +919886911825</p>
          </div>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
            <div className='flex justify-center'>
              <Image className='w-20 h-20 py-2' src='/assets/home_icon.png' width={40} height={35} />
            </div>
            <h4 className='text-2xl font-bold'>VISIT US</h4>
            <p className='text-white px-8 pt-2 font-semibold'>Krystal Research Solutions</p>
            <p className='text-white px-8 font-semibold'>1st floor, Civil Hospital Road, Fort Area Dharwad</p>
            <p className='text-white px-8 pb-3 font-semibold'>Karnataka - 580008</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus