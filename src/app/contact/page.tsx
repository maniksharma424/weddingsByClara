'use client'
import React from 'react'
import ContactForm from '../../components/contactUs'


const page = () => {
  return (
    <div className='pt-10'>

      <div className='grid grid-cols-4'>
        
        <div className='col-span-2 pr-8'>
        <div className='pb-8'>Contact us</div>
        <div><p>I can’t wait to hear from you! Please feel free to share anything you would like me to know about your big day. (If you don’t hear back from me within 48 hours, please check your spam folder)</p></div>
        </div>

        <div className='col-span-2'>
          <ContactForm />
        </div>

      </div>
      
      <div className="my-5 border-l-2 border-gray-600 px-4">
        Powered by
        <span className=" font-sans ml-2 text-xl font-light">ELEVE BRANDS</span>
      </div>

    </div>
  )
}

export default page