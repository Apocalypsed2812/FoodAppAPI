import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ManageProduct from './pages/ManageProduct'
import AddProduct from './pages/AddProduct'
import About from './pages/About'
import EditProduct from './pages/EditProduct'
import NotFound from './pages/NotFound'

import { GlobalState } from "./context/GlobalState";
import { useContext } from "react";

function App() {
  const state = useContext(GlobalState);
  const isLogin = state.UserAPI.login[0]
  const isAdmin = state.UserAPI.admin[0]
  console.log("isAdmin: " + isAdmin)
  const loading = state.loading[0]
  return (
    <BrowserRouter >
      <div className="containerLayout">
        {loading && <Loading />}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail/:slug" element={<ProductDetail />} />
          <Route exact path="/cart" element={isLogin ? <Cart /> : <Navigate to='/login' />} />
          <Route exact path="/login" element={!isLogin ? <Login /> : <Navigate to='/' />} />
          <Route exact path="/register" element={!isLogin ? <Register /> : <Navigate to='/' />} />
          <Route exact path="/manage/products" element={isAdmin ? <ManageProduct /> : <Navigate to='/page-not-found' />} />
          <Route exact path="/add/product" element={isAdmin ? <AddProduct /> : <Navigate to='/page-not-found' />} />
          <Route exact path="/edit/product/:slug" element={isAdmin ? <EditProduct /> : <Navigate to='/page-not-found' />} />
          <Route exact path="/:something" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
