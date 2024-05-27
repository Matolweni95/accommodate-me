import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
  
    return `${year}-${month}-${day}`;
  };0 
  
const Status =()=>{

    const [applications, setApplications] = useState([
        {accommodation:"South Point", address:"Braamfontein", date:"2024-01-23", status:"Submitted"},
    {accommodation:"Urban Circle", address:"Maboneng", date:"2024-01-23", status:"Submitted"},
    {accommodation:"Braamfontein Gate", address:"Braamfontein", date:"2024-01-23", status:"Review"},
    {accommodation:"Collage House", address:"Doornfontein", date:"2024-01-23", status:"Accepted"},
    {accommodation:"Thutong Junction", address:"Maboneng", date:"2024-01-23", status:"Submitted"},
                                                    ])
    
    const [application, setApplication] = useState([])
    const [filteredUsers, setFilteredUsers] = useState(application);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = application.filter(application => application.status.includes(value));
        setFilteredUsers(filtered);
      };
    useEffect(()=>{

    const fetch = async () => {

        const response = await axios.get(`http://localhost:8080/auth/getApplications/2`)
        
        setApplication(response.data)
        console.log(application)
        console.log(response)

    }
     
    fetch()
    
    },[])




    return(
<div className="m-[25px]">

    <div className="flex flex-col pb-[50px] justify-center  items-center" >
        <h1 className="font-bold text-darkblue text-[25px] md:text-[30px]">Application Status</h1>
        
    </div>
    <input type="text" onChange={handleFilter} />
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-lightgray dark:text-gray-400 ">
            <tr>
            <th scope="col" className="px-4 py-3 hidden md:block">
            Accommodation name
                </th>
                <th scope="col" className="px-4 py-3 ">
                Address
                </th>
                <th scope="col" className="px-4 py-3 hidden md:block">
                Status
                </th>
                <th scope="col" className="px-4 py-3 ">
                Date
                </th>
                <th scope="col" className="px-4 py-3 hidden md:block">
                   view 
                </th>
               
              
            </tr>
        </thead>
        <tbody>
            {application.map((status,i)=>(
                 <tr key={status.status} class="bg-white border-b border-gray dark:bg-gray-800 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                South Point
                 </th>
                 <td class="px-6 py-4 hidden md:block">
                 Braamfontein
                 </td>
                 <td class="px-6 py-4 ">
                 {status.status}
                 </td>
                 <td class="px-6 py-4 hidden md:block">
                    {formatDate(status.appliedAt)} 
                 
                 </td>
                <td><Link to={`/read/${status.id}`}>View more</Link></td>
             </tr>
            ))}
          
        </tbody>
    </table>
</div>

</div>
    )

}
export default Status;