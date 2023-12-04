import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../Screens/Cart';

function Navbar(props) {

  const [cartView, setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (

    <div>

<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
  <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3yUJ1l7t8uTfvsT265_mlVqHUFJ-pvPeCLrT3g4GsA&s h-2 w-2"
          class="card-main"
          alt="..."
        />
    <a className="navbar-brand fs-2" href="/"> <b>HEALTHY-RAAM </b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken")) ? 

        <li className="nav-item">
          <Link className="nav-link active" to="/myOrder">My Orders</Link>
        </li>
        
        : " " }

      </ul>

      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBc1fWA6mxWcNyOzMN9TIVwc0zrd1l58axQA&usqp=CAU"
          class="card-main"
          alt="..."
        />
    <p> Visit AGAIN!!!</p><br/>

    {(!localStorage.getItem("authToken")) ? 

    <p><Link className="nav-link active btn-success rounded mx-2 mt-3" to="/login">Log In</Link></p>    

        :  ( <p class="two-buttons"><Link className="nav-link active btn-warning rounded mx-2 mt-3" onClick={handleLogOut}>Log Out</Link>
           <Link className="nav-link active btn-warning rounded mx-2 mt-3" to="myCart"> My Cart 
           <Badge pill bg="danger" style={{margin: "5px"}}> {data.length} </Badge>
           </Link></p> )
         }
      
    </div>
    {cartView ? <Modal onClose={() => setCartView(false)}> <Cart /> </Modal> : null}
  </div>
</nav>

    </div>

  )
}

export default Navbar;
