
import '../css/application.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { getStorage, ref, getDownloadURL, uploadBytes,uploadBytesResumable } from "firebase/storage";

const Application =()=>{

    const [step, setStep] = useState(1);
    const [apply, setApply] =useState({})
   
    const [kinId, setKinId] = useState(null);
    const [idDocument, setIdDocument] = useState(null);
    const [funding, setFunding] = useState(null);
    const [transcript,setTranscript] = useState(null);
    const [registration,setRegistration] = useState(null);
    const nextStep = () => {
       
      setStep(step+1);
     
    };
    
  
    const prevStep = () => {
        
      setStep(step - 1);
    
    };

    const inputChange = (e) => {
      const { name, value } = e.target;

  setApply((prevData) => ({
    ...prevData,
    [name]: value,
  }));
    };

    
    const handleIdChange = (e) => {
      const selectedFile = e.target.files[0];
      setIdDocument(selectedFile);
    };
    
    const handleFundingChange = (e) => {
      
      if (e.target.files[0]) {
        setFunding(e.target.files[0]);
        }
    };

    const handleTranscriptChange = (e) => {
      const selectedFile = e.target.files[0];
      setTranscript(selectedFile);
    };

    const handleRegChange = (e) => {
      const selectedFile = e.target.files[0];
      setRegistration(selectedFile);
    };
    const handlekinIdChange = (e) => {
      const selectedFile = e.target.files[0];
      setKinId(selectedFile);
    };

    const handleUpload = async () => {
      if (idImage && certificateImage && capVal) {
        const storage = getStorage();
    
      
        const idStorageRef = ref(storage, `studentApplications/${idDocument.name}`);
        const idUploadTask = uploadBytesResumable(idStorageRef, idDocument);
    
        const kinIdStorageRef = ref(storage, `studentApplications/${kinId.name}`);
        const kinIdUploadTask = uploadBytesResumable(kinIdStorageRef, kinId);

        const fundStorageRef = ref(storage, `studentApplications/${funding.name}`);
        const fundUploadTask = uploadBytesResumable(fundStorageRef, funding);
    
        const transcriptStorageRef = ref(storage, `studentApplications/${transcript.name}`);
        const transcriptUploadTask = uploadBytesResumable(transcriptStorageRef, transcript);
    
        const regStorageRef = ref(storage, `studentApplications/${registration.name}`);
        const regUploadTask = uploadBytesResumable(regStorageRef, registration);
    
    
        Promise.all([idUploadTask, kinIdUploadTask, fundUploadTask, transcriptUploadTask, regUploadTask])
          .then(([idSnapshot, kinIdSnapshot, fundSnapshot, transcriptSnapshot, regSnapshot]) => {
           
            return Promise.all([
              getDownloadURL(idSnapshot.ref),
              getDownloadURL(kinIdSnapshot.ref),
              getDownloadURL(fundSnapshot.ref),
              getDownloadURL(transcriptSnapshot.ref),
              getDownloadURL(regSnapshot.ref)
            ]);
          })
          .then(([idDownloadURL, kinIdDownloadURL, fundingDownloadURL,transcriptDownloadURL,registrationDownloadURL]) => {
            
            axios.post("http://localhost:8080/api/v1/application/saveApplication", {
             firstname:apply.firstname, lastname:apply.lastname, idNumber:apply.idNumber, dob:apply.dob, 
             gender:apply.gender, email:apply.email, cellNo:apply.cellNo, address:apply.address, kinName:apply.kinName, 
             kinSurname:apply.kinSurname, relationship:apply.relationship, kinEmail:apply.kinEmail, kinNumber:apply.kinNumber,
             school:apply.school, currentGrade:apply.currentGrade, applyGrade:apply.applyGrade, idDocument:idDownloadURL,
             results:certificateDownloadURL, status:"Submitted"
              
            },
           
            
            
            
            ).then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Successfully added application',
              });
            }).catch((error) => {
              console.error("Error occurred while making the API call:", error);
            });
          })
          .catch((error) => {
            
            console.error("Error occurred during upload:", error);
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to upload application.',
        });
      }
    };



