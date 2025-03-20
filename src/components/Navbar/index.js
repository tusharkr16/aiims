"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-opacity-50 p-4 z-10">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={50} height={50} />
           
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Sidebar with animation on open/close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white p-6 z-20 shadow-lg"
          >
            <button className="mb-6" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <ul className="space-y-4">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Services</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;