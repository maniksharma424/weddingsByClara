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
    <div className="w-full flex justify-end items-center gap-2">
      {LINKS?.map((link) => {
        return (
          <li
            className="  list-none"
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
