import React from 'react'
import Head from 'next/head'

function AboutUs() {
  return (
    <>
      <Head>
        <title>KrystalReseach || About-Us</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <div>
      <div className='py-10 bg-gradient-to-r from-[#D6F6F6] to-slate-50 text-center'>
        <div className='  md:mx-[25%] mx-4 font-bold'>
          <h3 className='text-[#5bdcdc] text-5xl'>
            Krystal Research Solutions:
          </h3>
          <h3 className='text-4xl text-slate-700 pt-4'>Your Healthcare Market Research Partner</h3>

        </div>
        <div className='md:mx-[19%] mx-4 py-10 font-medium text-slate-900'>
          <p className='py-5'>Founded in 2023, Krystal Research Solutions (KRS) is a passionate team of healthcare market research experts with over 20 years of combined experience. We help our clients make informed decisions and achieve superior results by providing them with quality, actionable data.</p>

          <p className=''>Our core focus is on developing a footprint in fieldwork practice (qualitative and quantitative), with a growing healthcare panel across North America, Europe, South America, and APAC. We cater to all healthcare market research projects via different methodologies, and we continue to support our clients with our capabilities and best practice insights</p>
        </div>

      </div>
      <div className='bg-white pb-10'>
        <h3 className='font-bold text-center text-2xl pt-6 text-slate-900'>WHY KRS?</h3>
        <div className='bg-[#D6F6F6] mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-6 text-slate-900'>We are passionate about healthcare market research.</p>
        </div>
        <div className='bg-[#D6F6F6] mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-6 text-slate-900'>We have a highly experienced and skilled team.</p>
        </div>
        <div className='bg-[#D6F6F6] mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-6 text-slate-900'>We offer a wide range of qualitative and quantitative research services.</p>
        </div>
        <div className='bg-[#D6F6F6] mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-6 text-slate-900'>We have a growing healthcare panel across North America, Europe, South America, and APAC.</p>
        </div>
        <div className='bg-[#D6F6F6] mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-6 text-slate-900'>We are committed to providing our clients with quality, actionable data.</p>
        </div>
      </div>
      <div className='py-6 bg-gradient-to-r from-[#D6F6F6] text-center'>
        <h3 className='font-bold text-center text-2xl pt-2 uppercase text-slate-900'>How can we help you?</h3>
        <div className='md:flex justify-between mx-16'>
          <div className='bg-[#5BDCDC] mx-10 my-4 py-4 rounded-2xl'>
            <h6 className='text-white font-semibold text-xl'>Make more Informed Decisions:</h6>
            <p className='md:mx-32 mx-4 font-semibold text-slate-900'>Our research insights can help you understand your target market, identify opportunities, and make better strategic decisions.</p>
          </div>
          <div className='bg-[#5BDCDC] mx-10 my-4 py-4 rounded-2xl'>
            <h6 className='text-white font-semibold text-xl'>Achieve Superior Results:</h6>
            <p className='md:mx-32 mx-4 font-semibold text-slate-900'>Our research can help you develop and launch new products and services, improve your marketing campaigns, and expand into new markets.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs