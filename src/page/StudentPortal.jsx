import { useState } from "react";
import control from '../assets/control.png';
import logo from '../assets/logo.png';
 

import { DASHBOARD_SIDE_LINKS } from "../Student/StudLib";
import { Link, Outlet } from "react-router-dom";
import { CiLogout } from "react-icons/ci";



const StudentPortal = () => {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard"); 
  

  
    const handleMenuClick = (title) => {
      setSelectedMenu(title);
    };
  
    return (
      <div className="flex h-screen items center">
       <div
      className={`fixed ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen[-10vh] p-5 m-5 rounded-[10px] pt-8 relative duration-300 hidden md:block`}
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
      
      <div className=" flex-1 overflow-y-auto bg-white m-[10px] md:mt-[20px]">
      <div className="md:hidden bg-blue h-[70px] rounded-md mb-[10px]">
        
      <ul className="  flex-1 py-8 flex  ">
        {DASHBOARD_SIDE_LINKS.map((item) => (
            <div
              key={item.key}
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-4
             
              ${item.gap ? "mt-2" : "mt-2"} ${
                selectedMenu === item.label && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(item.title)}
            >
            
               <Link to={item.path} className="flex">
               <span className="text-[20px] ">{item.icon}</span>
              

               </Link>
            
            </div>
          ))}
        </ul>
      </div>
    {<Outlet/>}
      </div>
    </div>
  );
};
export default StudentPortal;




// import React from "react";
// import DashNav from "../Student/DashNav";
// import SideNav from "../component/TempSideNav";
// import { DASHBOARD_SIDE_LINKS } from "../Student/StudLib";
// import StudentNav from "../component/StudentNav";
// import pic from "../assets/hero2.jpeg"
// import { Link, Outlet } from "react-router-dom";
// import { RiLogoutBoxRFill } from "react-icons/ri";

// const StudentPortal =()=>{

// return(
// <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden bg-Slate">
//     <div className="hidden md:block">
// <StudentNav />
// </div>
// <div className="h-screen w-screen">
//     <div className="bg-teal-200 flex m-[10px] bg-dark-purple h-[50px] rounded-md md:hidden">
//     <img src={pic} className="h-[40px] w-[40px] m-[5px] rounded-md"/>
//         <div className="flex text-gray ml-[20px]" style={{width:"90%"}}>
      
//         {DASHBOARD_SIDE_LINKS.map((items)=>(
//        <Link to={items.path} className="m-[10px] pt-2 text-[17px]">{items.icon}</Link>
   
//         ))
//         }
//         </div>
//         <div className="flex text-gray float-end">
          
//             <Link to={""} className=" m-[15px] text-[17px]"><RiLogoutBoxRFill /></Link>
//     </div>
//     </div>
//     <div  className="flex-1 overflow-y-auto bg-white m-[10px] md:mt-[20px]">
//         {<Outlet />}
//         </div>
// </div>
// </div>
// )

// }
// export default StudentPortal;