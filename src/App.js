import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import MyOrder from './Screens/MyOrder';
import Cart from './Screens/Cart';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (

    <CartProvider>

  <Router>

  <div>  
 <Routes>

 <Route exact path = "/" element = {<Home/>} />
 <Route exact path = "/login" element = {<Login/>} />
 <Route exact path = "/createuser" element = {<Signup/>} />
 <Route exact path="/myorder" element={<MyOrder />} />
 <Route exact path="/myCart" element={<Cart />} />

 </Routes>
</div>

 </Router>
  
  </CartProvider>

  );
}

export default App;
