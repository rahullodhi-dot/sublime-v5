import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoriesTest from './pages/CategoriesTest';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTP from './pages/OTP';
import ProtectedRoute from './components/ProtectedRoute';
import ComingSoon from './pages/ComingSoon';
import WishlistPage from './components/Wishlist';
import Cart from './pages/Cart';
import "leaflet/dist/leaflet.css";

import Profile from './pages/Profile';
import StoreLocation from './pages/StoreLocator';
import Disclaimer from './pages/Disclaimer';
import TermandCondition from './pages/TermandCondition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="product/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          /> */}
          <Route path="categories" element={<CategoriesTest />} />
          <Route path="blogs" element={<ComingSoon />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Wishlist" element={<WishlistPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/store" element={<StoreLocation />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/TnC" element={<TermandCondition />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
