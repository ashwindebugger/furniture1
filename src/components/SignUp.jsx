import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
//
const Signup = () => {
  const backimg = {
   // backgroundColor:'grey',
    //backgroundImage: 'url("https://assets-v2.lottiefiles.com/a/569d9eae-116d-11ee-ade3-df3bcdfa8a46/s4HLgrM1nM.gif")',
    backgroundImage: 'url("https://www.urbanwood.in/images/common/cover.gif")',
   // backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-living-room-sofa-furniture-warm-color-cartoon-background-image_2335628.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100% ',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //borderRadius:'100% 100%',
  };

  const BStyle = {
    backgroundColor: 'grey',
    borderRadius: '60px',
    color: 'white',
    cursor: 'pointer',
  };

  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '60px',
    borderWidth: '12px',
   // borderColor: '#FF5F1F',
    borderColor: 'pink',
  };

  const atag = {
    paddingLeft: '130px',
    color: 'darkBlue',
  };

  const [name, setname] = useState("");
  const [num, setnum] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

 
   
  
 

 

  const navigate=useNavigate();


  const handleSubmit=async()=>{
    try
    {
      navigate('/Login');
      const response = await axios.post("http://localhost:3026/users",{
        Name:name,
        Number:num,
        Email:email,
        Password:pass,
  });
    }
  catch(error)
  {
  console.error('this is a error',error)
    }
  }
  
  

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'pink', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" value={name} style={inputStyle} onChange={e=>setname(e.target.value)} required></input>
          <br></br>
          <input type="text" placeholder="Enter mobile number" value={num} style={inputStyle} onChange={e=>setnum(e.target.value)} required></input>
          <br></br>
          <input type="email" placeholder="Enter email address" value={email} style={inputStyle} onChange={e=>setemail(e.target.value)} required></input>
          <br></br>
          <input type="password" placeholder="Set Password"  value={pass} style={inputStyle} onChange={e=>setpass(e.target.value)}  required></input>
          <br></br>
          <a href="" >
           <NavLink to={'/Login'} style={atag}><b>Existing User</b></NavLink> 
          </a>
          <br></br>
          <br></br>
          <button style={BStyle} type="submit">
            <b>
              <h3>Sign Up</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
