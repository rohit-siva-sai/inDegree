import Link from "next/link";
import React from "react";
import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-[#233870] py-4 text-white">
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col space-y-2">
          <div className="font-semibold">
            Open <br /> University
          </div>
          <div className="flex space-x-2">
            <div className="p-3 cursor-pointer hover:border-2 border w-fit rounded-full border-white ">
              <GrFacebook className="text-white " />
            </div>
            <div className="p-3 cursor-pointer hover:border-2 border w-fit rounded-full border-white ">
              <GrTwitter className="text-white " />
            </div>
            <div className="p-3 cursor-pointer hover:border-2 border w-fit rounded-full border-white ">
              <GrInstagram className="text-white " />
            </div>
            <div className="p-3 cursor-pointer hover:border-2 border w-fit rounded-full border-white ">
              <GrLinkedin className="text-white " />
            </div>
            <div className="p-3 cursor-pointer hover:border-2 border w-fit rounded-full border-white ">
              <TfiYoutube className="text-white " />
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-20" >
          <div className="flex flex-col space-y-3">
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Contact Us
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Universities
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                MBA Online
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                About Us
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Your career
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Partner Hub
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                OUA Blog
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                FAQ and glossary
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Media center
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Work with us
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Partnerships
              </div>
            </Link>
            <Link href={""}>
              <div className="underline text-sm hover:decoration-2 cursor-pointer decoration-white decoration-1 underline-offset-2">
                Courses
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