return(

    <div>
<div className="row">
    <div className="col-md-12 col-md-offset-4 ">

        <div id="msform" className='w-screen fixed bg-white'>
        <ul id="progressbar" className=' mt-[50px] '>
                <li  className={step >= 1 ? 'active' : ''}>Personal Details</li>
                <li  className={step >= 2 ? 'active' : ''}>Next of Kin</li>
                <li  className={step >= 3 ? 'active' : ''}>Documents</li>
                <li  className={step >= 4 ? 'active' : ''}>Review</li>
            </ul>
        </div>
        <form id="msform1" >
           
          
            <div className="fieldset-container  ml-[20px] mr-[20px] mt-[150px] md:m-[100px] md:mt-[200px]">
            <div className={`fieldset  ${step === 1 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title ">Personal Details</h2>
              <h3 className="fs-subtitle text-white">Tell us something more about you</h3>
                 <div className='m-[10px]'>
    
                 <div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Firstname</label>
        <input id="firstname" name="firstname" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Name"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Lastname</label>
        <input id="lastname" name="lastname" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Surname"/>
    </div>
</div>
<div className="form-group flex flex-wrap ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">ID Number</label>
        <input id="firstname" name="idNumber" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="id number"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label className="block text-sm font-medium text-gray-700">DOB</label>
        <input id="lastname" name="dob" onChange={inputChange} type="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
</div>

<div className="form-group flex flex-wrap ml-[100px]">
<div className="w-full md:w-1/3"> 
        <label  className="block text-sm font-medium text-gray-700">Gender</label>
        <input id="lastname" name="gender" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
         <div className="w-full md:w-1/2  mt-1 md:mt-0 md:ml-2">
        <label  className="block text-sm font-medium text-gray-700">Email</label>
        <input id="firstname" name="email" onChange={inputChange} type="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="example@gmail.com"/>
    </div>
 
</div>
<div className="form-group flex flex-wrap ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Home Address</label>
        <input id="firstname" name="homeAddress" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="address"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Cell Number</label>
        <input id="lastname" name="cellNo" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
</div>      
  
              

        </div>
        <div className='mt-[50px]'>
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Next"
                onClick={nextStep}
              />
            </div>
</div>

            
            <div className={`fieldset ${step === 2 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title p-[30px]">Next of kin</h2>

              <div className='m-[20px]'>
              <div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Name</label>
        <input id="firstname" name="kinName" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Name"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Surname</label>
        <input id="lastname" name="kinSurname" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Surname"/>
    </div>
</div>
    
<div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full   md:w-1/3 mt-1 md:mt-0 ">
        <label  className="block text-sm font-medium text-gray-700">Relationship</label>
        <input id="firstname" name="kinRelationship" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Email</label>
        <input id="lastname" name="kinEmail" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="example@gmail.com"/>
    </div>
</div>

<div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Cell Number</label>
        <input id="firstname" name="kinNumber" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">ID Document</label>
        <input id="lastname" name="kinID" onChange={handlekinIdChange} type="file" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Surname"/>
    </div>
</div>
                

        </div>
        <div className='mt-[50px]'>
              <input
                type="button"
                name="previous"
                className="previous action-button-previous"
                value="Previous"
                onClick={prevStep}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Next"
                onClick={nextStep}
              />
              </div>
            </div>
         
            <div className={`fieldset ${step === 3 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title">DOCUMENTS</h2>
              <h3 className="fs-subtitle">Fill in your credentials</h3>
              
              <div class="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Institution Name</label>
        <input id="firstname" name="institution" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="institution name"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Campus</label>
        <input id="lastname" name="campus" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="campus"/>
    </div>
</div>
<div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full md:w-1/2">
        <label  className="block text-sm font-medium text-gray-700">Funding</label>
        <input id="firstname" name="funding" onChange={inputChange} type="text" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="funding"/>
    </div>
    <div className="w-full md:w-1/3 mt-1 md:mt-0 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Year of study</label>
        <input id="lastname" name="studyYear" onChange={inputChange} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="1st year"/>
    </div>
</div>
<div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full   md:w-1/3 mt-1 md:mt-0 ">
        <label  className="block text-sm font-medium text-gray-700">ID Document</label>
        <input id="firstname" name="id" onChange={handleIdChange} type="file" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Proof of funding</label>
        <input id="lastname" name="fundProof" onChange={handleFundingChange} type="file" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="example@gmail.com"/>
    </div>
</div>
<div className="form-group flex flex-wrap md:ml-[100px]">
         <div className="w-full   md:w-1/3 mt-1 md:mt-0 ">
        <label  className="block text-sm font-medium text-gray-700">Transcript</label>
        <input id="firstname" name="transcript" onChange={handleTranscriptChange} type="file" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 md:ml-2"> 
        <label  className="block text-sm font-medium text-gray-700">Proof of Registration</label>
        <input id="lastname" name="regProof" onChange={handleRegChange} type="file" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="example@gmail.com"/>
    </div>
</div>
            

    
        <div className='mt-[50px]'>
              <input
                type="button"
                name="previous"
                className="previous action-button-previous"
                value="Previous"
                onClick={prevStep}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Next"
                onClick={nextStep}
              />
            </div>
</div>

            <div className={`fieldset ${step === 4 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title">REVIEW</h2>
              <h3 className="fs-subtitle">Please verify your details again</h3>

                <div className='row review'> 
                <h1>Personal Details</h1>
                <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">First Name :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.firstname}</p>
    </div>
</div>
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Surname :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.lastname}</p>
    </div>
</div>
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">ID Number :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.idNumber}</p>
    </div>
</div>
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Date of Birth :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.dob}</p>
    </div>
</div>
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Gender :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.gender}</p>
    </div>
</div>  
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Email :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.email}</p>
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Cellphone No :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.cellNo}</p>
    </div>
