import React from 'react'

function Menu(props) {
  return (
    <>
 
    <div className='d-flex container'>
        <div>
            <img src={props.images} style={{borderRadius:"7px"}} width="110px" height="110px" />
        </div>
        <div style={{marginLeft:"10px"}}>
        <h5 style={{  fontFamily: "Audiowide",width:"115px",padding:"10px",borderRadius:"10px", fontWeight: '900',color:"white",backgroundColor:"rgb(154,205,50)"}}>{props.name}</h5>
      <br/>
       <h4 style={{ fontWeight: '700'}}>{props.title} <span style={{color:"rgb(154,205,50)"}}> {props.price}</span></h4>
    
       <p style={{fontWeight: '500',fontSize:"15px", color:' rgb(174, 174, 174)',width:"400px"}}>{props.dis}
        </p>
        </div>
    </div>
    
    </>
  )
}

export default Menu
