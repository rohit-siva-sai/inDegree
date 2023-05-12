import React from "react";
import Bootcampsub from "./bootcampsub";

const Bootcamp = () => {
  return (
    <div className="bg-lime-50 py-8"  >
      <div className="grid grid-cols-2 justify-items-start">
        <div className=" px-24 flex flex-col space-y-6 ">
          <p className="text-3xl font-semibold">
            Get our FREE Ultimate Guide to Paying for a Bootcamp
          </p>
          <div className="grid grid-cols-2 gap-x-3">
            <input
              type="email"
              name=""
              id=""
              className="outline-none  border-2 focus:border-blue-500  px-3 placeholder:italic placeholder:text-sm py-1 rounded-md "
              placeholder="Email Address"
            />
            <select
              name=""
              id=""
              className=" outline-none focus:border-blue-500 border-2 rounded-md px-3 py-1"
            >
              <option value="" >
                I am...
              </option>
              <option value="Researching Coding Bootcamps">
                Researching Coding Bootcamps
              </option>
              <option value="Current Student/Alum">Current Student/Alum</option>
              <option value="Industry Profeesional">
                Industry Profeesional
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-lime-500 bg-lime-600  space-x-2">
              <p className="text-white font-semibold md:block hidden  ">
                Explore Degrees
              </p>
            </div>
            <p className="text-[10px] pt-1">
              By submitting this form, you agree to recieve to recieve email
              marketing from Course Report.
            </p>
          </div>
        </div>
        <Bootcampsub/>
      </div>
    </div>
  );
};

export default Bootcamp;
