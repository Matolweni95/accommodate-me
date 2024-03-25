// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/application.css'
import { useEffect, useState } from 'react';

const Application =()=>{

    const [step, setStep] = useState(1);
    const [apply, setApply] =useState({})

    const nextStep = () => {
       
      setStep(step+1);
     
    };
    
  
    const prevStep = () => {
        
      setStep(step - 1);
    
    };

    useEffect(()=>{


        console.log("Current Step:", step);



    },[])

    

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
           
          
            <div className="fieldset-container  ml-[20px] mr-[20px] mt-[150px] md:m-[200px]">
            <div className={`fieldset ${step === 1 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title ">Personal Details</h2>
              <h3 className="fs-subtitle text-white">Tell us something more about you</h3>
                 <form className='m-[10px]'>
    
                <div class="form-group row">
                    
                    <div class="col ">
                    <label for="" class="col-sm-2 col-form-label float-start">Firstname</label>
                    <input type="text"   placeholder="name"/>
               </div>
               <div class="col">
                    <label for="" class="col-sm-2 col-form-label float-start">Lastname</label>
                    <input type="text"   placeholder="surname"/>
               </div>
               </div>

                <div class="form-group row">
                  
                    <div class="col">
                    <label class="col-sm-3 col-form-label float-start">Id Number</label>
                    <input type="text" placeholder="gender"/>
                    </div>
                    <div class="col">
                    <label for="inputPassword" class="col-sm-2 col-form-label float-start">DOB</label>
                    <input type="date" placeholder="gender"/>
                    </div>
                </div>

                <div class="form-group row">
                 
                    <div class="col">
                    <label for="inputPassword" class="col-sm-5 col-form-label float-start">Gender</label>
                    <input type="text"  placeholder=""/>
                    </div>
                    <div class="col-sm-8">
                    <label for="inputPassword" class="col-sm-2 col-form-label float-start">Email</label>
                    <input type="email"  placeholder="example@email.com"/>
                    </div>
                </div>
  
                <div class="form-group row">
                  
                    <div class="col-sm-6">
                    <label for="staticEmail" class="col-sm-3 col-form-label float-start">Cellphone No</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                    <div class="col-sm-6">
                    <label for="staticEmail" class="col-sm-2 col-form-label float-start">Address</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                </div>
              

        </form>
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

              <form className='m-[20px]'>
    
                <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                    <input type="text"   placeholder="name"/>
               </div>
               </div>

               
               <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Surname</label>
                    <div class="col-sm-10">
                    <input type="text"  placeholder="surname"/>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Relationship</label>
                    <div class="col-sm-10">
                    <input type="text" placeholder=""/>
                    </div>
                </div>

  
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Cellphone No</label>
                    <div class="col-sm-10">
                    <input type="text"   placeholder=""/>
                    </div>
                </div>

        </form>
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
              
              <div class="form-group row">
             
                    <div class="col-sm-12">
                    <label for="" class="col-sm-2 col-form-label float-start">Institution name</label>
                    <input type="text"   placeholder="name"/>
               </div>
               <div class="col-sm-12">
                    <label for="" class="col-sm-1 col-form-label float-start">Campus</label>
                    <input type="text"   placeholder="surname"/>
               </div>
               <div class="col-sm-12">
                    <label for="" class="col-sm-1 col-form-label float-start">Funding</label>
                    <input type="text"   placeholder="surname"/>
               </div>
               </div>

               <div class="form-group row">
             
             <div class="col-sm-6">
             <label for="" class="col-sm-6 col-form-label float-start">ID Document</label>
             <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                
                </div>
        </div>
        <div class="col-sm-6">
             <label for="" class="col-sm-6 col-form-label float-start">Matric Certificate</label>
             <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
         
                </div>
        </div>
        
        </div>

        <div class="form-group row">
             
             <div class="col-sm-6">
             <label for="" class="col-sm-6 col-form-label float-start">Transcript</label>
             <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
         
                </div>
        </div>
        <div class="col-sm-6">
             <label for="" class="col-sm-6 col-form-label float-start">Proof of registration</label>
             <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
         
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

            <div className={`fieldset ${step === 4 ? 'active' : 'visibility'}`}>
              <h2 className="fs-title">REVIEW</h2>
              <h3 className="fs-subtitle">Please verify your details again</h3>

                <div className='row review'> 
                <h1>Personal Details</h1>
                <div className='row'>
               <div className='col review_details'>
                <p className='float-end '>First Name :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Cynthia</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Surname :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Dladla</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>ID Number :</p>
               </div>
               <div className='col'>
                <p className='float-start '>6901258485858</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Date of Birth :</p>
               </div>
               <div className='col'>
                <p className='float-start '>1968-01-25</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Gender :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Female</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Cellphone No :</p>
               </div>
               <div className='col'>
                <p className='float-start '>0712345678</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Home Address :</p>
               </div>
               <div className='col'>
                <p className='float-start '>51 paark street, johannesburg</p>
              </div>
              </div>
              
              <h1>Next of Kin</h1>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Name :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Andries</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Surname :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Dladla</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Relationship :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Father</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Email :</p>
               </div>
               <div className='col'>
                <p className='float-start '>a.dladla@gmail.com</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Cellphone No :</p>
               </div>
               <div className='col'>
                <p className='float-start '>0134315408</p>
              </div>
              </div>
               
              <h1>School Details</h1>
              
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Institution Name :</p>
               </div>
               <div className='col'>
                <p className='float-start '>University of Pretoria</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Campus :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Hadfield Campus</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>ID Document :</p>
               </div>
               <div className='col'>
                <p className='float-start '>Id.pdf</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Matric Certificate :</p>
               </div>
               <div className='col'>
                <p className='float-start '>matric.pdf</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Transcript :</p>
               </div>
               <div className='col'>
                <p className='float-start '>transcript.pdf</p>
              </div>
              </div>
              <div className='row'>
              <div className='col review_details'>
                <p className='float-end '>Proof of registration :</p>
               </div>
               <div className='col'>
                <p className='float-start '>registration.pdf</p>
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