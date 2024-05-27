import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const ReportIssue = ()=>{

let { id } = useParams();
const navigate = useNavigate();
const[issue, setIssue]= useState({});
const [edit, setEdit] = useState(false)

const inputChange = (e) => {
    const { name, value } = e.target;

setIssue((prevData) => ({
  ...prevData,
  [name]: value,
}));
  };

  const addIssue =()=>{

         console.log(issue)
         if(edit){

          updateIssue()

         }else{

         axios.post(`http://localhost:8080/auth/addIssue/2`,issue)
         .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Issue successfully sent!',
            });
          }).catch((error) => {
            console.error("Error occurred while making the API call:", error);
          });
        }
  }   

  const updateIssue = () =>{
    console.log(issue);

    axios.put(`http://localhost:8080/auth/updateIssue/${id}`,issue)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully updated issue!',
      });
    }).catch((error) => {
      console.error("Error occurred while making the update API call:", error);
    });

  }

  useEffect(()=>{

    const fetch = async () => {

      if(id != ":id"){
        setEdit(true);

       const response = await axios.get(`http://localhost:8080/auth/getIssue/${id}`);
       setIssue(response.data)

      }else{
        console.log("You are adding an issue")
      }

    }
 
     fetch();
  },[])

return (
    <div className="md:30px">
    <div className="mt-[15px] md:mt-[50px]">
   <button onClick={() => navigate(-1)} className="text-[25px] ml-[50px]"><IoArrowBackOutline /></button>
   </div>
<div className="flex flex-col justify-center items-center mt-[10px] md:mt-[30px]">

<h1 className="underline underline-offset-4 decoration-dotted decoration-2 p-[20px] Slate rounded outline-0 text-[20px] font-bold">Issue Report</h1>
<input type="text" placeholder="Full names" value={issue.fullName} name="fullName" onChange={inputChange} className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3" />
<input  type="text" placeholder="Room no" value={issue.roomNo} name="roomNo" onChange={inputChange} className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3" />
<input type="text" placeholder="Subject" value={issue.title} name="title" onChange={inputChange} className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3"/>
<textarea type="text" placeholder="Description" value={issue.description} name="description" onChange={inputChange} className="bg-slate-200 w-4/5 h-32 outline-0 mt-[30px] md:mt-[50px] p-3 resize-none border border-solid border-gray rounded-md border-1">
</textarea>
<button className="bg-babyBlue mt-[30px] md:mt-[40px] w-[200px] h-[40px] text-white py-2 px-4 rounded focus:outline-none" onClick={addIssue}>{edit? "Update" :"Submit"}</button>
</div>
</div>
)

}
export default ReportIssue;