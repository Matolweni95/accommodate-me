import React from 'react'
import SideNav from './TempSideNav'

function SearchPortal() {
  return (
    <div>
        <SideNav>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14320.744663247411!2d28.03031845!3d-26.190621649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1712566874970!5m2!1sen!2sza"
                width="100%"
                height="100%"
                className='p-5 md:p-0'
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >

            </iframe>
    </SideNav>
    </div>
  )
}

export default SearchPortal