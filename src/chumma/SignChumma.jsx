import React from 'react'
import { useState } from 'react';

const SignChumma = () => {
    const [name,setname]=useState('');
    const [pass,setpass]=useState('');



const check=(event)=>{
event.preventDefault();
if(Validate())
{
  console.log('proceed');
}


}

const Validate=()=>{
    let result=true;
    if(name===''||name===null)
    {
        result=false;
        console.log('name enter'); 
    }
    
    if(pass===''||pass===null)
    {
        result=false;
        console.log('enter pass ');
    }
    return result;
}

  return (
    <div>
        <form onSubmit={check}>
<div>Enter name :</div>
<input type='text' onChange={event=>setname(event.target.value)}></input>
<div>Enter password:</div>
<input type='text' onChange={event=>setpass(event.target.value)}></input>
<br></br>
<button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignChumma