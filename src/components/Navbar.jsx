import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white drop-shadow-xl">
        <div className="max-md:px-2 mx-auto  w-full  md:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex text-xl items-center justify-center rounded-md p-2 text-[#4A5568] hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? <RiMenu2Line /> : <IoMdMenu />}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center  sm:items-center sm:justify-between">
              <div className="flex shrink-0 items-center sm:gap-x-3 cursor-pointer">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <p className="">Company Name</p>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex md:space-x-4 space-x-1 ">
                  <a
                    href="#service"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline decoration-black decoration-2  underline-offset-8"
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline decoration-black decoration-2  underline-offset-8"
                  >
                    Projects
                  </a>
                  <a
                    href="#approach"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline decoration-black decoration-2  underline-offset-8"
                  >
                    Approach
                  </a>
                  <a
                    href="#stack"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline decoration-black decoration-2  underline-offset-8"
                  >
                     Stack
                  </a>
                  
                </div>
              </div>
              <div className="hidden sm:block sm:self-center">
                <button className="cursor-pointer bg-gradient-to-r from-blue-600 via-violet-800 to-violet-800  font-semibold text-sm text-white px-4 md:px-6 py-2 rounded-lg">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${menuOpen ? "block" : "hidden"} absolute w-full sm:hidden bg-slate-100`}
          id="mobile-menu"
        >
          <div className="space-y-3 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl"
            >
              Calender
            </a>
            
            <button className=" cursor-pointer w-full bg-gradient-to-r from-blue-600 via-violet-800 to-violet-800  font-semibold text-sm text-white px-4 md:px-6 py-2 rounded-lg">
              Contact us
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
