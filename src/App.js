import logo from './logo.svg';
import './App.css';
import Login from './LoginPage';
import Products from './ProductPage';
import { BrowserRouter , Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
      <Link to='/'>Login</Link>
      <Link to='/product'>Products</Link>
      <Link to='/'></Link>
      <Link></Link>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        {/* <Route path='/productdetails/:productId' element={<ProductDetails/>}/> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
