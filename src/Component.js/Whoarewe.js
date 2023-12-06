
import React from 'react'

function Whoarewe() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:"	rgb(237, 234, 222)"}}>
        <br/><br/><br/>
    <div className='d-flex  justify-content-center'>
        <div className='who'>
            
        </div>
        <div className='bestfood'  style={{padding:" 0px 50px"}}>
        <div  style={{width:"600px",textAlign:"center",backgroundColor:"white",borderRadius:"5px",position:"relative"}}>
        <h4 style={{  fontFamily: "Audiowide", fontWeight: '900',color:"rgb(154,205,50)"}}>who are we</h4>
       <br/>
        <h1 style={{width:"500px",fontWeight: '900',fontSize:"60px",marginLeft:"50px"}}>Best food traditions from the world</h1>
        <br/>
        <p style={{fontWeight: '500', color:' rgb(174, 174, 174)',width:"500px",marginLeft:"50px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.
        </p>
        <br/>
       <div style={{position:"absolute",top:"470px",left:"200px"}}>

    
        <button type='button' className='btn btn-success' style={{borderRadius:"50px",padding:"16px 50px"}}>
        <span><i class="fa fa-play-circle-o" aria-hidden="true"></i></span><span style={{fontWeight:"600"}}>READ MORE</span>
      </button>
      </div>
        </div>
        </div>
        <div className='whoare'>

        </div>
        
    </div>
    <br/><br/><br/><br/><br/>
    </div>
   </>
  )
}

export default Whoarewe
