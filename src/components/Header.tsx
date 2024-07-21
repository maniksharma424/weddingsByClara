"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const LINKS = [
    {
      name: "Welcome",
      url: "/",
      activeUrl: ["/"],
    },
    {
      name: "Weddings",
      url: "/weddings",
      activeUrl: ["/weddings"],
    },
    {
      name: "Testimonials",
      url: "/testimonials",
      activeUrl: ["/testimonials"],
    },
    {
      name: "Services",
      url: "/services",
      activeUrl: ["/services"],
    },
    {
      name: "Contact",
      url: "/contact",
      activeUrl: ["/contact"],
    },
  ];
  const router = useRouter();
  return (
    <div className="w-full flex justify-end items-center sm:gap-4 text-lg ">
      {LINKS?.map((link) => {
        return (
          <li
            className={`list-none text-gray-500 hover:text-black`}
            onClick={() => {
              router.push(link.url);
            }}
            key={link.name}
          >
            {link.name}
          </li>
        );
      })}
    </div>
  );
};

export default Header;
