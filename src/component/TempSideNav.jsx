import { useState } from "react";
import control from '../assets/control.png';
import logo from '../assets/logo.png';
import Chart_fill from '../assets/Chart_fill.png';
import Chat from '../assets/Chat.png';
import User from '../assets/User.png';
import Calendar from '../assets/Calendar.png';
import Search from '../assets/Search.png';
import Chart from '../assets/Chart.png';
import Folder from '../assets/Folder.png';
import Setting from '../assets/Setting.png';
import ApplicationList from "./ApplicationList";
import RoomCheck from "./RoomCheck";


const SideNav = () => {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard"); 
  
    const Menus = [
      { title: "Dashboard", src: Chart_fill },
      { title: "Inbox", src: Chat },
      { title: "Accounts", src: User, gap: true },
      { title: "Schedule ", src: Calendar },
      { title: "Search", src: Search },
      { title: "Analytics", src: Chart },
      { title: "Files ", src: Folder, gap: true },
      { title: "Setting", src: Setting },
    ];
  
    const handleMenuClick = (title) => {
      setSelectedMenu(title);
    };
  
    return (
      <div className="flex h-screen items center">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen[-10vh] p-5 m-5 rounded-[10px] pt-8 relative duration-300`}
        >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                selectedMenu === Menu.title && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(Menu.title)}
            >
              <img src={`${Menu.src}`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1">
        <RoomCheck />
      </div>
    </div>
  );
};
export default SideNav;