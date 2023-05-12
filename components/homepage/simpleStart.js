import React from "react";
import { HiSearch, HiOutlineDesktopComputer } from "react-icons/hi";
import { FiMousePointer } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

const SimpleStart = () => {
  return (
    <div className="pb-0" >
      <div className="bg-[#233870] flex flex-col justify-center items-center py-8 text-white space-y-3">
        <p className="text-2xl font-semibold">Simple steps to start</p>
        <p className="w-3/5 px-6 text-center font-light">
          It can be hard to know where to start. That's why we're here to guide
          you. We can clear the confusion so, you can find and enroll in the
          right course for you.
        </p>
        <div className="grid grid-cols-1 pt-6 justify-items-center">
          <div className="flex items-center">
            <div className="p-3 border-white border rounded-full ">
              <HiSearch className="text-white text-3xl" />
            </div>
            <div className="w-48 h-[2px] bg-white"></div>
            <div className="p-3 border-white border rounded-full ">
              <FiMousePointer className="text-white text-3xl" />
            </div>
            <div className="w-48 h-[2px] bg-white"></div>
            <div className="p-3 border-white border rounded-full ">
              <HiOutlineDesktopComputer className="text-white text-3xl" />
            </div>
            <div className="w-48 h-[2px] bg-white"></div>
            <div className="p-3 bg-white border-white border rounded-full ">
              <BsCheck2Circle className="text-[#233870] text-3xl" />
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6  px-64 ">
            <div className="text-center  px-6 text-base">
              <p className="py-2">Explore</p>
              <p className="text-xs">
                Thousands of degrees, subjects and short courses from leading
                Australian unis in one place.
              </p>
            </div>
            <div className="text-center  px-6 text-sm">
              <p className="py-2">Choose</p>
              <p className="text-xs">
                Guidance to find your best option, based on what's important to
                you
              </p>
            </div>
            <div className="text-center  px-6 text-sm">
              <p className="py-2">Enroll</p>
              <p className="text-xs">
                Simplified online enrollment to give you easy access to uni
                study.
              </p>
            </div>
            <div className="text-center  px-6 text-sm">
              <p className="py-2">Start</p>
              <p className="text-xs">
                Get started on your study journey today.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 hover:border-2  mx-auto w-fit text-xs rounded-2xl border-white border text-white cursor-pointer ">
          Let's get started
        </div>
      </div>
    </div>
  );
};

export default SimpleStart;
