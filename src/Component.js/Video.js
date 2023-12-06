import React from 'react'

function Video() {
  return (
   <>
   <br/><br/>
         <div >
    <div  className='d-flex  justify-content-center' >
            <h5 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"rgb(154,205,50)"}}>Latest</h5>
        </div>
        <div className='d-flex  justify-content-center' >
            <h1 style={{fontSize:"50px", fontWeight: '900'}}>Watch Video</h1>
            
        </div>
        <br/><br/>
        <div className='container'  >
          <div style={{position:"relative",textAlign:"center"}}>
          <img src="https://www.seafeastsushi.com/Contents/images/experience/authentic-favor.jpg" width="100%" height="550px"/>
    
            <div style={{position:"absolute",bottom:"180px",left:"500px",zIndex:"1"}}>
            <img  src="https://www.ridedesigns.com/sites/ridedesigns.com/files/green-video.jpg" width="90px" style={{borderRadius:"50px"}} />
    
            </div>
            
            <div style={{position:"absolute",bottom:"155px",left:"475px",color:"white",padding:"70px"}}  className="spinner-grow spinner-grow-sm"> </div>
            </div>
        </div>
    </div>
   </>

  )
}

export default Video
