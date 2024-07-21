"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../public/Images/IMG_1491.JPG";
import image2 from "../../public/Images/IMG_0707.JPG";
import image3 from "../../public/Images/IMG_1925.JPG";
import image4 from "../../public/Images/location_wedding.jpg";
import image5 from "../../public/Images/IMG_5149.JPG";
import image6 from "../../public/Images/IMG_6297.JPG";

export default function Home() {
  const images = [image1, image2, image3];

  return (
    <div className="py-10">
      <div className="flex justify-between w-full h-[500px] overflow-hidden">
        {images.map((image, i) => (
          <div key={i} className="w-1/3 h-full relative">
            <Image
              src={image}
              alt={`Image ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="py-12 text-gray-500 tracking-widest text-2xl font-light">
        HELLO AND WELCOME TO WEDDINGS BY CLARA! MY GOAL IS TO HELP COUPLES
        CREATE THEIR INDIVIDUAL VERSION OF THE PERFECT WEDDING. AFTER MANY YEARS
        OF EXPERIENCE IN THE WEDDING INDUSTRY, I WOULD LOVE TO SHARE MY
        KNOWLEDGE WITH YOU TO HELP YOU SAVE TIME AND MONEY, WHILE FEELING
        CONFIDENT IN THE CHOICES YOU MAKE ALONG THE WAY. WHETHER YOU'RE LOOKING
        FOR A WEDDING PLANNER OR A 'DAY OF' COORDINATOR, MY TEAM AND I STRIVE TO
        OFFER OUTSTANDING SERVICE, MORAL SUPPORT, PEACE OF MIND, AND OUR MOST
        SINCERE EFFORTS TO MAKE YOUR WEDDING DAY PERFECT.
      </div>
      <div className="py-10">
        <h1 className=" text-3xl font-bold">WHY CHOOSE WEDDINGS BY CLARA? </h1>
        <ul className="my-5 text-xl font-medium text-gray-700 flex flex-col gap-5">
          <li className=" list-disc">
            WE ARE SEASONED PROFESSIONALS WHO HAVE BEEN IN THE INDUSTRY FOR
            YEARS.
          </li>
          <li className=" list-disc">
            WE ARE EXPERTS IN PLANNING SEAMLESS, MEMORABLE EVENTS, WE KNOW
            EXACTLY WHAT TO EXPECT WHEN THE BIG DAY ARRIVES.
          </li>
          <li className=" list-disc">
            WE OFFER SUPPORT TO THOSE WITH ANY SIZE BUDGET. ALL OF OUR PACKAGES
            INCLUDE CONTACT THROUGHOUT THE PLANNING PROCESS, OFFERING ADVICE AND
            SUPPORT ALONG THE WAY FOR THOSE WHO NEED IT.
          </li>
          <li className=" list-disc">
            WE LOVE THE PLANET AND ARE ALWAYS HAPPY TO LOAN CLIENTS OUR
            COLLECTION OF WEDDING DAY NECESSITIES INCLUDING CAKE STANDS, EASELS,
            TABLE NUMBERS, SIGNAGE, AND MORE!
          </li>
          <li className=" list-disc">
            WE LOVE TO SEE OUR CLIENTS HAPPY, HAVING FUN, AND STRESS FREE ON
            THEIR WEDDING DAY.
          </li>
        </ul>
      </div>
      <div className=" my-10 flex h-[400px]">
        <div className="w-1/4  relative h-full">
          <Image
            src={image6}
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/4  relative h-full">
          <Image
            src={image4}
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/4 h-full relative">
          <Image
            src={image5}
            alt="Image 6"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="my-5 border-l-2 border-gray-600 px-4">
        Powered by
        <span className=" font-sans ml-2 text-xl font-light">ELEVE BRANDS</span>
      </div>
    </div>
  );
}
