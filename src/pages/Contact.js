import React from 'react';
import image from "../assets/qfcLeft.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id="contact-form" method="post">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder='Enter full name..' type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder='Enter email..' type="email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" rows="6" placeholder='Enter message...' required>
                </textarea>
             
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact