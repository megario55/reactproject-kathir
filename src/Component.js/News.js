import React from 'react'

function News() {
  return (
    <>
    <div className='container'>
        <div >
        <h5 style={{  fontFamily: "Audiowide",textAlign:"center", fontWeight: '900',color:"red"}}>news</h5>
        <h1 style={{textAlign:"center",fontSize:"60px", fontWeight: '900'}}>This is all about food</h1>
        </div>
        <br/> <br/> <br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div className="card" style={{width:"350px",backgroundColor:"rgb(239, 239, 239)",border:"rgb(239, 239, 239)"}}>
       
       
       
       
       
        <div className="card-img-top" id="fix"  style={{width:"280px",height:"280px",borderRadius:"15px",marginLeft:"30px",marginTop:"-30px"}}>
     <div className="ion">
        <div  class="hh1">
            
        </div>
       <div className="kk">

        </div>
        <div className="k1">

        </div>
        <div className="k2">

        </div><div class="k3">

        </div>
     </div>
    </div>
       
       
       
       
       
       
       <div className="card-body">
      <p  style={{color:"#EB0000",fontSize:"17px"}}><i className="fa fa-map-marker" style={{color:"#EB0000"}} aria-hidden="true"></i>THAI <span style={{color:"rgb(239, 239, 239)"}}>sss</span>  <i class="fa fa-map-marker" aria-hidden="true"></i>
        23, DECEMBER, 2019</p>
      <h4 className="card-title">Thai food rules</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <a href="#"  style={{colo:"black",fontWeight:"bold"}} className="btn btn-white">Read More--</a>
    </div>
  </div>

  <div className="card" style={{width:"350px",backgroundColor:"rgb(239, 239, 239)",border:"rgb(239, 239, 239)"}}>
     
     
     
        <div className="card-img-top" id="fix"  style={{width:"280px",height:"280px",borderRadius:"15px",marginLeft:"30px",marginTop:"-30px"}}>
     <div className="ion">
        <div  class="hh2">
            
        </div>
       <div className="kk">

        </div>
        <div className="k1">

        </div>
        <div className="k2">

        </div><div class="k3">

        </div>
     </div>
    </div>
     
     
     
       <div className="card-body">
      <p style={{color:"#EB0000",fontSize:"17px"}}><i class="fa fa-map-marker" style={{color:"#EB0000"}} aria-hidden="true"> </i>PIZZA <span style={{color:"rgb(239, 239, 239)"}}>sss</span> <i class="fa fa-map-marker" style={{color:"#EB0000"}} aria-hidden="true"></i> 23, DECEMBER, 2019</p>
      <h4 className="card-title">How to create pizza</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <a href="#" style={{colo:"black",fontWeight:"bold"}} className="btn btn-white">Read More--</a>
    </div>
  </div>

  <div className="card" style={{width:"350px",backgroundColor:"rgb(239, 239, 239)",border:"rgb(239, 239, 239)"}}>
      

        <div className="card-img-top" id="fix"  style={{width:"280px",height:"280px",borderRadius:"15px",marginLeft:"30px",marginTop:"-30px"}}>
     <div className="ion">
        <div  class="hh">
            
        </div>
       <div className="kk">

        </div>
        <div className="k1">

        </div>
        <div className="k2">

        </div><div class="k3">

        </div>
     </div>
    </div>
       
       
       
       
       <div className="card-body">
      <p style={{color:"#EB0000",fontSize:"17px"}}><i className="fa fa-map-marker" style={{color:"#EB0000"}} aria-hidden="true"></i>SUSHI  <i class="fa fa-map-marker" style={{color:"#EB0000"}} aria-hidden="true"></i><span style={{color:"rgb(239, 239, 239)"}}>sss</span> 23, DECEMBER, 2019</p>
      <h4 className="card-title">Sushi workshop</h4>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <a href="#"  style={{colo:"black",fontWeight:"bold"}} className="btn btn-white">Read More--</a>
    </div>
  </div>
        </div><br/><br/><br/>
    </div>
    </>
  )
}

export default News
