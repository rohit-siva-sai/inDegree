import React, { useEffect, useState } from "react";
import { FaTag, FaRegUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({
  filterSearch,
  handleShowCart,
  handleUser,
  user,
  submitNewUser,
  getPhoneNumber,
  changeShowLogin,
  showLogin,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSideCart, setShowSidecart] = useState(false);
  const router = useRouter();

  const [searchShow, setSearchShow] = useState(true);

  useEffect(() => {
    let exempted = ["/"];
    if (exempted.includes(router.pathname)) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  }, [router]);
  return (
    <>
      {showLogin && (
        <Login
          changeShowLogin={changeShowLogin}
          handleUser={handleUser}
          user={user}
          submitNewUser={submitNewUser}
          getPhoneNumber={getPhoneNumber}
        />
      )}
      <div
        className="sticky top-0 py-2 shadow-md
     z-40 bg-white "
      >
        <div className="flex items-center px-8 pl-8  justify-between">
          <div className="flex  space-x-5">
            <Link href={"/"}>
              <div className="flex items-center space-x-4 ">
                {/* <picture>
                <img src="/404Image.jpg" alt="" className="w-12 h-12" />
              </picture> */}
                <p className="font-bold text-2xl text-blue-500">in.degree</p>
              </div>
            </Link>
            <div className="flex border border-black border-2 items-center md:px-3 rounded-md py-0  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-1">
              <p className="text-white font-semibold md:block hidden  ">
                Explore
              </p>
              <MdKeyboardArrowDown className="text-white text-xl " />
            </div>

            <button
              className={`  ${"md:flex hidden"} border rounded-md items-center`}
            >
              <input
                type="search"
                placeholder="What do you want to learn ?"
                name=""
                id=""
                onChange={(e) => {
                  filterSearch(e.target.value);
                }}
                className={`w-[500px] py-1 px-2 focus:border-2 focus:border-blue-500  rounded-md  outline-none`}
              />
              <AiOutlineSearch className="text-4xl cursor-pointer h-full px-2 hover:bg-blue-100 text-blue-500 " />
            </button>
          </div>
          <div className="flex  items-center">
            <div className="flex space-x-6 items-center">
              <Link href="/">
                <div className="flex items-center  rounded-md font-semibold  px-2 cursor-pointer hover:text-gray-500   ">
                  Browse Degrees
                </div>
              </Link>

              <Link href="/">
                <div className="flex items-center  cursor-pointer hover:text-gray-500 font-semibold  ">
                  For Business
                </div>
              </Link>
              <div
                onClick={() => {
                  !user && changeShowLogin(true);
                  user && router.push("/profile");
                }}
                className="flex items-center md:px-4 rounded-md py-1 px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2"
              >
                {/* <FaRegUserCircle className="text-white text-2xl " /> */}
                {user ? (
                  <p className="text-white font-semibold md:block hidden ">
                    Welcome,User
                  </p>
                ) : (
                  <p className="text-white font-semibold md:block hidden ">
                    Create Account
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className={` ${
            searchShow ? "flex md:hidden" : "hidden"
          } w-11/12 mx-auto  my-2  md:hidden  border rounded-md items-center`}
        >
          <input
            type="search"
            placeholder="Search Product, Category, Brand ..."
            name=""
            id=""
            onChange={(e) => {
              filterSearch(e.target.value);
            }}
            className={`w-full py-2 px-2 focus:border-2 focus:border-blue-500  rounded-md outline-none`}
          />
          <AiOutlineSearch className="text-4xl cursor-pointer py-2 px-2 hover:bg-blue-100 text-blue-500 " />
        </button>
      </div>
    </>
  );
};

export default Navbar;