</div>  
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Home Address :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.homeAddress}</p>
    </div>
</div>  
              
              
              <h1>Next of Kin</h1>
              <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Name :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.kinName}</p>
    </div>
</div>  
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Surname :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.kinSurname}</p>
    </div>
</div>   
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Relationship :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.kinRelationship}</p>
    </div>
</div>   
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Email :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.kinEmail}</p>
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Cell Number :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.kinNumber}</p>
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">ID Document :</p>
    </div>
    <div className="w-full md:w-1/2">
  
   
    { kinId ?
                <p className="float-start p-[5px]" >{kinId.name}</p> :
                <p className="float-start p-[5px]">No next of kin Id selected</p>
                }
                 </div>
</div> 
            
             
              
               
              <h1>School Details</h1>

              <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Institution Name :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.institution}</p>
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Campus :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.campus}</p>
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Funding :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.funding}</p>
    </div>
</div>   
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Year fo study :</p>
    </div>
    <div className="w-full md:w-1/2">
        <p className="float-start p-[5px]">{apply.studyYear}</p>
    </div>
</div>    
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">ID Document :</p>
    </div>
    <div className="w-full md:w-1/2">
        

        { idDocument ?
                <p className="float-start p-[5px]" >{idDocument.name}</p> :
                <p className="float-start p-[5px]">No ID document selected</p>
                }
    </div>
</div>     
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Proof of funding :</p>
    </div>
    <div className="w-full md:w-1/2">
        
        { funding ?
                <p className="float-start p-[5px]" >{funding.name}</p> :
                <p className="float-start p-[5px]">No proof of funding selected</p>
                }
    </div>
</div> 
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Transcript :</p>
    </div>
    <div className="w-full md:w-1/2">
        
        { transcript ?
                <p className="float-start p-[5px]" >{transcript.name}</p> :
                <p className="float-start p-[5px]">No transcript selected</p>
                }
    </div>
</div>              
<div className="flex flex-wrap">
    <div className="w-full md:w-1/2 review_details flex justify-end">
        <p className="float-end">Proof of registration :</p>
    </div>
    <div className="w-full md:w-1/2">
     
        { registration ?
                <p className="float-start p-[5px]" >{registration.name}</p> :
                <p className="float-start p-[5px]">No proof of registration selected</p>
                }
    </div>
</div>             
                    
                </div>

            <div className='mt-[50px]'>
              <input
                type="button"
                name="previous"
                className="previous action-button-previous"
                value="Previous"
                onClick={prevStep}
              />
              <input
                type="submit"
                name="submit"
                className="submit action-button"
                value="Submit"
                onClick={()=>{handleUpload}}
              />
              </div>
            </div>
          </div>
        
        </form>
       
    </div>
    
</div>

    </div>

)

}
export default Application;