import React, { useState } from "react";
import logo from "../../assets/h.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <img 
            src={logo} 
            alt="ArasuTech Logo" 
            className="h-40 w-auto cursor-pointer -ml-4"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-xl font-semibold text-gray-800 font-[Montserrat]">
            <a href="/" className="hover:text-[#e1bd53] transition duration-300">Home</a>

            {/* Residential Property Dropdown */}
            <div className="relative group">
              <a href="#" className="hover:text-[#e1bd53] transition duration-300">Residential Property</a>
              <div className="absolute left-0 top-full w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <a href="/golden" className="block px-4 py-2 hover:text-[#e1bd53]">Golden Grove</a>
                <a href="/golden" className="block px-4 py-2 hover:text-[#e1bd53]">Grand Vista</a>
                <a href="/golden" className="block px-4 py-2 hover:text-[#e1bd53]">Urban Cloud</a>
              </div>
            </div>

            {/* Commercial Property Dropdown */}
            <div className="relative group">
              <a href="#" className="hover:text-[#e1bd53] transition duration-300">Commercial Property</a>
              <div className="absolute left-0 top-full w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <a href="/golden" className="block px-4 py-2 hover:text-[#e1bd53]">Coimbatore</a>
                <a href="/golden" className="block px-4 py-2 hover:text-[#e1bd53]">Pollachi</a>
              </div>
            </div>

            <a href="/golden" className="hover:text-[#e1bd53] transition duration-300">NRI</a>
            <a href="/golden" className="hover:text-[#e1bd53] transition duration-300">About us</a>
            <a href="/golden" className="hover:text-[#e1bd53] transition duration-300">Contact us</a>
            <a href="/golden" className="hover:text-[#e1bd53] transition duration-300">Career</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-6 py-2.5 rounded-lg bg-[#e1bd53] text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
              Book a Site Visit
            </button>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="/">Home</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="#">Residential Property</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="#">Commercial Property</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="/nri">NRI</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="/about">About us</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="/contact">Contact us</a>
          <a className="block px-6 py-3 hover:text-[#e1bd53]" href="/career">Career</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;