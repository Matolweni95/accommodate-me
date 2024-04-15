import React, { useState } from 'react'
import SideNav from './TempSideNav'

function CompanyProfile() {
    const [imagePreview, setImagePreview] = useState(null);
    const [galleryImagePreview, setGalleryImagePreview] = useState(Array(6).fill(null));


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleGalleryImageChange = (index, e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newGalleryPreview = [...galleryImagePreview];
        newGalleryPreview[index] = reader.result;
        setGalleryImagePreview(newGalleryPreview);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
        <SideNav>
            <div className='flex flex-col gap-4 '>
                <div className='flex justify-between bg-white p-5 w-full rounded-lg '>
                    <div className='purplebubble w-[350px] h-[155px] rounded-lg'>
                        <div className='p-5'>
                            <div className='bg-white w-[50px] h-[50px] rounded-md'>

                            </div>
                            <h1>Views</h1>
                        </div>
                    </div>
                    <div className='lightbluebubble w-[350px] h-[155px] rounded-lg'>
                    <div className='p-5'>
                            <div className='bg-white w-[50px] h-[50px] rounded-md'>

                            </div>
                            <h1>Views</h1>
                        </div>
                    </div>
                    <div className='orangebubble w-[350px] h-[155px] rounded-lg'>
                    <div className='p-5'>
                            <div className='bg-white w-[50px] h-[50px] rounded-md'>

                            </div>
                            <h1>Views</h1>
                        </div>  
                    </div>
                </div>
                <div className='profile min-h-[50vh]'>
                    <div className='bg-white w-full min-h-[calc(100vh-30vh)] rounded-lg p-5 flex justify-between overflow-auto'>
                        <div>
                            <div className='bg-gray w-[200px] h-[200px] flex items-center justify-center'>
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className=" hero_img max-w-full max-h-full" />
                                ) : (
                                    <button>
                                    <label htmlFor="fileInput">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </label>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                    </button>
                                )}
                            </div>
                            <div>
                                <div>
                                    <h1>Number of rooms</h1>
                                    <h1>Number of Single rooms</h1>
                                    <h1>Number of Double rooms</h1>
                                    <h1>Other Information:</h1>
                                    <h1>Unlimited WIFI:</h1>
                                    <h1>Free Gym:</h1>
                                    <h1>24/hr Security & Surveillance:</h1>
                                    <h1>24/hr Security & Surveillance:</h1>
                                    <h1>Entertsinment Area</h1>

                                </div>

                            </div>
                       </div>
                       <div>
                            <h1>The Moray House</h1>
                            <h4>your house  away from home</h4>
                            <h4>197 Rahima Moosa street</h4>
                            <h4>Gauteng</h4>
                            <h4>Johannesburg</h4>
                            <h4>The Moray House</h4>
                            <h4>Reg no: JH7D23435</h4>
                       </div>
                       <div className='bg-gray p-5'>

                        <h1>Gallery</h1>
                        <div className='gallery flex gap-5 justify-center flex-wrap w-[300px]'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className='flex gap-5'>
                            <div className='bg-white w-[120px] h-[120px] flex items-center justify-center'>
                                {galleryImagePreview[index] ? (
                                <img src={galleryImagePreview[index]} alt={`Preview ${index + 1}`} className="max-w-full max-h-full" />
                                ) : (
                                <label htmlFor={`galleryFileInput-${index}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                    </svg>
                                </label>
                                )}
                                <input
                                id={`galleryFileInput-${index}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleGalleryImageChange(index, e)}
                                style={{ display: 'none' }}
                                />
                            </div>
                            </div>
                        ))}
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </SideNav>
    </>
  )
}

export default CompanyProfile