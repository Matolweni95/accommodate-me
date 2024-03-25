import pic from "../Image/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"

const StudProfile = () =>{

return(
<div className="bg-sky rounded-md">
<h1 className="pt-[20px] pl-[80px] font-bold">Profile Details</h1>
<div className="flex ">
<div className="m-[30px] bg-white ml-[80px] rounded-md">
    <div>
    <img src={pic} className="w-[270px] h-[220px] m-[12px] rounded-md "/>
    <p className="pt-[5px] pr-[12px] float-end text-gray">Last updated 10:30 Tuesday</p>
  
    </div>
<div className="ml-[12px] mt-[70px]">
      
    <span className="uderline w-[100px] h-[2px] text-dark-purple"></span>
    <h1 className="pb-[5px] font-bold"> Personal Details</h1>
<h1>Cynthia Dladla</h1>
  <p>cynthia@gmail.com</p>  
  <p>0729595846</p>
  <p>Female </p>

  <h2 className="pt-[10px] pb-[5px] text-bold font-bold">Next of kin</h2>
  <p>Andries Dladla</p>
  <p>0712345678</p>
</div>
 <button className="bg-sky ml-[100px] mt-[17px] mb-[10px] w-[100px] h-[30px] rounded-md">Update</button>
</div>


<div>

<div className="bg-white w-[600px] mt-[30px] rounded-md">
<h1 className="pt-[15px] pl-[10px] pb-[5px] font-bold">House Details</h1>
<div className="bg-sky h-[1px]"  style={{width:"100%"}}></div>
<p className="p-[10px]">Room no: 23</p>
<p className="pb-[10px] pl-[10px]">Room type: Single</p>
<p className="pb-[10px] pl-[10px]">Date moved in: 23 January 2023</p>
<p className="pb-[10px] pl-[10px]">Duration: Year</p>

<button className='bg-transparent border border-lightblue py-1 px-2 rounded text-lightblue w-[300px] mt-[20px] mb-[20px] ml-[100px]'>Cancel Residence</button>
</div>
<div className="bg-white w-[600px] h-[270px] mt-[30px] rounded-md">
<h1 className="pt-[15px] pl-[10px] pb-[5px] font-bold">Funding</h1>
<div className="bg-sky h-[1px]"  style={{width:"100%"}}></div>
<p className="p-[10px]">Funded by : NSFAS</p>
<p className="pb-[10px] pl-[10px]">Institution : Wits University</p>
<p className="pb-[10px] pl-[10px]">Year of study : 2nd year</p>
<p className="pb-[10px] pl-[10px]">Faculty: ICT</p>

</div>
</div>
</div>

</div>


)

}
export default StudProfile;