import React, { useState } from 'react'
import { db } from './firebase-config'

const Form = () => {
  
    const [FirstName,setFirstName]=useState("")
    const [MiddleName,setMiddleName]=useState("")
    const [LastName,setLastName]=useState("")
    const [MotherName,setMotherName]=useState("")
    const [StateName,setStateName]=useState("")
    const [City,setCity]=useState("")
    const [Pincode,setPincode]=useState("")
    const [ContactNo,setContactNo]=useState("")
    const [Emailid,setEmailid]=useState("")
    const [Password,setPassword]=useState("")

    


   const submitForm=(event)=>{
    event.preventDefault();
    if(FirstName && MiddleName && LastName && MotherName && StateName && City && Pincode && ContactNo && Emailid && Password){
      setFirstName("")
      setMiddleName("")
      setLastName("")
      setMotherName("")
      setStateName("")
      setCity("")
      setPincode("")
      setContactNo("")
      setEmailid("")
      setPassword("")
    
  
      db.collection("contacts").add({
        FirstName:FirstName,
        MiddleName:MiddleName,
        LastName:LastName,
        MotherName:MotherName,
        StateName:StateName,
        City:City,
        Pincode:Pincode,
        ContactNo:ContactNo,
        Emailid:Emailid,
        Password:Password
  
      });
      db.then(()=>{
        alert("massage has been submitted")
      })
      .catch((error)=>{
       alert(error.message)
      })
  
      
     }else{
      alert("Please Enter The fields")
     }
  
    }

    
   function reset(){
    setFirstName("")
    setMiddleName("")
    setLastName("")
    setMotherName("")
    setStateName("")
    setCity("")
    setPincode("")
    setContactNo("")
    setEmailid("")
    setPassword("")

   }
 
    
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <div className="hero" >
        <h2>Registration form</h2><br />
       <label>First Name:</label><br />
       <input type="text" name='First Name' id='First Name' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} /><br /><br />
       <label>Middle Name:</label><br />
       <input type="text" name='Middle Name' id='Middle Name' value={MiddleName} onChange={(e)=>setMiddleName(e.target.value)}  /><br /><br />
       <label>Last Name:</label><br />
       <input type="text" name='Last Name' id='Last Name'  value={LastName} onChange={(e)=>setLastName(e.target.value)} /><br /><br />
       <label>Mother Name:</label><br />
       <input type="text" name='Mother Name' id='Mother Name' value={MotherName} onChange={(e)=>setMotherName(e.target.value)} /><br /><br />
       <label>State Name:</label><br />
       <input type="text" name='State Name' id='State Name'  value={StateName} onChange={(e)=>setStateName(e.target.value)}/><br /><br />
       <label>City:</label><br />
       <input type="text" name='City' id='City'  value={City} onChange={(e)=>setCity(e.target.value)}/><br /><br />
       <label>pincode:</label><br />
       <input type="text" name='pincode' id='pincode'  value={Pincode} onChange={(e)=>setPincode(e.target.value)}/><br /><br />
       <label>Contact No:</label><br />
       <input type="text" name='Contact No' id='Contact No' value={ContactNo} onChange={(e)=>setContactNo(e.target.value)} /><br /><br />
       <label>Email id:</label><br />
       <input type="text" name='Email id' id='Email id' value={Emailid} onChange={(e)=>setEmailid(e.target.value)} /><br /><br />
       <label>Password:</label><br />
       <input type="password" name='Password' id='Password'  value={Password} onChange={(e)=>setPassword(e.target.value)}/><br /><br /> 
       <button type='submit'>Submit</button>
       <button type='reset' onClick={reset}>Reset</button>
       </div> 
       </form>
    </div>
  )
}

export default Form