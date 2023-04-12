import React from 'react'
import image from '../assets/aboutus.jpg'
import "../styles/About.css";

function About() {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <h3>Journey of fried chicken, through the ages</h3>
                <p>It all started with Colonel Harland Sanders creating a finger lickin’ good recipe more than 5 years ago. A list of secret herbs and spices scratched out on the back of his kitchen door, with more than 500 team members breading and freshly preparing bucket after bucket of our signature Hot & Crispy chicken. The Colonel’s Secret Recipe continues to be as guarded; and our commitment towards Food, People and Planet remains as steadfast. With a new QFC restaurant opening every year, we power on to serve the World’s Tastiest Chicken!</p>
            </div>
        </div>
    )
}

export default About