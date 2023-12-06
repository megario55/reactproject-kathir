import React from 'react'

function Reward() {
  return (
    <>
    <div className="row " style={{padding:"50px 100px",width:"100%",backgroundColor:"	rgb(32,32,32)"}}>
    <div className='col-lg-4'>
    <br/><br/>
    <h6 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"red"}}>Delivery</h6>
    <h1 style={{fontSize:"45px",color:"white", fontWeight: '900'}}>Choose what you want</h1><br/>
    <p style={{color:"white",fontSize:"15px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.
     </p><br/><br/>
     <button type='button' className='btn btn-danger' style={{borderRadius:"50px",padding:"16px 50px"}}>
     <i className="fa fa-users" style={{color:"white"}} aria-hidden="true"></i><span style={{fontWeight:"600"}}> ORDER Online</span>
      </button><br/><br/>
     
    </div>
    <div style={{position:"relative"}} className='col-lg-4'>
      <img  style={{position:"absolute",top:"250px"}} width="350px" src="https://mobirise.com/extensions/dinerm4/assets/images/03.png" />
    </div>

    <div className='col-lg-4' style={{textAlign:"end"}}><br/><br/>
    <h6 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"red"}}>Reward</h6>
    <h1 style={{fontSize:"45px",color:"white", fontWeight: '900'}}>Earn points every order</h1><br/>
    <p style={{color:"white",fontSize:"15px"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.
    </p><br/><br/>
     <button type='button' className='btn btn-danger' style={{borderRadius:"50px",padding:"16px 50px"}}>
     <i class="fa fa-podcast" style={{color:"white"}} aria-hidden="true"></i><span style={{fontWeight:"600"}}>Learn More </span>
      </button><br/><br/><br/><br/><br/><br/><br/>
     
    </div>

    </div>
    
    </>
  )
}

export default Reward
