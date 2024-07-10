import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import PhoneNumberInput from '@/components/phone-number-input';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Contactus() {
  const [name, set_name] = useState('')
  const [company_name, set_company_name] = useState('')
  const [email, set_email] = useState('')
  const [phone_no, set_phone_no] = useState(null)
  const [message, set_message] = useState("")
  const [err_name, set_err_name] = useState("")
  const [err_company_name, set_err_company_name] = useState("")
  const [err_email, set_err_email] = useState("")
  const [err_phone_no, set_err_phone_no] = useState("")
  const [err_message, set_err_message] = useState("")
  const [show_modal, set_show_modal] = useState(false)
  const [submit_button, set_submit_button] = useState(false)

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
  }, []);

  const submitForm = async () => {
    set_submit_button(true)
    set_err_name("")
    set_err_email("")
    set_err_message("")

    var formIsValid = true;
    if (name == "") {
      set_err_name("Name is required.")
      return formIsValid = false
    }
    else if (name.length < 3) {
      set_err_name("Atleast 3 characters are required.")
      return formIsValid = false
    }
    else if (company_name == "") {
      set_err_company_name("Company Name is required.")
      return formIsValid = false
    }
    else if (company_name.length < 3) {
      set_err_company_name("Atleast 3 characters are required.")
      return formIsValid = false
    }
    else if (email == "") {
      set_err_email("Email is required.")
      return formIsValid = false
    }
    else if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email) == false) {
      set_err_email("Email must be an valid email.")
      return formIsValid = false
    }
    else if (message == "") {
      set_err_message("Message is required.")
      return formIsValid = false
    }
    else if (message.length < 20) {
      set_err_message("Message must be atleast 20 characters of length.")
      return formIsValid = false
    }
    console.log("first",)
    const data = {
      name: name,
      company_name: company_name,
      email: email,
      phone: phone_no,
      message: message
    }

    const reqHeaders = {
      Headers: {
        "Content-Type": "appliction/json"
      }
    }

    // const res = await axios.post('https://krystal-research-backend.onrender.com/api/contact-us', data, reqHeaders)
    const res = await axios.post('/api/contact-email', data, reqHeaders)
    if (res.status == 201) {
      console.log(res.data.message)
      set_name("")
      set_email("")
      set_message("")
      set_show_modal(true)
      set_submit_button(false)
    }
    else {
      console.log(res.data.message)
    }

  }

  const formatPhoneNumber = (number) => {
    if (!number) return '';
    const phoneNumberStr = number.toString();
    const areaCode = phoneNumberStr.slice(0, 3);
    const middle = phoneNumberStr.slice(3, 6);
    const last = phoneNumberStr.slice(6, 10);
    return `(${areaCode}) ${middle}-${last}`;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length <= 11) {
      set_phone_no(formattedInput);
      set_err_phone_no('');
      // onChange(formattedInput);
    }
    // else {
    //   setError('Phone number must be 10 digits.');
    // }
  };

  return (
    <>
      <Head>
        <title>KrystalReseach || Contact-Us</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {show_modal ?
        <>
          <div className="w-screen bg-gray-500 bg-opacity-50  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => set_show_modal(false)} >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center flex align-items-center ">
                  {/* <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg> */}
                  <div className='flex justify-center mt-6 mb-3'>
                    <Image className='' src='/assets/success_modal_img.jpg' width={120} height={120} alt='success' />
                  </div>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Thank You for contacting Krystal Research Solutions. <br /> </h3>
                  <button data-modal-hide="popup-modal" type="button" className="text-white bg-[#002147] hover:underline hover:underline-offset-8 decoration-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-16 py-2.5 text-center mr-2 disabled:bg-opacity-70" onClick={() => set_show_modal(false)} >
                    Done!
                  </button>
                  {/* <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> */}
                </div>
              </div>
            </div>
          </div>
        </>
        :
        null}

      <div  className='w-full relative bg-white pb-10'>
        <div ref={textRef} className=' py-2 lg:py-8 flex justify-center place-items-center h-[620px] md:h-[72vh] w-screen object-cover' style={{ backgroundImage: "url('/assets/contactimg.png')" }}>
          <div className="md:mx-12 sm:pr-96 ">
            {/* <p>hello guys</p> */}
            {/* <h3 className='text-[#5bdcdc] lg:text-5xl sm:text-3xl text-xl font-bold'>CONTACT US:</h3> */}
            <h2 className='mx-4 py-4 text-3xl md:text-5xl  tracking-wide text-[#616663] font-bold leading-tight'>Need an expert you are more than welcomed to leave your contact info and we will be in touch shortly.</h2>
          </div>
        </div>
        {/* <Image src='/assets/contactimg.png' layout='responsive' objectFit='cover' width={1500} height={300} alt='home' /> */}
        <h2 className='text-4xl text-center font-bold text-slate-900 pt-10'>Contact Us</h2>

        <section ref={el => sectionsRef.current[0] = el} className='pt-8 flex justify-center '>
          <div>
            <h5 className='text-2xl font-semibold leading-relaxed text-[#002147]'>Name</h5>
            <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='Name' value={name} onChange={(e) => set_name(e.target.value)} />
            <h6 className='text-red-600 font-normal text-sm pl-2'>{err_name}</h6>
          </div>
        </section>
        <section ref={el => sectionsRef.current[1] = el} className='pt-8 flex justify-center '>
          <div>
            <h5 className='text-2xl font-semibold leading-relaxed text-[#002147]'>Company Name</h5>
            <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='Company Name' value={company_name} onChange={(e) => set_company_name(e.target.value)} />
            <h6 className='text-red-600 font-normal text-sm pl-2'>{err_company_name}</h6>
          </div>
        </section>
        <section ref={el => sectionsRef.current[2] = el} className='pt-8 flex justify-center '>
          <div>
            <h5 className='text-2xl font-semibold leading-relaxed text-[#002147]'>Email</h5>
            <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="email" placeholder='Email' value={email} onChange={(e) => set_email(e.target.value)} />
            <h6 className='text-red-600 font-normal text-sm pl-2'>{err_email}</h6>
          </div>
        </section>
        {/* <PhoneNumberInput */}
        <section ref={el => sectionsRef.current[3] = el} className='pt-8 flex justify-center '>
          <div>
            <h5 className='text-2xl font-semibold leading-relaxed text-[#002147]'>Mobile No</h5>
            <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="tel" placeholder='Mobile No' value={phone_no} onChange={(e) => handlePhoneChange(e)} />
            <h6 className='text-red-600 font-normal text-sm pl-2'>{err_email}</h6>
          </div>
        </section>
        <section ref={el => sectionsRef.current[4] = el} className='pt-8 flex justify-center '>
          <div>
            <h5 className='text-2xl font-semibold leading-relaxed text-[#002147]'>Message</h5>
            <textarea rows='4' className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='Message' value={message} onChange={(e) => set_message(e.target.value)} />
            <h6 className='text-red-600 font-normal text-sm pl-2'>{err_message}</h6>
          </div>
        </section>
        <section ref={el => sectionsRef.current[5] = el} className='pt-8 flex justify-center '>
          <div>
            <div className='flex flex-col justify-center place-items-center bg-[#002147] text-[#EFEFF6] font-bold py-2 px-4 rounded-full group relative cursor-pointer overflow-hidden leading-6 w-[180px]' disabled={submit_button} onClick={() => submitForm()}>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]    font-sans font-medium  px-4'>Submit</span>
              <span className='absolute left-[27%] inline-block translate-y-[120%] rotate-12 p-1 transition duration-300 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-sans font-medium text-white text-center px-4'>Submit</span>
            </div>
            {/* <button className='w-64 md:w-96 bg-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full disabled:opacity-75' disabled={submit_button} onClick={() => submitForm()}>Submit</button> */}
          </div>
        </section>
        {/* <div className='md:flex mx-8 justify-between md:mx-32'>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
          <div className='flex justify-center'>
            <Image className='w-20 h-20 py-5 px-4' src='/assets/mail_icon.png' width={40} height={35} alt='home'/>
            </div>
              <h4 className='text-2xl font-bold'>CONTACT US</h4>
              <p className='text-white px-8 pt-2 pb-3 font-semibold'>pavan.k@krystalresearch.com</p>
          </div>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
          <div className='flex justify-center'>
              <Image className='w-20 h-20 py-5 px-4' src='/assets/call_icon.png' width={40} height={35} alt='home'/>
              </div>
              <h4 className='text-2xl font-bold'>CALL US</h4>
              <p className='text-white px-8 pt-2 pb-3 font-semibold'>PH: +919886911825</p>
          </div>
          <div className='w-72 bg-[#5BDCDC] mx-4 text-center rounded my-4'>
            <div className='flex justify-center'>
              <Image className='w-20 h-20 py-2' src='/assets/home_icon.png' width={40} height={35} alt='home'/>
            </div>
            <h4 className='text-2xl font-bold'>VISIT US</h4>
            <p className='text-white px-8 pt-2 font-semibold'>Krystal Research Solutions</p>
            <p className='text-white px-8 font-semibold'>1st floor, Civil Hospital Road, Fort Area Dharwad</p>
            <p className='text-white px-8 pb-3 font-semibold'>Karnataka - 580008</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Contactus