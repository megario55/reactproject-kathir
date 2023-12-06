
import React from 'react'

function Location() {
  return (
   <>
   <div style={{backgroundColor:"	rgb(237, 234, 222)"}}><br/><br/>
   <div style={{display:"flex",justifyContent:"space-between",padding:"50px"}}>
   <div>
                <div style={{display:"flex"}}>
                   <div >  <i className="fa fa-map-marker" style={{color:"rgb(154,205,50)"}} aria-hidden="true" ></i> </div> 
                   <div style={{marginLeft:"20px"}}>    <h3  style={{color:"rgb(174, 174, 174)",fontSize:"17px"}}>570 8th Ave </h3>
                         <h3  style={{color:"rgb(174, 174, 174)",fontSize:"17px"}}>New York, NY 10018, US</h3>
               </div>
                </div>  <br/>
                <div style={{display:"flex"}}>
                   <div >  <i className="fa fa-phone"  style={{color:"rgb(154,205,50)"}} aria-hidden="true"></i></div> 
                   <div style={{marginLeft:"20px"}}>  <h5 style={{color:"rgb(154,205,50)"}}><a style={{color:"rgb(154,205,50)",textDecoration:"none"}} href=''>(850) 435-4155</a></h5>
                </div>
                </div>  <br/>
                <div style={{display:"flex"}}>
                   <div >  <i className="fa fa-clock-o" style={{color:"rgb(154,205,50)"}} aria-hidden="true"></i>
               </div> 
                   <div style={{marginLeft:"20px"}}> 
                   <h3  style={{color:"rgb(174, 174, 174)",fontSize:"17px"}}>Monday – Friday</h3>
                   <h3  style={{color:"rgb(174, 174, 174)",fontSize:"17px"}}>10.00 AM – 11.00 PM</h3>
               
                    </div>
                </div>
                <br/>

        
   </div>
   <div>
       <h5 style={{textAlign:"center"}}> <img src=" https://mobirise.com/extensions/dinerm4/assets/images/logo2.png" width="100px" /></h5>   <p style={{color:"rgb(174, 174, 174)",textAlign:"center"}}> 
            Lorem ipsum dolor sit consectetur adipiscing.
            <br/> Donec ullamcorper neque dapibus.
            </p>

   </div>
   <div >
            <h2 style={{color:"rgb(154,205,50)",textAlign:"center"}}>Instagram feed</h2>
            <div  className='d-flex justify-content-between'>
            <div>
            <img  src="https://mobirise.com/extensions/dinerm4/assets/images/01.jpg" style={{borderRadius:"10px"}} width="130px"  height="100px" />
            </div>
            <div  style={{marginLeft:"10px"}}>
            <img  src="https://mobirise.com/extensions/dinerm4/assets/images/02.jpg" style={{borderRadius:"10px"}} width="130px" height="100px" />
            </div>
            <div  style={{marginLeft:"10px"}}>
            <img  src="https://mobirise.com/extensions/dinerm4/assets/images/03.jpg"  style={{borderRadius:"10px"}} width="130px" height="100px" />
            </div>
            </div>

           
   </div>
   </div>

   </div>
   </>
  )
}

export default Location