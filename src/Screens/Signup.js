import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Signup() {

  const [credentials, setcredentials] = useState({name:"", email:"", password:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.paasword})
    })

    const json = await response.json()
    console.log(json);

    if (!json.success){
      alert("Enter valid Credentials");
    }

  }

  const onChange = (event)=> {
    setcredentials({...credentials,[event.target.name]: event.target.value});
  }
  return (

    <div>

    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
        <h3>SignUp Here</h3>

        <label for="username">Name</label>
        <input type="text" placeholder="Name" id="username" name="name" value={credentials.name} onChange={onChange} />

        <label for="username">E-mail</label>
        <input type="text" placeholder="Email" id="email" name="email" value={credentials.email} onChange={onChange} />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={credentials.password} onChange={onChange} />

        <button class="button"> Sign Up </button>
        <div class="social">
          <p > Already Registered ?
          <div class="fb">
          <Link className="nav-link active" to="/login">Login</Link> </div>
          </p>
        </div>
    </form>



    </div>

  )
}

export default Signup;


