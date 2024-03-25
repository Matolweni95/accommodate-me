import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const ReportIssue = ()=>{

const navigate = useNavigate();



return (
    <div className="m-[30px]">
    <div className="mt-[50px]">
   <button onClick={() => navigate(-1)} className="text-[25px] ml-[50px]"><IoArrowBackOutline /></button>
   </div>
<div className="flex flex-col justify-center items-center mt-[30px]">

<h1 className="underline underline-offset-4 decoration-dotted decoration-2 p-[20px] Slate rounded outline-0 text-[20px] font-bold">Issue Report</h1>
<input type="text" placeholder="Full names" className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3" />
<input  type="text" placeholder="Room no" className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3" />
<input type="text" placeholder="Subject" className="w-4/5 h-12 border border-solid mt-[20px]  border-gray rounded-md border-1 outline-0 h-8 p-3"/>
<textarea type="text" placeholder="Description" className="bg-slate-200 w-4/5 h-32 outline-0  mt-[50px] p-3 resize-none border border-solid border-gray rounded-md border-1">
</textarea>
<button className="bg-babyBlue mt-[40px] w-[200px] h-[40px] text-white py-2 px-4 rounded focus:outline-none">Submit</button>
</div>
</div>
)

}
export default ReportIssue;