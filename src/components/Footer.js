import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
       <div className="socialMedia">
       <a target={'blank'} href="https://www.instagram.com/"><Instagram/></a>
       <a href="https://www.facebook.com/login/" target={'blank'}><Facebook/></a>
       <a href="https://twitter.com/home?lang=en" target={'blank'}><Twitter/></a>
       <a href="https://www.linkedin.com/feed/" target={'blank'}><LinkedIn/></a>
       </div>
       <p>&copy; 2022 qfc.com</p> 
    </div>
  )
}

export default Footer
