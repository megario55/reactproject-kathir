import React from 'react'

function Thaifood() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:' rgb(168, 200, 104)',color:"white"}}>
    <br/> <br/>
      <h1 style={{textAlign:"center",fontSize:"60px", fontWeight: '900'}}>Thai Food</h1>
      <br/>
      <div className='k'>
      <p style={{textAlign:'center',width:"740px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.
      </p>
      </div>
      <br/>
      <div className='d-flex justify-content-center'>
      <button type='button' className='btn btn-light' style={{borderRadius:"50px",padding:"16px 50px"}}>
      <i className="fa fa-shopping-cart" aria-hidden="true" style={{color: '#000000'}}></i><span style={{fontWeight:"600"}}> ORDER NOW</span>
      </button>
      </div>
      <br/><br/>
      <div className='d-flex justify-content-center'>
        <img src="https://mobirise.com/extensions/dinerm4/assets/images/03.png" width="60%" />
      </div><br/><br/>
    </div>
   
    </>
  )
}

export default Thaifood
