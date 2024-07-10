import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function AboutUs() {

  const textRef = useRef(null);
    const sectionsRef = useRef([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
      })
    

  useEffect(() => {
    const text = textRef.current;

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power4.out',
      }
    );

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
    // sections.forEach(section => {
    //   gsap.fromTo(
    //     section,
    //     { opacity: 0, y: -50, scale: 0.8 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       scale: 1,
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: section,
    //         start: 'top 80%',
    //         end: 'bottom 20%',
    //         scrub: true,
    //       },
    //     }
    //   );
    // });
  }, []);

  return (
    <>
      <Head>
        <title>KrystalReseach || About-Us</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <div>
      <div ref={textRef} className='py-10 bg-gradient-to-r from-[#D6F6F6] to-slate-50 text-center'>
        <div className='  md:mx-[25%] mx-4 font-bold'>
          <h3 className='text-[#002147] text-5xl'>
            Krystal Research Solutions:
          </h3>
          <h3 className='text-4xl text-slate-700 pt-4'>Your Healthcare Market Research Partner</h3>

        </div>
        <div className='md:mx-[19%] mx-4 py-10 font-medium text-black'>
          <p className='py-5'>Founded in 2023, Krystal Research Solutions (KRS) is a passionate team of healthcare market research experts with over 20 years of combined experience. We help our clients make informed decisions and achieve superior results by providing them with quality, actionable data.</p>

          <p className=''>Our core focus is on developing a footprint in fieldwork practice (qualitative and quantitative), with a growing healthcare panel across North America, Europe, South America, and APAC. We cater to all healthcare market research projects via different methodologies, and we continue to support our clients with our capabilities and best practice insights</p>
        </div>

      </div>
      <section ref={el => sectionsRef.current[0] = el} className=' pb-10'>
        <h3 className='text-4xl font-bold text-center py-6 text-[#002147] '>WHY KRS?</h3>
        <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-3 font-semibold text-black'>We are passionate about healthcare market research.</p>
        </div>
        <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-3 font-semibold text-black'>We have a highly experienced and skilled team.</p>
        </div>
        <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-3 font-semibold text-black'>We offer a wide range of qualitative and quantitative research services.</p>
        </div>
        <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-3 font-semibold text-black'>We have a growing healthcare panel across North America, Europe, South America, and APAC.</p>
        </div>
        <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-6 rounded-full md:mx-32'>
          <p className='text-center py-2 px-2 mt-3 font-semibold text-black'>We are committed to providing our clients with quality, actionable data.</p>
        </div>
      </section>
      <section ref={el => sectionsRef.current[1] = el} className='py-6  text-center'>
        <h3 className='text-4xl font-bold text-center  py-6 uppercase text-[#002147]'>How can we help you?</h3>
        <div className='md:flex justify-between md:mx-16'>
          <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-16 my-4 py-4 rounded-2xl space-y-3'>
            <h6 className='leading-6 font-bold text-xl'>Make more Informed Decisions:</h6>
            <p className='md:mx-12 mx-4 font-semibold text-black'>Our research insights can help you understand your target market, identify opportunities, and make better strategic decisions.</p>
          </div>
          <div className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 mx-16 my-4 py-4 rounded-2xl space-y-3'>
            <h6 className='leading-6 font-bold text-xl '>Achieve Superior Results:</h6>
            <p className='md:mx-12 mx-4 font-semibold text-black'>Our research can help you develop and launch new products and services, improve your marketing campaigns, and expand into new markets.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AboutUs