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
import { DASHBOARD_SIDE_LINKS } from "../Student/StudLib";
import RoomCheck from "./RoomCheck";
import { Link, Outlet } from "react-router-dom";
import { CiLogout } from "react-icons/ci";



const StudentNav = () => {
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
      className={`fixed ${
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
        <ul className="pt-6  flex-1 py-8 flex-col gap-0.5">
        {DASHBOARD_SIDE_LINKS.map((item) => (
            <div
              key={item.key}
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-4
             
              ${item.gap ? "mt-9" : "mt-2"} ${
                selectedMenu === item.label && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(item.title)}
            >
            
               <Link to={item.path} className="flex">
               <span className="text-[25px] pt-[5px]">{item.icon}</span>
               <span className={`${!open && "hidden"} origin-left duration-200 pt-[7px] pl-[6px] text-[17px]`}>
                {item.label}
              </span>

               </Link>
            
            </div>
          ))}
        </ul>
        <div className="mt-[250px] hover:bg-light-white text-gray">

        <Link to={""} className="flex">
               <span className="text-[25px] pt-[5px]"><CiLogout /></span>
               <span className={`${!open && "hidden"} origin-left duration-200 pt-[7px] pl-[6px] text-[17px]`}>
                Signout
              </span>

               </Link>
       </div>
      </div>
      {/* <div className=" flex-1 overflow-y-auto bg-white m-[10px] md:mt-[20px]">

    {<Outlet/>}
      </div> */}
    </div>
  );
};
export default StudentNav;