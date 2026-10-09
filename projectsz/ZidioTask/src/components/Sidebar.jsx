import React, { useContext } from "react";
import {
  LayoutDashboard,
  ListTodo,
  FolderKanban,
  Users,
  LogOut,
  
} from "lucide-react";
import { NavLink } from "react-router";
import { Mystore } from "../context/AuthContext";


const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      path: "/home",
      icon: LayoutDashboard,
      end: true,
    },
    {
      name: "Task",
      path: "/home/task",
      icon: ListTodo,
    },
    {
      name: "Projects",
      path: "/home/projects",
      icon: FolderKanban,
    },
    {
      name: "Team",
      path: "/home/team",
      icon: Users,
    },
  ];

  const {setloginUser} = useContext(Mystore)

  return (
    <div className="flex justify-between flex-col rounded-2xl border border-gray-700 bg-[#212121] p-6 text-white">
      <div>
        <h2 className="mb-3 text-xl font-bold">ZidioTask</h2>

        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg p-3 transition-colors ${
                    isActive
                      ? "bg-white text-[#212121] font-semibold"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
      <button
      onClick={()=>{
        localStorage.removeItem('setloginUser')
        setloginUser(null)
      }}
        type="button"
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
