import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KrystalReseach || Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <main style={roboto.style}>
      <div className='w-full relative'>
        {/* <Navbar /> */}
        {/* Home */}
        <div className='absolute w-30 py-2 lg:py-8'>
          <div className="w-[90%] sm:w-[56%]  sm:pl-32 sm:py-10 mx-8">
            {/* <p>hello guys</p> */}
            <h2 className='lg:text-5xl sm:text-3xl text-xl tracking-wide text-[#616663] font-bold leading-tight'>Our Mission is to Empower Access to Quality and Actionable <span className='text-[#5bdcdc]'>Healthcare Data</span>.</h2>
            <Link href='/what-we-offer'><button className='mt-2 lg:mt-20 bg-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full'>What We Offer</button></Link>
          </div>
        </div>
        <Image src='/assets/homepage.png' width={1350} height={300} alt='home doc' />

      </div>
      <div className='max-w-screen mx-auto py-8'>
        <h4 className='text-center py-4 px-4 lg:px-72 font-semibold text-xl'><span className='text-[#5bdcdc]'>WE OFFER</span> Qualitative and Quantitative Healthcare Market Research Services with a Rigorously Authenticated Panel.</h4>

        <div className="md:flex max-w-screen md:mx-40 mt-8 md:justify-between">
          <div>
            <div className="flex justify-center  items-center">
              <Image className='' src='/assets/qualitative_studies.png' width={180} height={90} alt='home doc'/>
            </div>
            <h6 className='text-center font-medium pb-4'>Qualitative Studies &<br /> Quantitative Studies</h6>
          </div>
          <div>
            <div className="flex justify-center  items-center">
              <Image className='' src='/assets/project_management.png' width={180} height={90} alt='home doc'/>
            </div>
            <h6 className='text-center font-medium pb-4'>Project Management</h6>
          </div>
          <div>
            <div className="flex justify-center  items-center">
              <Image className='' src='/assets/qualified_panel.png' width={180} height={90} alt='home doc'/>
            </div>
            <h6 className='text-center font-medium pb-4'>Qualified panel</h6>
          </div>
          <div>
            <div className="flex justify-center  items-center ">
              <div className=''>
                {/* <Image className='' src='/assets/panel_quality.png' width={180} height={90} /> */}
                <Image className=' ' src='/assets/qualityimg.png' width={180} height={120} alt='home doc'/>
              </div>
            </div>
            <h6 className='text-center font-medium pb-4'>Panel Quality Measures</h6>
          </div>
        </div>
      </div>
      <div className='w-screen bg-[#abf0f0] md:flex pb-8'>
        <div className='md:w-[50%]'>
        <div className='flex md:pl-32 pt-20'>
          <p className="w-12 h-12 mx-4 my-1 bg-[#cef3f3] rounded-full text-center text-[#6f7c7c] pt-3">1</p>
          <p className='w-[60%] font-normal text-lg'>We Offer a Platform for Connecting Physicians and Allied Healthcare Professionals.</p>
        </div>
        <div className='flex md:pl-32 pt-20 '>
          <p className="w-12 h-12 mx-4 my-1 bg-[#cef3f3] rounded-full text-center text-[#6f7c7c] pt-3">2</p>
          <p className='md:w-[60%] font-normal text-lg'>We collect perspectives to support decision-making</p>
        </div>
        <div className='flex justify-center md:justify-start'>
        <Link href='/what-we-offer'><button className='mt-2  w-[100%]  md:ml-48 md:mt-8 bg-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full'>Learn More</button></Link>
        </div>
        </div>
        <div className='pt-10'>
          <Image src='/assets/platforms_img.png' width={450} height={300} alt='home doc'/>
        </div>
        
      </div>
    </main>
    </>
  )
}
