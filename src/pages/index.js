import { useRef, useLayoutEffect, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
// import gsap from 'gsap'
import { gsap } from "gsap";
/* The following plugin is a Club GSAP perk */
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SmoothScroll from '@/components/smoothScroll'
import CustomCursor from '@/components/customCursor'
import { MenuButton } from '@/components/menu-button'


// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

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
      // delay: 0.5,
      stagger: 1
    })
    // gsap.from ("button", {
    //   opacity: 0,
    //   duration: 2,
    //   x: -50,
    //   delay: 1.5
    // })
  }, { scope: main })


  // gsap.set(".ball", { xPercent: -50, yPercent: -50 })
  // let targets = gsap.utils.toArray(".ball");
  // window.addEventListener("mousemove", (e) => {
  //   gsap.to(targets, {
  //     duration: 1,
  //     x: e.clientX,
  //     y: e.clientY,
  //     ease: "power1.out",
  //     overwrite: "auto",
  //     stagger: 0.02,
  //   });
  // });

  //   const pin = gsap.fromTo(main.current, {
  //     translateY: 0
  //   }, {
  //     translateY: "-300vh",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: smoother.current,
  //       start: "top top",
  //       end: "2000 bottom",
  //       scrub: 0.6,
  //       pin: true,
  //     }
  //   })
  //   return () => {
  //     {/* A return function for killing the animation on component unmount */ }
  //     pin.kill();
  //   };


  //   useGSAP(() => {
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //   }, 
  //   {scope: main}
  // )

  return (
    <>
      <Head>
        <title>KrystalReseach || Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <CustomCursor /> */}
      {/* <SmoothScroll> */}
      {/* <div className="ball bg-[#171926] w-[10px] h-[10px] fixed top-0  left-0 rounded-xl"></div> 
      <div className="follower-ball bg-transparent w-[10px] h-[10px] fixed top-0  left-0 rounded-xl"></div> */}
      <main style={poppins.style} className=' ' >
        <div >


          <section  className='w-full'>
            {/* <Navbar /> */}
            {/* Home */}
            <div className='doctor-img py-2 lg:py-8 w-full bg-cover bg-fixed'  style={{ backgroundImage: "url('/assets/new-design/doctor_img.png')" }}>
              <div ref={main} className="box1 w-[90%] sm:w-[68%]  sm:pl-32  py-20 ">
                {/* <p>hello guys</p> */}
                <h2  className='lg:text-5xl sm:text-3xl text-2xl tracking-wide text-[#EFEFF6] font-bold leading-tight'>Our Mission is to Empower Access to Quality and Actionable <span className='text-[#002147]'>Healthcare Data</span>.</h2>
                <Link href='/what-we-offer'><div ref={main} className='mt-2 lg:mt-20 bg-[#002147] text-[#EFEFF6] font-bold px-4 rounded-full group relative cursor-pointer overflow-hidden leading-6 w-[180px]'>
                  <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]    font-sans font-medium py-3 px-4'>What We Offer</span>
                  <span className='absolute left-[10%] inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-sans font-medium text-white text-center py-3 px-4'>What We Offer</span>
                  </div></Link>
                {/* <Link href='/what-we-offer'><MenuButton className="">What We offer</MenuButton></Link> */}
              </div>
            </div>
            {/* <div className='bg-opacity-50'>
                
            <Image className='' src='/assets/new-design/doctor_img.png'  objectFit='cover' width={1500} height={300} alt='home doc' />
            </div> */}

          </section>
          <section ref={el => sectionsRef.current[0] = el} className='max-w-screen py-8 '>
            <h4 className='text-center py-4 px-4 lg:px-72 font-semibold text-xl text-slate-900'><span className='text-[#002147]'>WE OFFER</span> Qualitative and Quantitative Healthcare Market Research Services with a Rigorously Authenticated Panel.</h4>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 px-20">
              <div className='group grid justify-center mt-4'>
                <div className=" max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/qualitaive-studies-img.png' width={175} height={150} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Qualitative &<br /> Quantitative Studies</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className=' bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/project_mangement.png' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Project Management</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/qualified_panel.png' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Qualified Panel</h6>
              </div>
              <div className='group grid justify-center mt-4'>
                <div className="max-h-[150px] max-w-[175px] w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <Image className='bg-gradient-to-b from-[#00224780] rounded h-full w-full object-cover object-center group-hover:opacity-75' src='/assets/new-design/panel_quality_measure.png' width={180} height={90} alt='home doc' />
                </div>
                <h6 className='text-center font-medium pb-4 text-slate-900 mt-4'>Quality Panel Measure</h6>
              </div>
            </div>


          </section>
          <section ref={el => sectionsRef.current[1] = el} className='w-screen md:flex justify-between place-items-start pb-8 md:px-32'>
            <div className='md:w-[50%]'>
              <div className='flex  pt-20 text-[#000000]'>
                <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center pt-3 text-white">1</p>
                <p className='w-[60%] font-normal text-lg '>We Offer a Platform for Connecting Physicians and Allied Healthcare Professionals.</p>
              </div>
              <div className='flex  pt-20 text-[#000000]'>
                <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">2</p>
                <p className='w-[60%] font-normal text-lg '>We collect perspectives to support decision-making</p>
              </div>
              <div className='flex justify-center md:justify-start'>
                <Link href='/what-we-offer'><button className='mt-2  w-[100%]  md:ml-48 md:mt-8 bg-[#002147] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full'>Learn More</button></Link>
              </div>
            </div>
            <div className='pt-20'>
              <Image src='/assets/platforms_img.png' width={450} height={300} alt='home doc' />
            </div>

          </section>
        </div>
      </main>
      {/* </SmoothScroll> */}
    </>
  )
}
