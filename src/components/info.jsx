import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSheetPlastic, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="info-container">
        <h1>Welcome! Create custom QR codes for emails, phone numbers, Facebook, Instagram, X/Twitter, and more in just a few clicks. It’s fast, easy, and free!</h1>
         <div className='info'>
        <div className='info-item'><FontAwesomeIcon icon={faFacebook} /> Facebook</div>
        <div className='info-item'><FontAwesomeIcon icon={faXTwitter} /> X/Twitter</div>
        <div className='info-item'><FontAwesomeIcon icon={faInstagram} /> Instagram</div>
        <div className='info-item'><FontAwesomeIcon icon={faEnvelope} />Email</div>
        <div className='info-item'><FontAwesomeIcon icon={faSheetPlastic} /> Text</div>
        <div className='info-item'><FontAwesomeIcon icon={faGlobe} /> Url's</div>
    </div>
    </div>
   
  )
}

export default Info