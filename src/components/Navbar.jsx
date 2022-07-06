import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="z-10 bg-cta-dark fixed top-0 left-0 right-0 flex justify-center items-center h-14 px-10">
      <div className="max-w-6xl w-full flex justify-between items-center ">
        <div className="flex justify-start items-center gap-2 max-w-lg w-full">
          <div className="flex justify-center items-center gap-2">
            <SiFlipkart color="yellow" size={"1.4rem"} />
            <span className="text-2xl text-slate-50 italic font-bold">
              Flipkart
            </span>
          </div>
          <input
            className="px-2 py-1 flex-grow border-none focus:border-[1px] outline-none m-2 rounded-sm"
            placeholder="Search for Products, Brands and more"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white px-3 py-1 rounded-sm  ">Login</button>
          <select className="outline-none border-[1px] rounded-sm py-1 bg-cta-dark text-white">
            <option>More</option>
            <option className="bg-white text-black" value="My Account">
              My Account
            </option>
            <option className="bg-white text-black" value="My Orders">
              My Orders
            </option>
            <option className="bg-white text-black" value="My Addresse">
              My Addresses
            </option>
            <option className="bg-white text-black" value="Settings">
              Settings
            </option>
          </select>
          <button className="flex text-white justify-center items-center gap-2">
            <AiOutlineShoppingCart size={"1.3rem"} />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
