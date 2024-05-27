import { useState } from "react";
import control from '../assets/control.png';
import logo from '../assets/logo.png';
import pic from "../Image/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
import { BiSolidLogInCircle } from "react-icons/bi";
import { ADMIN_SIDE_LINKS } from "../Student/StudLib";
import { Link, Outlet } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import Chart_fill from '../assets/Chart_fill.png';



const AdminPortal = () => {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard"); 
    const icons = [{icon:Chart_fill},{icon:Chart_fill},{icon:Chart_fill},{icon:Chart_fill},{icon:Chart_fill}
    ]

    
  
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
            className={`text-white origin-left font-medium text-xxl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Cynthia dladla
          </h1>
        </div>
        <ul className="pt-6  flex-1 py-8 flex-col gap-0.5">
        {ADMIN_SIDE_LINKS.map((item) => (

          <div key={item.key}>
             <Link to={item.path} className="flex pt-[4px]">
            <div
              
              className={`flex w-full rounded-md p-1 cursor-pointer hover:bg-light-white text-gray text-sm items-center 
             
              ${item.gap ? "mt-9" : "mt-2"} ${
                selectedMenu === item.label && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(item.label)}
            >
            
              
              
               <img src={`${item.icon}`} className="h-[25px]" />
               <span className={`${!open && "hidden"} origin-left duration-200 pt-[px] pl-[6px] text-[17px]`}>
                {item.label}
              </span>

               
               </div>
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
      <div className="md:hidden bg-darkblue h-[65px] rounded-md mb-[10px] flex">
      <div className="flex flex-row justify-center items-center">
          <img src={pic}  className="m-[15px] h-[50px] rounded-md"/>
        </div>
        <div className="ml-[15px] flex flex-row justify-center items-center">
      <ul className="  flex-1 py-4 flex  ">
        {ADMIN_SIDE_LINKS.map((item) => (
          <div key={item.key}>
            <Link to={item.path} className="flex w-full">
            <div
              
              className={`flex  rounded-md  cursor-pointer hover:bg-light-white text-gray text-sm items-center gap-x-2
             
              ${item.gap ? "mt-2" : "mt-2"} ${
                selectedMenu === item.label && "bg-light-white w-full"
              } `}
              onClick={() => handleMenuClick(item.title)}
            >
            
               
               <img src={`${item.icon}`} className="h-[30px] m-2" />
 
               </div>
               </Link>
            </div>
          ))}
        </ul>
        <Link to={""} className="flex text-white pl-6 ">
               <span className="text-[28px] pt-[5px] "><BiSolidLogInCircle /></span>
               
               

               </Link>
        </div>
       
      </div>
      <div className="overflow-x-hidden rounded-[10px] " style={{ height: 'calc(100vh - 5vh)' }}>
    {<Outlet/>}
    </div>
      </div>
    </div>
  );
};
export default AdminPortal;