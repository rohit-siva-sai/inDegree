import React from "react";
import { array } from "../../data/future";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Link from "next/link";

const Futuresub = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 mx-16 bg-gray-50">
        {array.map((item) => {
          return (
            <Link href={"/"}>
              <div className="flex flex-col space-y-2 hover:bg-white  items-start  p-2  pr-12">
                <svg
                  fill="none"
                  height="30"
                  viewBox="0 0 34 34"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={item.icons} fill="#50922F"></path>
                </svg>
                <p
                  className={`text-xl ${
                    item.text.includes("Let us match you") ? "pt-1" : "pt-0"
                  } font-semibold`}
                >
                  {item.heading}
                </p>
                <p
                  className={`text-xs font-medium ${
                    item.text.includes("Let us match you") ? "pt-1" : "pt-0"
                  }  text-gray-600`}
                >
                  {item.text}
                </p>
                <div className="self-end p-1 rounded-full bg-lime-50 border border-lime-600 ">
                  <HiOutlineArrowSmRight size={25} className="text-lime-600" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Futuresub;
