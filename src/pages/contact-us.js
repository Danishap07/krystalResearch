import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import SuccessPopupModal from '@/components/successPopupModal';

function Contactus() {
  const [name, set_name] = useState('')
  const [email, set_email] = useState('')
  const [message, set_message] = useState("")
  const [err_name, set_err_name] = useState("")
  const [err_email, set_err_email] = useState("")
  const [err_message, set_err_message] = useState("")
  const [show_modal, set_show_modal] = useState(false)
  const [submit_button, set_submit_button] = useState("Submit")

  const submitForm = async () => {
    set_err_name("")
    set_err_email("")
    set_err_message("")

    var formIsValid = true;
    if(name == "") {
      set_err_name("Name is required.")
      return formIsValid = false
    }
    else if(name.length < 3) {
      set_err_name("Atleast 3 characters are required.")
      return formIsValid = false
    }
    else if(email == "") {
      set_err_email("Email is required.")
      return formIsValid = false
    }
    else if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email) == false) {
      set_err_email("Email must be an valid email.")
      return formIsValid = false
    }
    else if(message == "") {
      set_err_message("Message is required.")
      return formIsValid = false
    }
    else if(message.length < 20) {
      set_err_message("Message must be atleast 20 characters of length.")
      return formIsValid = false
    }
    console.log("first", )

    const data = {
      name: name, 
      email: email, 
      message: message
    }

    const reqHeaders = {
      Headers: {
        "Content-Type": "appliction/json"
      }
    }

    const res = await axios.post('https://krystal-research-backend.onrender.com/api/contact-us', data, reqHeaders)
    if(res.status == 201) {
      console.log(res.data.message)
      set_name("")
      set_email("")
      set_message("")
      set_show_modal(true)
    }
    else {
      console.log(res.data.message)
    }

  } 
  return (
    <>
      <Head>
        <title>KrystalReseach || Contact-Us</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      { show_modal? 
      <>
      <div className="w-screen bg-gray-500 bg-opacity-50  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => set_show_modal(false)} >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center ">
                {/* <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg> */}
                <div className='flex justify-center mt-6 mb-3'>
                <Image className='' src='/assets/success_modal_img.jpg' width={120} height={120} alt='success' />
                </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Thank You for contacting Krystal Research Solutions. <br/> </h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2 focus:ring-4 focus:outline-none  dark:focus:ring-[#5bdcdc] font-medium rounded-lg text-sm inline-flex items-center px-16 py-2.5 text-center mr-2" onClick={() => set_show_modal(false)}>
                    Done!
                </button>
                {/* <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> */}
            </div>
        </div>
    </div>
      </div>
    </>
        : 
        null }

      <div className='w-full relative bg-white pb-10'>
        <div className='absolute py-2 lg:py-8'>
          <div className="md:mx-[14%] mx-4 text-center sm:py-10">
            {/* <p>hello guys</p> */}
            <h3 className='text-[#5bdcdc] lg:text-5xl sm:text-3xl text-xl font-bold'>CONTACT US:</h3>
            <h2 className='mx-4 pt-4 lg:text-5xl sm:text-3xl text-xl tracking-wide text-[#616663] font-bold leading-tight'>Need an expert you are more than welcomed to leave your contact info and we will be in touch shortly.</h2>
          </div>
        </div>
        <Image src='/assets/contactimg.png' layout='responsive' objectFit='cover' width={1500} height={300} alt='home'/>
        <h2 className='text-4xl text-center font-semibold text-slate-900 pt-10'>Contact Us</h2>

        <div className='pt-8 flex justify-center '>
          <div>
          <h5 className='text-2xl font-semibold leading-relaxed text-[#5bdcdc]'>Name</h5>
          <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Name' value={name} onChange={(e)=> set_name(e.target.value)} />
          <h6 className='text-red-600 font-normal text-sm pl-2'>{err_name}</h6>
          </div>
        </div>
        <div className='pt-8 flex justify-center '>
          <div>
          <h5 className='text-2xl font-semibold leading-relaxed text-[#5bdcdc]'>Email</h5>
          <input className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" placeholder='Email' value={email} onChange={(e) => set_email(e.target.value)} />
          <h6 className='text-red-600 font-normal text-sm pl-2'>{err_email}</h6>
          </div>
        </div>
        <div className='pt-8 flex justify-center '>
          <div>
          <h5 className='text-2xl font-semibold leading-relaxed text-[#5bdcdc]'>Message</h5>
          <textarea rows='4' className="block p-2.5 w-64 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Message' value={message} onChange={(e) => set_message(e.target.value)} />
          <h6 className='text-red-600 font-normal text-sm pl-2'>{err_message}</h6>
          </div>
        </div>
        <div className='pt-8 flex justify-center '>
          <div>
          <button className='w-64 md:w-96 bg-[#5bdcdc] hover:underline hover:underline-offset-8 decoration-2 text-white font-bold py-2 px-4 rounded-full focus:disabled:opacity-75' onClick={() => submitForm()}>Submit</button>
          </div>
        </div>
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