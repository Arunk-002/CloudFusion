import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <a className="hover:text-gray-900" href="#">
            Home
          </a>
          <a className="hover:text-gray-900" href="#">
            About
          </a>
          <a className="hover:text-gray-900" href="#">
            Services
          </a>
          <a className="hover:text-gray-900" href="#">
            Media
          </a>
          <a className="hover:text-gray-900" href="#">
            Gallery
          </a>
          <a className="hover:text-gray-900" href="#">
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-5">
          <a
            className="drop-shadow-xl bg-white
             rounded-full flex justify-center items-center w-10 h-10  "
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookFill />
          </a>

          <a
            className="drop-shadow-xl bg-white
             rounded-full flex justify-center items-center w-10 h-10  "
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="drop-shadow-xl bg-white
             rounded-full flex justify-center items-center w-10 h-10  "
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="drop-shadow-xl bg-white
             rounded-full flex justify-center items-center w-10 h-10  "
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; 2022 Company Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
}

export default Footer;
