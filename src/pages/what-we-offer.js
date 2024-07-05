import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ImageComponent from '@/components/image-component'

function WhatWeOffer() {

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
        //     { opacity: 0, y: 20, scale: 0.8 },
        //     {
        //       opacity: 1,
        //       y: 0,
        //       scale: 1,
        //       duration: 1,
        //       scrollTrigger: {
        //         trigger: section,
        //         // opacity: 1,
        //     // y: 0,
        //     // duration: 1.5,
        //     stagger: 0.1,
        //     delay: 0.5,
        //     ease: 'power4.out',
        //         scrub: true,
        //       },
        //     }
        //   );
        // });
    }, []);


    return (
        <>
            <Head>
                <title>KrystalReseach || What We Offer</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div>
                <div ref={textRef} className='py-10  text-center'>
                    <div className='  md:mx-[25%] mx-4 font-bold'>
                        <h3 className='text-[#002147] text-5xl'>
                            Krystal Research Solutions:
                        </h3>
                        <h3 className='text-4xl text-slate-700 pt-4'>Your One-Stop Shop for Healthcare Market Research</h3>

                    </div>
                    <div className='md:mx-[19%] mx-4 py-10 font-medium text-slate-900'>
                        <p className='py-5'>KRS is the leading provider of healthcare market research fieldwork and data collection services. We offer a wide range of qualitative and quantitative methodologies, all supported by our top-quality healthcare panel.</p>

                        <p className=''>Our panelists are authenticated through a rigorous 5-step process, ensuring that you receive the highest quality data possible.</p>
                    </div>

                </div>
                <div className=''>
                    <section ref={el => sectionsRef.current[0] = el} className='py-18 text-center'>
                        <div className='md:mx-[20%] mx-4 font-bold'>
                            <h3 className='font-bold text-4xl text-center my-6 text-[#002147]'>Our Services: </h3>
                            <h3 className='text-[#002147] text-2xl'>
                                Covering both Qualitative and Quantitative Studies
                            </h3>
                        </div>
                    </section>
                    <section ref={el => sectionsRef.current[1] = el} className='md:mx-32 my-8 '>
                        <h3 className='text-4xl font-semibold text-center md:text-left text-[#002147]'>Qualitative</h3>
                        <div className="md:flex my-4">
                            <div className=' flex justify-center mt-4'>
                                <ImageComponent src='/assets/doc1.png' alt='home doc' />
                            </div>
                            <div className='flex flex-col lg:items-end md:w-[100%] mx-4 md:ml-20'>

                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>IDIs</p>
                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>TDIs</p>
                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>Moderation</p>
                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>KOLs</p>
                            </div>
                        </div>
                    </section>

                    <section ref={el => sectionsRef.current[2] = el} className='md:mx-32'>
                        <h3 className='text-4xl font-semibold text-center md:text-left text-[#002147]'>Quantitative</h3>
                        <div className="md:flex">
                            <div className='flex justify-center mt-4'>
                                <ImageComponent src='/assets/doc2.png' alt='home doc' />
                            </div>
                            <div className='flex flex-col lg:items-end md:w-[100%] mx-4 md:ml-20'>

                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>Online top-ups and full service projects</p>
                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>Trackers</p>
                                <p className='my-3 text-center xl:text-2xl lg:w-[35vw] bg-gradient-to-r from-[#D6F6F6] to-slate-50  font-semibold p-2 pl-2 rounded-full text-black'>PRFs</p>
                                {/* <p className='my-4 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>KOLs</p> */}
                            </div>
                        </div>
                    </section>

                    <section ref={el => sectionsRef.current[3] = el} className='py-6'>
                        <h3 className='font-bold text-4xl text-center my-6 text-[#002147]'>Project Management:</h3>
                        <div className='md:flex md:justify-between my-6 px-2 md:mx-[10%]'>
                            <div className="md:w-[30%] flex">
                                <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home doc' />
                                <p className='text-lg font-medium py-4 text-slate-900'>We provide PM support upto 15-16 hours.</p>
                            </div>
                            <div className="md:w-[30%] flex ">
                                <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                                <p className='text-lg font-medium py-4 text-slate-900'>Single POC for Adhoc or multi country projects.</p>

                            </div>
                            <div className="md:w-[30%] flex">
                                <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                                <p className='text-lg font-medium py-4 text-slate-900'>After project commissioning, we testing and launch studies programmed by clients with 2 hour lead time</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section ref={el => sectionsRef.current[4] = el} className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 text-center text-lg py-8'>
                    <h3 className='font-bold text-4xl pt-6 text-[#002147]'>Panel Details:</h3>
                    <p className='px-3 py-10 md:mx-36 font-semibold text-slate-900'>Give your business research the advantage of ease and efficacy with first party, quality panels. Benefit from multi-dimensional reach with our expansive online panel community across North America, Europe countries, Soon we will have presence in South American and APAC region.</p>
                </section>

                <section ref={el => sectionsRef.current[5] = el} className='bg-white'>
                    <h3 className='text-center text-4xl font-bold py-4 text-[#002147]'>Condition Covered:</h3>
                    <div className='md:flex md:justify-between xl:mx-28'>
                        <ul className='pl-6 list-disc  font-semibold leading-relaxed text-lg md:py-4 md:pl-16 md:pr-6'>
                            <li className='py-2 text-slate-900'>Allergies – Food, Drugs, Pets</li>
                            <li className='py-2 text-slate-900'>Bone and Joint – Arthritis, Osteoporosis, back pain</li>
                            <li className='py-2 text-slate-900'>Cancer – Breast, Lung, Colorectal</li>
                            <li className='py-2 text-slate-900'>Chronic Diseases – Multiple Sclerosis</li>
                            <li className='py-2 text-slate-900'>Diabetes - Type 1 and 2</li>
                            <li className='py-2 text-slate-900'>Digestive Conditions – IBD, Crohn&apos;s Disease, Ulcerative Colitis, GERD, IBS</li>
                            <li className='py-2 text-slate-900'>Eye Conditions -Cataract, Dry eye, Glaucoma</li>
                            <li className='py-2 text-slate-900'>Female Conditions – Menopause, Fibroids, PMS, Endometriosis</li>
                            <li className='py-2 text-slate-900'>Heart conditions - High Cholesterol, Heart Failure/Stroke</li>
                        </ul>
                        <ul className='pl-6 list-disc font-2xl font-semibold leading-relaxed text-lg md:py-4 md:pl-16 md:pr-6'>
                            <li className='py-2 text-slate-900'>Kidney Conditions – CKD</li>
                            <li className='py-2 text-slate-900'>Liver Conditions – Hepatitis C</li>
                            <li className='py-2 text-slate-900'>Male Conditions - Erectile dysfunction, Prostate enlargement, Impotence</li>
                            <li className='py-2 text-slate-900'>Neurological Disorders - Epilepsy, Alzheimer&apos;s Disease, Migraines, Parkinson&apos;s Disease</li>
                            <li className='py-2 text-slate-900'>Psychological Disorders – ADHD, Anxiety, Bipolar, Disorder, Depression, Schizophrenia</li>
                            <li className='py-2 text-slate-900'>Respiratory – Asthma, COPD</li>
                            <li className='py-2 text-slate-900'>Skin Conditions – Acne, Atopic Dermatitis, Eczema, Psoriasis</li>
                            <li className='py-2 text-slate-900'>Thyroid conditions – Hyperthyroid, Hypothyroid</li>
                            <li className='py-2 text-slate-900'>Urological Conditions - Overactive Bladder</li>
                        </ul>
                    </div>
                </section>

                <section ref={el => sectionsRef.current[6] = el} className='bg-gradient-to-r from-[#D6F6F6] to-slate-50 '>
                    <h3 className='text-center font-bold text-4xl py-6 text-[#002147]'>Panel Quality Measures:</h3>
                    <h4 className='text-[#002147] text-center text-2xl font-bold '>Quality is managed and ensured via 5-step panel authentication process.</h4>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='flex  md:mx-44  py-6 w-[400px]'>
                            {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">1</p> */}
                            <Image className='w-8 h-7 ' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                            <p className='md:pl-6  font-medium text-lg text-slate-900'>Double opt-in</p>
                        </div>
                        <div className='flex  md:mx-44  py-6 w-[400px]'>
                            {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">2</p> */}
                            <Image className='w-8 h-7 ' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                            <p className='md:pl-6  font-medium text-lg text-slate-900'>Mobile Verification</p>
                        </div>
                        <div className='flex  md:mx-44  py-6 w-[400px]'>
                            {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">3</p> */}
                            <Image className='w-8 h-7 ' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                            <p className='md:pl-6 font-medium text-lg text-slate-900'>License/NPI/ME verification</p>
                        </div>
                        <div className='flex  md:mx-44  py-6 w-[400px]'>
                            {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">4</p> */}
                            <Image className='w-8 h-7 ' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                            <p className='md:pl-6 font-medium text-lg text-slate-900'>Online and social media authentication</p>
                        </div>
                        <div className='flex  md:mx-44  py-6 w-[400px]'>
                            {/* <p className="w-12 h-12 mx-4 my-1 bg-gradient-to-r from-[#002147] via-[#6f7c7c] to-[#ffffff] rounded-full text-center text-white pt-3">5</p> */}
                            <Image className='w-8 h-7 ' src='/assets/new-design/project_marker.png' width={40} height={35} alt='home' />
                            <p className='md:pl-6 font-medium text-lg text-slate-900'>Monitoring responses in Surveys</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WhatWeOffer