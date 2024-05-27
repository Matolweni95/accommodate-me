import pic from "../Image/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
import { MdAddPhotoAlternate } from "react-icons/md";
import '../css/profile.css'
import { useEffect, useState } from "react";
import axios from "axios";

const StudProfile = () =>{

  const [image,setImage] =useState(pic)
  const [picture,setPicture] =useState(null)
  const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({})

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/auth/getProfile/2`)
  
        if (!response) {
          throw new Error('No response received from the server');
        }
  
        const data = response.data;
        setProfile(data);
      
        console.log('Data fetched:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();

  },[])

const selectPicture = () =>{

  document.getElementById('selectFile').click()
}

const handleFileChange = (e) => {
  const picture = e.target.files[0];
  if (picture) {
    setPicture(picture)
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setImage(dataUrl);
    };
    reader.readAsDataURL(picture);
  }

};

const cancelResidence = ()=>{


}

return(
<div className="bg-lightblue rounded-md h-full ">
  
<h1 className="pt-[30px] pl-[30px] md:pl-[80px] text-[18px] font-bold">Profile Details</h1>
<div className="flex  flex-col md:flex-row">
<div className="m-[30px] bg-white ml-[20px] rounded-md ">
    <div className="" >
      <div className="container w-[270px]  md:w-[355px]">
    <img src={image} className="h-[245px] m-[5px] rounded-md image"/>
    <div class="middle">
    <div class="text-[45px]" onClick={selectPicture} ><MdAddPhotoAlternate /></div>
    <input type="file" className="hidden" id='selectFile' onChange={handleFileChange}/>
  </div>
  </div>
    <p className="pt-[5px] pr-[12px] float-end text-gray">Last updated 10:30 Tuesday</p>
  
    </div>
<div className="ml-[12px] mt-[70px]">
      
    <span className="uderline w-[100px] h-[2px] text-dark-purple"></span>
    <h1 className="pb-[5px] font-bold"> Personal Details</h1>
<h1 className="font-bold pt-[5px]">{profile.firstName +" " + profile.lastName}</h1>
<p className="pt-[10px]">{profile.gender} </p>
  <input value={profile.email} className="w-full pt-[10px] outline-0"></input> <br/>
  <input value={profile.contactDetails} className="w-full pt-[10px] outline-0"></input>
 

  
</div>
 <button className="bg-sky hover:text-white font-bold ml-[100px] mt-[25px] mb-[10px] w-[100px] h-[30px] rounded-md">Update</button>
</div>


<div className="hidden md:block lg:block" >

<div className="bg-white w-[580px] mt-[30px] rounded-md w-1/2 mr-[10px]">
<h1 className="pt-[15px] pl-[10px] pb-[5px] font-bold">House Details</h1>
<div className="bg-sky h-[1px]"  style={{width:"100%"}}></div>
<p className="p-[10px]">Room no: 23</p>
<p className="pb-[10px] pl-[10px]">Room type: Single</p>
<p className="pb-[10px] pl-[10px]">Date moved in: 23 January 2023</p>
<p className="pb-[10px] pl-[10px]">Duration: Year</p>

<button className='bg-transparent hover:bg-lightblue font-bold hover:text-white border border-lightblue py-1 px-2 rounded text-lightblue w-[300px] mt-[20px] mb-[20px] ml-[100px]' onClick={()=>{cancelResidence}}>Cancel Residence</button>
</div>
<div className="bg-white w-[580px] h-[250px] mt-[30px] rounded-md w-1/2 mr-[10px] ">
<h1 className="pt-[15px] pl-[10px] pb-[5px] font-bold">Funding</h1>
<div className="bg-sky h-[1px]"  style={{width:"100%"}}></div>
<p className="p-[10px]">Funded by : NSFAS</p>
<p className="pb-[10px] pl-[10px]">Institution : {profile.institution}</p>
<p className="pb-[10px] pl-[10px]">Year of study : {profile.yearOfStudy}</p>
<p className="pb-[10px] pl-[10px]">Faculty: ICT</p>

</div>
</div>
</div>

</div>


)

}
export default StudProfile;