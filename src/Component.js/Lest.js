import React from 'react'

function Lest() {
  return (
   <>
   <div style={{backgroundColor: 'rgb(168, 200, 104)',padding:"80px 0px"}}>
  <div className='container d-flex ' style={{justifyContent:"space-between"}}>
   <div >
    <span  ><a className='lest' style={{textDecoration:"none"}} href='#'> About us</a></span>
    <span  style={{marginLeft:"30px"}}><a className='lest' style={{textDecoration:"none"}} href='#'>Menu</a></span>
    <span  style={{marginLeft:"30px"}}><a className='lest' style={{textDecoration:"none"}} href='#'>Blog</a></span>
    <span  style={{marginLeft:"30px"}}><a className='lest' style={{textDecoration:"none"}} href='#'>Gallery</a></span>
    <span  style={{marginLeft:"30px"}}><a className='lest' style={{textDecoration:"none"}} href='#'>Help</a></span>
    <span  style={{marginLeft:"30px"}}><a className='lest' style={{textDecoration:"none"}} href='#'>Content</a></span>
    <br/><br/>
    <h6 style={{color:"white"}}>© Copyright 2019 Mobirise - All Rights Reserved</h6>
   </div>

   <div className="row">
   <div className='col'><i  id="face" className="fa fa-twitter" style={{color:"white",marginLeft:"10px",borderRadius:"20px",backgroundColor:"black"}} aria-hidden="true"></i>
  </div>
   <div className='col'><i id="face" className="fa fa-facebook" style={{color:"white",marginLeft:"10px",borderRadius:"20px",backgroundColor:"black"}} aria-hidden="true"></i>
  </div>
   <div className='col'> <i id="face" className="fa fa-youtube-play" style={{color:"white",marginLeft:"10px",borderRadius:"20px",backgroundColor:"black"}} aria-hidden="true"></i>
  </div>
   <div className='col'><i id="face" className="fa fa-vimeo" style={{color:"white",marginLeft:"10px",borderRadius:"20px",backgroundColor:"black"}} aria-hidden="true"></i>
  </div>
    
    </div>

  </div>
  </div>
   </>
  )
}

export default Lest
