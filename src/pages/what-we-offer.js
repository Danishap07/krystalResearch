import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function WhatWeOffer() {
    return (
        <>
      <Head>
        <title>KrystalReseach || What We Offer</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <div>
            <div className='py-10 bg-gradient-to-r from-[#D6F6F6] to-slate-50 text-center'>
                <div className='  md:mx-[25%] mx-4 font-bold'>
                    <h3 className='text-[#5bdcdc] text-5xl'>
                        Krystal Research Solutions:
                    </h3>
                    <h3 className='text-4xl text-slate-700 pt-4'>Your One-Stop Shop for Healthcare Market Research</h3>

                </div>
                <div className='md:mx-[19%] mx-4 py-10 font-medium text-slate-900'>
                    <p className='py-5'>KRS is the leading provider of healthcare market research fieldwork and data collection services. We offer a wide range of qualitative and quantitative methodologies, all supported by our top-quality healthcare panel.</p>

                    <p className=''>Our panelists are authenticated through a rigorous 5-step process, ensuring that you receive the highest quality data possible.</p>
                </div>

            </div>
            <div className='bg-white'>
            <div className='py-10 text-center'>
                <div className='md:mx-[25%] mx-4 font-bold'>
                    <h3 className='font-bold text-4xl text-center my-6 text-slate-900'>Our Services: </h3>
                    <h3 className='text-[#5bdcdc] text-2xl'>
                        Covering both Qualitative and Quantitative Studies
                    </h3>
                </div>
            </div>
            <div className='md:flex justify-between md:mx-32 '>
                <div className='md:w-[100%] mx-4 md:ml-20'>
                    <h3 className='text-4xl font-semibold text-slate-900'>Qualitative</h3>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>IDIs</p>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>TDIs</p>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>Moderation</p>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>KOLs</p>
                </div>
                <div className='mx-4 md:ml-20 mt-4'>
                    <Image src='/assets/doc1.png' width={1100} height={300} alt='home doc'/>
                </div>
            </div>

            <div className='md:flex justify-between md:mx-32 my-6'>
                <div className='mx-4 md:ml-20 mt-4'>
                    <Image src='/assets/doc2.png' width={1100} height={300} alt='home doc'/>
                </div>
                <div className='md:w-[100%] mx-4 md:ml-12 '>
                    <h3 className='text-4xl font-semibold text-slate-900'>Quantitative</h3>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>Online top-ups and full service projects</p>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>Trackers</p>
                    <p className='my-6 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>PRFs</p>
                    {/* <p className='my-4 bg-[#abf0f0] font-semibold p-2 pl-2 rounded-full text-black'>KOLs</p> */}
                </div>
                </div>
            
            <div className='py-6'>
                <h3 className='font-bold text-4xl text-center my-6 text-slate-900'>Project Management:</h3>
                <div className='md:flex md:justify-between my-6 px-2 md:mx-[10%]'>
                    <div className="md:w-[30%] flex">
                        <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/project_marker.png' width={40} height={35} alt='home doc' />
                        <p className='text-lg font-medium py-4 text-slate-900'>We provide PM support upto 15-16 hours.</p>
                    </div>
                    <div className="md:w-[30%] flex ">
                        <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/project_marker.png' width={40} height={35} alt='home'/>
                        <p className='text-lg font-medium py-4 text-slate-900'>Single POC for Adhoc or multi country projects.</p>

                    </div>
                    <div className="md:w-[30%] flex">
                        <Image className='w-8 h-10 my-7 pb-4 mr-3' src='/assets/project_marker.png' width={40} height={35} alt='home'/>
                        <p className='text-lg font-medium py-4 text-slate-900'>After project commissioning, we testing and launch studies programmed by clients with 2 hour lead time</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='bg-[#abf0f0] text-center text-lg py-8'>
                <h3 className='font-bold text-4xl pt-6 text-slate-900'>Panel Details:</h3>
                <p className='px-3 py-10 md:mx-36 font-semibold text-slate-900'>Give your business research the advantage of ease and efficacy with first party, quality panels. Benefit from multi-dimensional reach with our expansive online panel community across North America, Europe countries, Soon we will have presence in South American and APAC region.</p>
            </div>

            <div className='bg-white'>
                <h3 className='text-center text-4xl font-bold py-4 text-slate-900'>Condition Covered:</h3>
                <div className='md:flex md:justify-between'>
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
            </div>

            <div className='bg-[#bdf8f8]'>
                <h3 className='text-center font-bold text-4xl md:text-3xl  py-4 text-slate-900'>Panel Quality Measures:</h3>
                <h4 className='text-[#4ad6d6] text-center text-2xl font-bold md:mx-96'>Quality is managed and ensured via 5-step panel authentication process.</h4>

                <div className='flex align-middle  md:mx-40 pb-8'>
                <p className="w-12 h-12 mx-4 px-5 my-1 bg-[#4ad6d6] font-semibold rounded-full text-center text-[#ffffff] pt-3">1</p>
                <p className='md:pl-6 pt-3 font-medium text-lg text-slate-900'>Double opt-in</p>
                </div>
                <div className='flex align-middle md:mx-40 pb-8'>
                <p className="w-12 h-12 mx-4 px-5 my-1 bg-[#4ad6d6] font-semibold rounded-full text-center text-[#ffffff] pt-3">2</p>
                <p className='md:pl-6 pt-3 font-medium text-lg text-slate-900'>Mobile Verification</p>
                </div>
                <div className='flex align-middle md:mx-40 pb-8'>
                <p className="w-12 h-12 mx-4 px-5 my-1 bg-[#4ad6d6] font-semibold rounded-full text-center text-[#ffffff] pt-3">3</p>
                <p className='md:pl-6 pt-3 font-medium text-lg text-slate-900'>License/NPI/ME verification</p>
                </div>
                <div className='flex align-middle md:mx-40 pb-8'>
                <p className="w-12 h-12 mx-4 px-5 my-1 bg-[#4ad6d6] font-semibold rounded-full text-center text-[#ffffff] pt-3">4</p>
                <p className='md:pl-6 pt-3 font-medium text-lg text-slate-900'>Online and social media authentication</p>
                </div>
                <div className='flex align-middle md:mx-40 pb-8'>
                <p className="w-12 h-12 mx-4 px-5 my-1 bg-[#4ad6d6] font-semibold rounded-full text-center text-[#ffffff] pt-3">5</p>
                <p className='md:pl-6 pt-3 font-medium text-lg text-slate-900'>Monitoring responses in Surveys</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatWeOffer