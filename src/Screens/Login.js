import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login() {

  const [credentials, setcredentials] = useState({email:"", password:""});

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });

    const json = await response.json()
    console.log(json);

    if (!json.success){
      alert("Enter valid Credentials");
    }

    if(json.success){
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      navigate("/");
    }

  }

  const onChange = (event)=> {
    setcredentials({...credentials,[event.target.name]: event.target.value});
  }


  return (

    <div>

    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handleSubmit} >
        <h3>Login Here</h3>

        <label htmlfor="username">E-mail</label>
        <input type="text" placeholder="E-mail" id="email" name="email" value={credentials.email} onChange={onChange} />

<label htmlfor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={credentials.password} onChange={onChange} />

        <button className="button">Log In</button>
        <div className="social">
          <p >      New User 
          <div className="fb"> <Link className="nav-link active" to="/createuser"> Sign Up </Link></div>
          </p>
        </div>
    </form>

    </div>

  )
}

export default Login;


