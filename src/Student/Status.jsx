import { useState } from "react";


const Status =()=>{

    const [applications, setApplications] = useState([
        {accommodation:"South Point", address:"Braamfontein", date:"2024-01-23", status:"Submitted"},
    {accommodation:"Urban Circle", address:"Maboneng", date:"2024-01-23", status:"Submitted"},
    {accommodation:"Braamfontein Gate", address:"Braamfontein", date:"2024-01-23", status:"Review"},
    {accommodation:"Collage House", address:"Doornfontein", date:"2024-01-23", status:"Accepted"},
    {accommodation:"Thutong Junction", address:"Maboneng", date:"2024-01-23", status:"Submitted"},
                                                    ])

    return(
<div className="m-[25px]">

    <div className="flex flex-col pb-[50px] justify-center  items-center" >
        <h1 className="font-bold text-darkblue text-[30px]">Application Status</h1>
        
    </div>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-lightgray dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Accommodation name
                </th>
                <th scope="col" className="px-6 py-3 hidden md:block">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {applications.map((status,i)=>(
                 <tr key={i} class="bg-white border-b border-gray dark:bg-gray-800 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {status.accommodation}
                 </th>
                 <td class="px-6 py-4 hidden md:block">
                 {status.address}
                 </td>
                 <td class="px-6 py-4 ">
                 {status.date}
                 </td>
                 <td class="px-6 py-4">
                 {status.status}
                 </td>
             </tr>
            ))}
          
        </tbody>
    </table>
</div>

</div>
    )

}
export default Status;