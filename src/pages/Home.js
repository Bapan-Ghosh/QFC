import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/front.jpg"
import "../styles/Home.css";

function Home() {
  return(
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
         <div className='headerContainer' >
           <h1>Peri Peri SPECIAL</h1>  
           {/* <p>Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)</p> */}
           <Link to="/menu">
             <button> ORDER NOW</button>
           </Link>
         </div>
    </div>
  )
}

export default Home