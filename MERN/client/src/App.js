
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import Login from './login'; // Import the Login component
import Register from './register'; // Import the Register component
import Admindashboard from './admindashboard';
import Userdashboard from './userdashboard';
import CarouselComponent from './Landingpage/carousel';
import Nav from './Landingpage/nav';
import Overview from './Landingpage/overview';
import CartPage from './Cart';
import CheckoutPage from './checkout';
import NewOffers from './offers';
import AboutUs from './Aboutus';
import './app.css'
function App() {
  return (
    < >
    <Nav/>
        <Routes>
        <Route path='/' element={<CarouselComponent/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} /> {/* Add login route */}
        <Route path="/register" element={<Register />} /> {/* Add register route */}
        <Route path='/admin/dashboard' element={<Admindashboard/>}/>
        <Route path='/user/dashboard' element={<Userdashboard/>}/>
        <Route path='/overview' element={<Overview/>} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/newoffers' element={<NewOffers/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        </Routes>
</>

  );
}

export default App;
