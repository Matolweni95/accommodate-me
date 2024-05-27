import { useNavigate,useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";

const ApplicationDetails = ()=>{
    let { id } = useParams();
const navigate = useNavigate();

    const [details, setDetails] = useState({});
    const [message, setMessage] = useState({});

    useEffect( ()=>{
     
        const fetchDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/auth/getApplication/${id}`);
            setDetails(response.data);
        } catch (err) {
            setError(err.message);
        }
    }
        fetchDetails();

    },[id])

    const handleAcceptResidence = async(event)=>{

        event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:8080/auth/applications/${id}/accept`, 
        { status: "Apprived" }
      
      );
      setMessage(`Status updated successfully: ${response.data.status}`);
    } catch (error) {
      setMessage(`Error updating status: ${error.response ? error.response.data.message : error.message}`);
    }
    }

    return(
        <div>
            <div className="ml-[50px]">
            <button onClick={() => navigate("/status")} className="text-[25px] ml-[20px] mt-[30px]"><IoArrowBackOutline /></button>
            <div className="flex flex-col justify-center items-center font-bold">
                <h2 className="text-[30px]">Application details for</h2>
                <h2 className="text-[25px]">{details.firstName +" "+ details.lastName}</h2>
            </div>
            <h2 className="font-bold pt-[30px]">PERSONAL DETAILS</h2>
            <p className="pt-[20px]">ID Number : {details.idNumber}</p>
            <p className="">Date of Borth : {details.dateOfBirth}</p>
            <p className="">Gender : {details.gender}</p>
            <p className="">Email: {details.email}</p>
            <p className="">Residential Address : {details.address}</p>
            <p className="">Cellphone Number : {details.contactDetails}</p>

            <h2 className="font-bold pt-[20px]">NEXT OF KIN DETAILS</h2>
            <p className="pt-[15px]">Name and Surname : {details.guardianFullName+" "+ details.guardianSurname}</p>
            <p className="">Relationship : {details.relationship}</p>
            <p className="">Email : {details.guardianEmail}</p>
            <p className="">Contact : {details.guardianContacts}</p>
            <p className="">Residential Address : {details.address}</p>

            <h2 className="font-bold pt-[20px]">INSTITUTION DETAILS</h2>
            <p className="pt-[15px]">Institution : {details.institution}</p>
            <p className="">Campus : {details.campus}</p>
            <p className="">Busary : {details.bursary}</p>
            <p className="">Study year : {details.yearOfStudy}</p>
         
           
            <h2 className="font-bold pt-[20px]">ACCEPT APPLICATION</h2>
        {
        details.status==="Submitted"?<button onClick={handleAcceptResidence} className="bg-dark-purple h-[40px] text-white font-bold w-[250px] mt-[10px] mb-[15px]">Approve Residence</button>:<button className="bg-gray h-[40px] text-white font-bold w-[250px] mt-[10px] mb-[15px]">Approve Residence</button>

        }
        </div>

        </div> 
    )
}
export default ApplicationDetails;