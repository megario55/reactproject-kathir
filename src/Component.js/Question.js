import React, { useState } from 'react'

function Question() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [number,setNumber]=useState("")
  const [comment,setComment]=useState("") 
  function change1(event){
      
    setName(event.target.value)
  }
  function change2(event){
      
    setEmail(event.target.value)
  }
  function change3(event){
      
    setNumber(event.target.value)
  }
  function change4(event){
      
    setComment(event.target.value)
  }

  function click(){
    if (name==="" ||email==="" || number==="" || comment===""){
      document.getElementById("d1").innerHTML = "please  filling this form!";
      document.getElementById("d1").style.backgroundColor="rgb(198, 230, 134)"
    }else{
      document.getElementById("d1").innerHTML = "Thanks for filling out the form!";
      document.getElementById("d1").style.backgroundColor="rgb(198, 230, 134)"
    }
  }

  return (
    <>
    <div className=' d-flex justify-content-around p-5'>
     <div>
     <h1>Ask a question</h1>
     <p id='d1' style={{padding:"10px",width:"300px"}}></p>
     <input onChange={change1} value={name} className="form-control" type='text' style={{width:"500px" ,height:"60px",borderRadius:"10px"}}  placeholder='    Name' />
     <br/>
     <input onChange={change2} value={email} className="form-control" type='email' style={{width:"500px" ,height:"60px",borderRadius:"10px"}} placeholder='    Email' />
     <br/>
     <input onChange={change3} value={number} className="form-control" type='number' style={{width:"500px" ,height:"60px",borderRadius:"10px"}} placeholder='    Phone Number' />
     <br/>
     <textarea onChange={change4} value={comment} className="form-control" rows="5" id="comment" name="text"></textarea>
     <br/>
     <button onClick={click} type='button' className='btn btn-success' style={{borderRadius:"50px",padding:"16px 50px"}}>
      SEND MESSAGE
      </button>
     </div>
     <div>
     <img src="https://www.columbiaortho.org/sites/default/files/staticmaps/node-4219-15759232f76604390f24ee430a6dbf9ae04.png" />
     </div>

    </div>

    </>
  )
}

export default Question
