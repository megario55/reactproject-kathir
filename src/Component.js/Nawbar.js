import React, { useEffect, useState } from 'react'





function Nawbar() {

  const [navbar,setNavbar]=useState({backgroundColor: "rgb(168, 200, 104)"});
  const listenScroll=(event)=>{
    if (window.scrollY > 10) {
      setNavbar({ backgroundColor:"black"}) ;
      document.getElementById("kgf").style.width="65px";
      document.getElementById("kgf").style.marginTop="10px";

    } else {
      setNavbar({ backgroundColor:"rgb(168, 200, 104)"}) ;
      document.getElementById("kgf").style.width="80px";
      document.getElementById("kgf").style.marginTop="0px";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  },[navbar])

 


  return (
    <><div className='header' style={navbar}>
    <div className='container' style={{display:"flex",justifyContent:"space-between"}}>
      <div>
     
      <h5 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"white",textAlign:"center"}}> <img id="kgf" src="https://mobirise.com/extensions/dinerm4/assets/images/logo2.png " width="80px"/>DINERMY</h5>
      </div>
      <div  className='d-flex naw1' style={{listStyle:"none",padding:"30px 20px"}} >
      
        <li className='naw2'>HOME</li>
        <li className='naw2'>
                <div className="dropdown1">
          <p>LIVE DEMO</p>
          <div className="dropdown1-content1">
          <a href="#">Thai Food Demo </a>
          <a href="#">Pizza Bar Demo</a>
          <a href="#">Sushi Cafe Demo</a>
          </div>
        </div>
        
  


        </li>
        <li className='naw2'>
        <div className="dropdown2">
          <p>LIVE DEMO BLOCKS</p>
          <div className="dropdown2-content2">
          <a href="#">Headers / Features / Pricing / Info </a>
          <a href="#">Content / Shop / Accordions / Video</a>
          <a href="#">Gallery / Team / Testimonials / Forms</a>
          <a href="#">Progress / Maps / Contacts / Footers</a>
          </div>
        </div>
        </li>
       
        <li className='naw2'  >
        <a href='#' className='naw3'>  BUY NOW</a>

   
         
          </li>
      
      </div>
    </div>



    </div>
  
   

    </>
  )

}

export default Nawbar
