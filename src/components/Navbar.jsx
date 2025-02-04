import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white drop-shadow-xl  fixed w-full z-50">
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
                  src="/projectBanners/logo.png"
                  alt="Your Company"
                />
                <a href="#home" className="text-primary-color font-semibold">
                  Cloud Fusion
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex md:space-x-4 space-x-1 ">
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline hover:text-secondary-color hover:font-semibold decoration-black decoration-2  underline-offset-8"
                    href="#about"
                  >
                    About
                  </a>
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline hover:text-secondary-color hover:font-semibold decoration-black decoration-2  underline-offset-8"
                    href="#service"
                  >
                    Services
                  </a>
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline hover:text-secondary-color hover:font-semibold decoration-black decoration-2  underline-offset-8"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline hover:text-secondary-color hover:font-semibold decoration-black decoration-2  underline-offset-8"
                    href="#approach"
                  >
                    Approach
                  </a>
                  <a
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#4A5568] hover:underline hover:text-secondary-color hover:font-semibold decoration-black decoration-2  underline-offset-8"
                    href="#stack"
                  >
                    Stack
                  </a>
                </div>
              </div>
              <div className="hidden sm:block sm:self-center">
                <a
                  href="#contact"
                  className="cursor-pointer bg-[#3D63EA] hover:bg-[#0353A4]  font-semibold text-sm text-white px-4 md:px-6 py-2 rounded-lg"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full sm:hidden bg-slate-100 transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
          id="mobile-menu"
        >
          <div className="space-y-3 flex flex-col items-center px-2 pt-2 pb-3">
            <a
              href="#about"
              tabIndex={0}
              className="block focus:text-primary-color focus-visible:text-primary-color active:text-primary-color 
                 rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl transition-all"
            >
              About
            </a>
            <a
              href="#service"
              tabIndex={0}
              className="block focus:text-primary-color focus-visible:text-primary-color active:text-primary-color 
                 rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl transition-all"
            >
              Services
            </a>
            <a
              href="#projects"
              tabIndex={0}
              className="block focus:text-primary-color focus-visible:text-primary-color active:text-primary-color 
                 rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl transition-all"
            >
              Projects
            </a>
            <a
              href="#approach"
              tabIndex={0}
              className="block focus:text-primary-color focus-visible:text-primary-color active:text-primary-color 
                 rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl transition-all"
            >
              Approach
            </a>
            <a
              href="#stack"
              tabIndex={0}
              className="block focus:text-primary-color focus-visible:text-primary-color active:text-primary-color 
                 rounded-md px-3 py-2 text-base font-medium text-[#4A5568] drop-shadow-2xl transition-all"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="text-center cursor-pointer w-[90%] bg-[#3D63EA] focus:bg-primary-color font-semibold text-sm text-white px-4 md:px-6 py-2 rounded-lg"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
