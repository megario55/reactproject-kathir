import React, { useState } from 'react'

function Email() {
  const [email,setEmail]=useState("")
    
  function change1(event){
      
    setEmail(event.target.value)
  }

  function click(){
    if (email===""){
      document.getElementById("d").innerHTML = "please  filling this form!";
      document.getElementById("d").style.backgroundColor="rgb(198, 230, 134)"
    }else{
      document.getElementById("d").innerHTML = "Thanks for filling out the form!";
      document.getElementById("d").style.backgroundColor="rgb(198, 230, 134)"
    }
  }

  return (
    <>
    <div style={{backgroundColor:" rgb(168, 200, 104)"}}>
    <div className='container d-flex p-5' style={{backgroundColor:" rgb(168, 200, 104)",justifyContent:"space-around"}}>
     <div >
        <br/><br/>   <br/><br/>
     <h1 style={{color:"white",fontSize:"60px", fontWeight: '900'}}>Let's connect!</h1>
     <p style={{width:"740px",color:"white"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p id='d' style={{padding:"10px",width:"300px"}}></p>
      <div > 
      <input  onChange={change1} value={email} type='email' style={{width:"350px" ,height:"60px",borderRadius:"30px",border:"1px solid white"}} placeholder='        Your email address' />
        <button onClick={click} type='button' className='btn btn-light' style={{borderRadius:"50px",padding:"16px 50px",marginLeft:"10px"}}>
        <i class="fa fa-bell" aria-hidden="true"></i> <span style={{fontWeight:"600"}}>SUBSCRIBE</span>
      </button>
     
 
      </div>
     </div>
    <div>
        <img src="https://mobirise.com/extensions/dinerm4/assets/images/04.png" width="95%" />
    </div>
    </div>
    </div>
    </>
  )
}

export default Email
