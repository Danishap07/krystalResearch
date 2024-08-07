import { useRef, useLayoutEffect, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })


export default function Home() {

  const main = useRef();
  const smoother = useRef();
  const sectionsRef = useRef([]);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  })

  useEffect(() => {
    const sections = sectionsRef.current;
    
    sections.forEach(section => {
      gsap.fromTo(
        section,
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(main.current, {opacity: 0, x: -50},{
      opacity: 1,
      duration: 1,
      x: 20,
      stagger: 1
    })
  }, { scope: main })

  return (
    <>
      <Head>
        <title>KrystalReseach || Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      <main style={poppins.style} className=' ' >
        <div >


          <section  className='w-full'>
            <div className='doctor-img py-2 lg:py-8 w-full bg-cover bg-fixed'  style={{ backgroundImage: "url('/assets/new-design/doctor_img.png')" }}>
              <div ref={main} className="box1 w-[90%] sm:w-[68%]  sm:pl-32  py-20 ">
                <h2  className='lg:text-5xl sm:text-3xl text-2xl tracking-wide text-[#EFEFF6] font-bold leading-tight'>Our Mission is to Empower Access to Quality and Actionable <span className='text-[#002147]'>Healthcare Data</span>.</h2>
                <Link href='/what-we-offer'><div ref={main} className='mt-2 lg:mt-20 bg-[#002147] text-[#EFEFF6] font-bold px-4 rounded-full group relative cursor-pointer overflow-hidden leading-6 w-[180px]'>
                  <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]    font-sans font-medium py-3 px-4'>What We Offer</span>
                  <span className='absolute left-[10%] inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-sans font-medium text-white text-center py-3 px-4'>What We Offer</span>
                  </div></Link>
              </div>
            </div>

          </section>
          <section ref={el => sectionsRef.current[0] = el} className='max-w-screen py-8 '>
            <h4 className='text-center py-4 px-4 lg:px-72 font-semibold text-xl text-slate-900'><span className='text-[#002147]'>WE OFFER</span> Qualitative and Quantitative Healthcare Market Research Services with a Rigorously Authenticated Panel.</h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 px-20">
              <div className='group grid justify-center mt-4'>
                <div className=" max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/qualitaive-studies-img.jpeg' width={175} height={150} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Qualitative &<br /> Quantitative Studies</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className=' bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/project_mangement.jpeg' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Project Management</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/qualified_panel.jpeg' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Qualified Panel</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/panel_quality_measures.jpeg' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Quality Panel Measure</h6>
              </div>
            </div>


          </section>
          <section ref={el => sectionsRef.current[1] = el} className='w-screen flex flex-col md:flex-row md:justify-between place-items-start md:px-32 space-y-4 mb-4'>
            <div className='md:w-[50%]'>
              <div className='flex justify-center text-[#000000]'>
                {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center pt-3 text-white">1</p> */}
                <Image className='w-7 md:w-8 h-10 my-4 pb-4 mr-3' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                <p className='w-[60%] font-normal text-lg '>We Offer a Platform for Connecting Physicians and Allied Healthcare Professionals.</p>
              </div>
              <div className='flex justify-center text-[#000000]'>
                {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">2</p> */}
                <Image className='w-7 md:w-8 h-10 my-7 pb-4 mr-3' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                <p className='w-[60%] pt-4 font-normal text-lg '>We collect perspectives to support decision-making</p>
              </div>
              <div className='flex justify-center md:justify-start'>
                {/* <Link href='/what-we-offer'><button className='mt-2  w-[100%]  md:ml-48 md:mt-8 bg-[#002147] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full'>Learn More</button></Link> */}
                <Link href='/what-we-offer'><div className='mt-6 lg:my-6 w-[250px] md:ml-24 bg-[#002147] text-[#EFEFF6] font-bold px-4 rounded-full group relative cursor-pointer overflow-hidden leading-6 flex flex-col justify-center'>
                  <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-sans font-medium py-3 px-6 text-center'>Learn More</span>
                  <span className='absolute left-[20%] inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-sans font-medium text-white text-center py-3 px-8 '>Learn More</span>
                  </div></Link>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <Image src='/assets/new-design/homepage_bottom.png' width={450} height={300} alt='home doc' />
            </div>

          </section>
        </div>
      </main>
      {/* </SmoothScroll> */}
    </>
  )
}
