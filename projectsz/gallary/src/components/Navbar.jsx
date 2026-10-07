import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          JASS<span className="text-gray-400">.</span>
        </NavLink>

        {/* Desktop Menu */}
        {/* <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "text-black after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "text-black after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            Gallery
          </NavLink>

        </div> */}

        {/* Add Photos */}
        <NavLink
          to="/main/add-photos"
          className={({ isActive }) =>
            `hidden rounded-full px-5 py-2.5 text-sm font-medium transition md:block ${
              isActive
                ? "bg-gray-800 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`
          }
        >
          Add Photos
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;