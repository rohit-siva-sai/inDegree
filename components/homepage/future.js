import Link from "next/link";
import React from "react";
import Futuresub from "./futuresub";

const Future = () => {
  return (
    <div className="pb-8 pt-8 " >
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="mx-16 flex flex-col space-y-6 " >
          <p className="text-4xl font-bold" >Your future starts here.</p>
          <p className="text-sm text-gray-600" >
            With over 500 code schools worldwide, you should do your research
            before choosing which one will kickstart your career in tech. From
            price to time-commitment to technology stack, Course Report provides
            all the details you need to choose the coding bootcamp that's right
            for you.
          </p>
          <div className="flex space-x-5">
            <Link href="/brandStore">
              <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-lime-500 bg-lime-600  space-x-2">
                <p className="text-white font-semibold md:block hidden  ">
                  Explore Degrees
                </p>
              </div>
            </Link>
            <Link href="/brandStore">
              <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2">
                <p className="text-white font-semibold md:block hidden  ">
                  Finance your education
                </p>
              </div>
            </Link>
           
          </div>
        </div>
        <Futuresub/>
      </div>
    </div>
  );
};

export default Future;
