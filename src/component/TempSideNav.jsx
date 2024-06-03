import React, { Children, useEffect, useState } from "react";
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
import UserProfile from "./UserProfile";
import TenantList from "./TenantList";
import { Link } from "react-router-dom";

const SideNav = ({ children }) => {
    const [open, setOpen] = useState(true);
    localStorage.setItem('open', JSON.stringify(open));
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");
    const [mainSectionWidth, setMainSectionWidth] = useState("100%");
    const [isMobileToTablet, setIsMobileToTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileToTablet(window.innerWidth <= 1024 && window.innerWidth > 768); // Adjust this value according to your tablet breakpoint
        };
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const Menus = [
        { title: "Dashboard", src: Chart_fill },
        { title: "Applications", src: Chat },
        { title: "Profile", src: User, gap: true },
        { title: "Issues ", src: Calendar },
        { title: "Search", src: Search },
        { title: "Tenant", src: Chart },
        { title: "Rooms ", src: Folder, gap: true },
        { title: "Application", src: Setting },
        { title: "Announcements", src: Chat },
    ];

    const handleMenuClick = (title) => {
        setSelectedMenu(title);
    };

    const toggleSideNav = () => {
        setOpen(!open);
        localStorage.setItem('open', JSON.stringify(open));
        setMainSectionWidth(open ? "100%" : "calc(100% - 72px)"); 
        
    };


    return (
        <div className="flex flex-col lg:flex-row h-screen items center">
            
            <div 
                className={` ${ open ? "w-72" : "w-20 "} lg:block sm:hidden hidden bg-dark-purple h-screen[-10vh] p-5 m-5 rounded-[10px] pt-8 relative duration-300`}>
                <img
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={toggleSideNav}
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
                        <Link to={`/${Menu.title.toLowerCase()}`} className="">
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
                        </Link>
                    ))}
                </ul>
            </div>
            <div
                className={`
                     "w-full flex h-fit
                     bg-dark-purple lg:hidden h-screen[-10vh] p-5 m-5 rounded-[10px] pt-8 relative duration-300`}
            >
                
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500`}
                    />
                    
                </div>
                <ul className=" flex w-full justify-around">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer  text-gray text-sm items-center  `}
                            onClick={() => handleMenuClick(Menu.title)}
                        >
                            <img src={`${Menu.src}`} />
                            <span className={`hidden md:block origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-auto relative overflow-y-auto rounded-[10px] flex-1 md:mt-5 mr-5 mb-5" style={{ width: mainSectionWidth }} >
                {children}
            </div>
        </div>
    );
};
export default SideNav;
