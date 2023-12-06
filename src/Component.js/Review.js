import React from 'react'

function Review() {
  return (
   <>
   <div style={{ backgroundColor: "rgb(250, 250, 240)"}}>
   <div><br/><br/>
     <div className='d-flex  justify-content-center' >
            <h6 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"rgb(154,205,50)"}}>Reward</h6>
     </div>
    <div className='d-flex  justify-content-center' >
            <h1 style={{fontSize:"40px", fontWeight: '900'}}>Clients review</h1>
    </div>
   
   </div>
   <div className='container'>

   <div id="demo" class="carousel slide" data-bs-ride="carousel">


  

<div className="carousel-inner p-5">
  <div className="carousel-item active" style={{textAlign:"center"}}>
    
    <h5 style={{ fontWeight: '900',width:"750px",marginLeft:"200px",display:"flex",justifyContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h5>
   
   <br/> <img src="https://mobirise.com/extensions/dinerm4/assets/images/face3.jpg" width="110px" height="110px" style={{borderRadius:"50%"}} />
   <br/> 
   <h4>Ben Stifler</h4>
    <h6>Desinger</h6>
  </div>
  <div className="carousel-item" style={{textAlign:"center"}}>
  <h4 style={{ fontWeight: '900',width:"750px",marginLeft:"200px",display:"flex",justifyContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
  <br/>  <img src="https://mobirise.com/extensions/dinerm4/assets/images/face1.jpg" width="110px" height="110px" style={{borderRadius:"50%"}} />
  <br/>  
  <h4>Ann Grayson</h4>
    <h6>Manager</h6>
  </div>
 <div className="carousel-item" style={{textAlign:"center"}}>
      <h4 style={{ fontWeight: '900',width:"750px",marginLeft:"200px",display:"flex",justifyContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
      <br/>  <img src="https://mobirise.com/extensions/dinerm4/assets/images/face2.jpg" width="110px" height="110px" style={{borderRadius:"50%"}} />
      <br/> 
    <h4>Jane Brown</h4>
    <h6>Client</h6>
 </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span  style={{color:"black",fontSize:"80px"}} className="carousel-control-prev-icon"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo"  data-bs-slide="next">
  <span style={{color:"black",fontSize:"80px"}} className="carousel-control-next-icon"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
</button>
</div>



   </div><br/><br/><br/><br/><br/>
   </div>
   </>
  )
}

export default Review
