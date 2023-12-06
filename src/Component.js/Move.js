import React from 'react'

function Move() {
  return (
    <>
    <br/><br/><br/><br/>
    <div className='container-fluid' style={{position:"relative",backgroundColor: " rgb(168, 200, 104)",width:"800px",height:"700px",borderRadius:"100%"}}>
      <br/><br/>
      <div className='movefood' style={{position:"absolute"}} >
      <img  src="https://mobirise.com/extensions/dinerm4/assets/images/03.png" width="400px" />
    </div> 
   <div className='deliver' >
    <div>
    
    </div>
    <div>
    <div>
    <i className="fa-brands fa-apple" style={{color:"white",fontSize:"60px"}}></i>
    <h6 style={{width:"200px",color:"white"}}>A new look on the right food!</h6>
    </div><br/><br/><br/>
    <div>
    <i class="fa-solid fa-globe" style={{color:"white",fontSize:"60px"}}></i>
    <h6 style={{width:"150px",color:"white"}}>The use of natural best quality products</h6>
    </div>
    
    
    </div>
    </div>
    <div style={{ display: "flex",justifyContent: "space-around",marginLeft:"80px",padding:"100px 200px"}}>
    <div >
    <i className="fa-solid fa-truck" style={{color:'white',fontSize:"60px"}}></i>
    <h6 style={{width:"180px",color:"white"}}>Fastest delivery on your door step</h6>
    </div>
    <div>
    <i className="fa fa-users" aria-hidden="true"  style={{color:"white",fontSize:"60px"}}></i>
    <h6 style={{width:"180px",color:"white"}}>World’s best Chef and Nutritionist!</h6>
    </div>
    </div>
    </div>
    </>
  )
}

export default Move
