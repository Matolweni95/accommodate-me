import { Link } from "react-router-dom";
import { LuBadgeHelp } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { DASHBOARD_SIDE_LINKS } from "./StudLib";
import pic from '../Image/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'

import { useState } from "react";


const DashNav = () =>{

const classlink ="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"


// return(
// <div  className=" bg-blue w-60 h-screen p-3 flex flex-col text-white dashnav">
// <div className="bg-blue-500">
// <img src={pic} alt=""  style={{borderRadius: '50%'}} className="mt-[20px] ml-[42px] items-center justify-center w-[100px] h-[100px]"/>
// <h1 className="text-black p-[15px]">Cynthia Letty Dladla</h1>
// </div>
// <div className="flex-1 py-8 flex flex-col gap-0.5">
// {DASHBOARD_SIDE_LINKS.map((item)=>(
//  < div key={item.key} item={item}>
// <Link to={item.path} className={classlink}>
//   <span className="text-xl">{item.icon}</span>
//   {item.label}
// </Link>

//  </div>
// ))}
// </div>

// <div>
// <h1>Help & Support</h1>
// <h1>Logout</h1>
// </div>


// </div>

// )
const [open, setOpen] = useState(true);
const [selectedMenu, setSelectedMenu] = useState("Dashboard"); 
const handleMenuClick = (title) => {
  setSelectedMenu(title);
};
return(
  
<div className="flex h-screen items center bg-darkblue m-5 mb-5 rounded-md">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen[-10vh] p-5 m-5 rounded-[10px] pt-8 relative duration-300`}
        >
        <span
          
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            rounded-full text-[25px] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
        <IoIosArrowDown />
           </span>
        <div className="flex gap-x-4 items-center">
          <img
            src={pic}
            style={{borderRadius: '50%'}} 
            className={`cursor-pointer duration-500 w-[100px] h-[100px] rotate-[360deg] ${
              !open && "rotate-[180deg] w-[45px] h-[45px]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Cynthia <br/> Dladla
          </h1>
        
        </div>
        <div className="pt-12">
          {DASHBOARD_SIDE_LINKS.map((item) => (
            <div
              key={item.key}
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-4
              ${item.gap ? "mt-9" : "mt-2"} ${
                selectedMenu === item.label && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(item.title)}
            >
            
               <Link to={item.path} className={classlink}>
               <span className="text-[25px]">{item.icon}</span>
               <span className={`${!open && "hidden"} origin-left duration-200`}>
                {item.label}
              </span>

               </Link>
            
            </div>
          ))}
              <div className=" rounded-md p-2 cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-4 flex-1 py-16  ">
           <Link to={""} className={classlink}>
               <span className="text-[25px]"><LuBadgeHelp /></span>
               <span className={`${!open && "hidden"} origin-left duration-200`}>
               Help & Support
              </span>

               </Link>
               <Link to={""} className={classlink}>
               <span className="text-[25px]"><CiLogout />
               </span>
               <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
              </span>

               </Link>

 </div>
        </div>
      </div>
  
    </div>
       
         
  );

}


export default DashNav;