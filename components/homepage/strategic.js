import React from "react";

const array = [
  {
    heading: "recruit",
    text: "fill your open to entry-level technical talents from our ready to hire talent pipeline",
  },
  {
    heading: "onboard",
    text: "We provide job specific training to new hires co-designed with your tech experts",
  },
  {
    heading: "deploy",
    text: "Start deploying your new hires in your office or at our managed work spaces",
  },
];

const Strategic = () => {
  console.log("sas", array);

  return (
    <div>
      <div className="py-8">
        <p className="text-2xl pl-52 font-bold pb-8">
          strategic way for your talent pipeline
        </p>
        <div className="flex justify-center space-x-24 ">
          {array.map((item) => {
            return (
              <div className="bg-gray-100 flex flex-col w-1/5 space-y-3 pt-4 pb-16 px-4 rounded-md">
                <p className="text-lg text-center italic font-semibold">{item.heading}</p>
                <p className="font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Strategic;
