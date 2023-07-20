import './App.css';
import Products from './Products';

import Form from './Form';
import ProductDetailsPage from './DisplayProduct';
import Login from './Login';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";


function App() {
  return (
    <div >
    <BrowserRouter>
      <nav  className="navbar">
       
       <Link  className="links" to="/">Home</Link>
      
       <Link  className="links" to="/information/:productId">ProductDetails</Link>
       <Link  className="links" to="/form">Form</Link>
       <Link  className="links" to="/login">Login</Link>

       </nav>
     
     
      <Routes>
       <Route path ='/' element={<Products/>}/>
       <Route path='/home' element={<Products/>}/>
       <Route path='/information/:productId' element={<ProductDetailsPage/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path="*" element={<h1>Page Not Found</h1>} />
      
       

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;