import React from 'react';
import Image from "next/image";
import image1 from "../../../public/service_images/20160220-IMG_3728.jpg"
import image2 from "../../../public/service_images/AKWedding020.jpg"
import image3 from "../../../public/service_images/T&J_0043.jpg"

const page = () => {
  const images=[image1,image2,image3]
  const services_data=[
    {
      "service_name": "DAY OF COORDINATION",
      "service_text": "For the bride who is planning the wedding on her own and would like some expert advice along the way. Our goal is to take over and make sure that your vision is played out the day of your wedding without having to take care of a thing. We will gather information from you to help you create a detailed timeline of your big day, step in the week of the wedding to get acquainted with your vendors, make sure that we are all on the same page, and be there to make sure everything goes according to plan."
    },
    {
      "service_name": "MONTH OF COORDINATION",
      "service_text": "For the bride who is planning the wedding on her own, and would like someone to step in and take over some tasks the month before the big day. We will gather all information from you and get acquainted with your vendors the month before your wedding day. By stepping in the month before the wedding, we are able to get to know your vendors before hand, communicate any suggestions or timing that may need to be adjusted."
    },
    {
      "service_name": "WEDDING PLANNING ASSISTANCE",
      "service_text": "For the bride who knows what she wants and would like to be involved with the planning, but would like someone by her side to help make decisions along the way and make sure that everything is getting done. We will be there to attend meetingswith your vendors, communicate with them along the way, and help finalize your plans. We know from experience that the majority of the decisions that need to be made during wedding planning can only be made by the client, so we are simply there to help make sure that decisions are being made in a timely manner and the the wheels are turning."
    }
  ]
  return (
    <div className='pt-10'>

      {services_data.map((value,index)=>(
        <div key={index}>
        <div className='flex py-8'>
        <div className='pr-12'>
        <div className='pb-4'>{value.service_name}</div>
        <div className="relative w-80 h-40"> {/* Adjust the size as needed */}
          <Image
            src={images[index]}
            alt={`service_image${index+1}`}
            layout="fill"
            className="object-cover"
          />
        </div>
        </div>

        <div className='pt-4'> 
          <p>{value.service_text}</p>
        </div>

        </div>
        {index!==(services_data.length-1) ? <div><hr /></div>: ''}
        </div>
                
      ))}
      
      <div className="my-5 border-l-2 border-gray-600 px-4">
        Powered by
        <span className=" font-sans ml-2 text-xl font-light">ELEVE BRANDS</span>
      </div>

    </div>
  )
}

export default page