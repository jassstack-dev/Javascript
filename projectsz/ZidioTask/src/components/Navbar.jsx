
import React from "react";
import { Search, Bell, UserRound, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex z-50 items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-4 sticky top-0">

      {/* Left Side - Search */}
      <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5">
        <Search size={20} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-5">

        {/* Notification */}
        <button
          type="button"
          className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-black"
          aria-label="Notifications"
        >
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* Divider */}
        <div className="h-9 w-px bg-gray-200"></div>

        {/* User Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
            <UserRound size={21} />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-900">
              Jass
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <ChevronDown size={16} className="hidden text-gray-500 sm:block" />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;