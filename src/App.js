import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './LoginPage';
import ProductPage from './ProductPage'
import ProductDetails from './MoreProducts'
// import AddProduct from './AddProduct'
function App() {
  return (
    <Router>
      <div className='main'>
        <div className='navbar'>
          <nav>
            <ul>
              <li>
              <Link to="/login">Login</Link>
               
              </li>
              <li>
 {/* <Link to="/add-product">Add Product</Link> */}
              </li>
              <li>
              <Link to="/">Products</Link>
                
              </li>
              <li>
                <Link to="/details">More details</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          {/* <Route path='/add-product' element={<AddProduct />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
