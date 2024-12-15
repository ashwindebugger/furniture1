import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import axios from 'axios';

const Login = () => {
  const backimg = {
    backgroundImage: 'url("https://cdn.dribbble.com/users/1200451/screenshots/8759739/media/38dc1e5f1060c443d927978bef79968c.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const navigate = useNavigate();

  const BStyle = {
    backgroundColor: 'purple',
    borderRadius: '60px',
    color: 'white',
    cursor: 'pointer',
  };
  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '80px',
    borderWidth: '07px',
    borderColor: 'purple',
  };
  const atag = {
    paddingLeft: '130px',
    color: 'purple',
  };
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  
const handleSubmit=(e)=>{
e.preventDefault();
if(Validate())
{
  axios.get("http://localhost:3026/users")
  .then(result=>{
    result.data.map(user=>{
      if(user.Email===email)
      {
        if(user.Password===password)
        {
navigate('/Home')
        alert("Succesfull LOGIN")
        return(<><p>good</p></>)
        }
        else{
          alert("Wrong Password or email");
        }
      }
      else{
        alert("Wrong Password or email");
      }
     
    })
  })
}



}

const Validate=()=>{
    let result=true;
    if(email===''||email===null)
    {
        result=false;
        console.log('name enter'); 
    }
    
    if(password===''||password===null)
    {
        result=false;
        console.log('enter pass ');
    }
    return result;
}

 


  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'purple', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> Login Page
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} placeholder="Enter email address" style={inputStyle} onChange={e=>setemail(e.target.value)}></input>

          <br></br>
          <br></br>
          <input type="password" value={password} placeholder="Password" style={inputStyle}  onChange={e=>setpassword(e.target.value)} ></input>

          <br></br>
          <a href="" style={atag}>
            
            <Link to={'/'}>forget Password?</Link>
          </a>

          <br></br>
          <br></br>
          <button  type="submit" style={BStyle} >
            <b>
              <h3>Login</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
