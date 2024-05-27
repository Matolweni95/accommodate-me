import { useEffect, useState } from "react";
// import ActivityComponent from "../component/ActivityComponent";
// import SideProfile from "../component/SideProfile";
// import pic from "../assets/hero2.jpeg"
// import pieChart from "../Image/pie-chart-example.png"
// import graph from "../Image/blue-bar-graph-free-vector.jpg"
// import line from "../Image/maxresdefault.jpg"
// import add from "../Image/types of charts_32023-May-22-2023-10-17-26-0670-PM.webp"
import { FaUniversity } from "react-icons/fa";
import { SiGofundme } from "react-icons/si";
import { FaHouseCircleCheck } from "react-icons/fa6";
import axios from "axios";

const StudentDash = () =>{
   
  const [summary, setSummary] = useState({})

  
  const [profile, setProfile] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/auth/getApplications/2`)
  
        if (!response) {
          throw new Error('No response received from the server');
        }
  
      
        const data = response.data;
        setProfile(data);
        

        const profile1 = data.find(item => item.studentStatus === 'Approved');
        
  
        if (profile1) {
          setSummary(profile1);
         console.log(profile1)
        }
  
  
        console.log('Data fetched:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();

  },[])

    return(
        <div>
            <div >
         <div className="grid grid-cols-1 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-lightgray" >
            <div className="bg-white h-[110px] rounded-md flex flex-col justify-center  items-center">
             
               <h1 className="text-[30px] "><FaUniversity/></h1>
               <p className="bold font-bold pt-[5px] position-relative">University</p>
               <p> {summary.institution}</p>
               
              
                </div>
                <div className="bg-white h-[110px] rounded-md flex flex-col justify-center  items-center ">
               <h1  className="text-[30px] "><SiGofundme /></h1> 
               <p className="bold font-bold pt-[5px] position-relative">Funding</p>
               <p>Nsfas</p>
                </div>
                <div className="bg-white h-[110px] rounded-md flex flex-col justify-center  items-center ">
               <h1  className="text-[30px] "><FaHouseCircleCheck /></h1> 
               <p className="bold font-bold pt-[5px] position-relative">Residence</p>
               <p>South Point</p>
                </div>
         </div>
         <div className=" mt-[20px] bg-lightgray">
            <h1 className="p-[30px] font-bold">Student Summary</h1>
            <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
            <div className="bg-cover bg-center bg-white h-[190px] w-200 m-[11px] rounded-[10px]" >

            <h1 className="p-2 font-bold"> Personal Details</h1>
              <h1 className="p-[6px]">{summary.firstName +" "+ summary.lastName}</h1>
               <p className="pb-[6px] pl-[6px]">{summary.email}</p>  
               <p className="pb-[6px] pl-[6px]">{summary.contactDetails}</p>
               <p className="pb-[6px] pl-[6px]">{summary.gender} </p>
            </div>
            <div className="bg-cover bg-center bg-white h-[190px] w-200 m-[11px] rounded-[10px]" >
              <h1 className="p-2 font-bold">Room</h1>
            <p className="p-[6px]">Room no: 23</p>
            <p className="pb-[6px] pl-[6px]">Room type: Single</p>
            <p className="pb-[6px] pl-[6px]">Date moved in: 23 January 2023</p>
            <p className="pb-[6px] pl-[6px]">Duration: Year</p>
            </div>
            <div className="bg-cover bg-center bg-white h-[220px] w-200 m-[11px] rounded-[10px]" >
          
            <h1 className="p-2 font-bold">Kin Details</h1>

            <p className="p-[6px]">Full Name : {summary.guardianFullName+" "+ summary.guardianSurname}</p>
            <p className="pb-[6px] pl-[6px]">Relationship : {summary.relationship}</p>
            <p className="pb-[6px] pl-[6px]">Email : {summary.guardianEmail}</p>
            <p className="pb-[6px] pl-[6px]">Contact : {summary.guardianContacts}</p>
            <p className="pb-[6px] pl-[6px]">Address : {summary.address}</p>
            </div>
            <div className="bg-cover bg-center bg-white h-[220px] w-200 m-[11px] rounded-[10px]" >
            <h1 className="p-2 font-bold">Funding</h1>

            <p className="p-[6px]">Funded by : NSFAS</p>
            <p className="pb-[6px] pl-[6px]">Institution :  {summary.institution}</p>
            <p className="pb-[6px] pl-[6px]">Year of study : {summary.yearOfStudy}</p>
            <p className="pb-[6px] pl-[6px]">Faculty: ICT</p>
              </div> 
            </div>
          
         </div>
         </div>

        </div>
    )
}
export default StudentDash;